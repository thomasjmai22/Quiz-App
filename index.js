let score = 0;
let currentQuestion = 0;
let questions = [
  {
    title: "Who is Darth Vader's son?",
    answers: ["Yoda", "Luke", "Han Solo", "R2D2"],
    correct: 1,
  },
  {
    title: "What is the name of Han Solo's ship?",
    answers: ["X-wing", "Star Cruiser", "Death Star", "Millenium Falcon"],
    correct: 3,
  },
  {
    title: "How old was Yoda when he died?",
    answers: [2000, 500, 900, 1000],
    correct: 2,
  },
  {
    title: "What planet did Luke Skywalker grow up on?",
    answers: ["Tatooine", "Earth", "Hoth", "Alderaan"],
    correct: 0,
  },
  {
    title: "What is the Jedi's weapon of choice?",
    answers: ["Sword", "Plasma Rifle", "Lightsaber", "Axe"],
    correct: 2,
  },
];

$(document).ready(function () {
  $(".start a").click(function (e) {
    e.preventDefault();
    $(".start").hide();
    $(".quiz").show();
    updateScore();
    showQuestion(0);
  });

  $(".submitAnswer").click(checkAnswer);
  $(".nextQuestion").click(nextQuestion);
  $(".restart-quiz").click(restartQuiz);
});

function showQuestion(current) {
  $(".nextQuestion").hide();
  let question = questions[current];
  $(".quiz h2").text(question.title);
  $(".quiz form").html("");
  for (let i = 0; i < question.answers.length; i++) {
    $(".quiz form").append(
      `<p><label for='${i}'>${question.answers[i]}</label><input type="radio" id="${i}" value="${i}" name="choice" /></p>`
    );
  }
}

function nextQuestion(e) {
  $(".submission").hide();
  e.preventDefault();
  console.log(currentQuestion);
  if (currentQuestion < questions.length - 1) {
    currentQuestion += 1;
    updateScore();
    showQuestion(currentQuestion);
  } else {
    console.log("results");
    showResults();
  }
}

function updateScore() {
  $(".score").text(score);
  $(".currentQuestion").text(currentQuestion + 1);
  $(".totalQuestions").text(questions.length);
}

function checkAnswer(e) {
  e.preventDefault();

  if (!$('input[type="radio"]:checked').length) {
    return alert("Please select an answer");
  }
  $(".nextQuestion").show();
  const selected =
    questions[currentQuestion].answers[$('input[type="radio"]:checked').val()];
  const correctIdx = questions[currentQuestion].correct;
  const correct = questions[currentQuestion].answers[correctIdx];

  if ($('input[type="radio"]:checked').val() == correctIdx) {
    score++;
  }

  updateScore();

  $(".submission").show();
  $(".your-answer").text(selected);
  $(".correct-answer").text(correct);
}

function showResults() {
  $(".quiz").hide();
  $(".summary").show();
  $(".summary p").text(
    `Congrats you scored ${score} out of ${questions.length} correct!`
  );
}

function restartQuiz(e) {
  e.preventDefault();
  score = 0;
  currentQuestion = 0;
  updateScore();
  $(".quiz").show();
  $(".summary").hide();
  showQuestion(currentQuestion);
}
