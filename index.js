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
    title: "How old was Yoda when he died",
    answers: [2000, 500, 900, 1000],
    correct: 2,
  },
  {
    title: "What planet did Luke Skywalker grow up on",
    answers: ["Tatooine", "Earth", "Hoth", "Alderaan"],
    correct: 0,
  },
];

$(document).ready(function () {
  $(".start a").click(function (e) {
    e.preventDefault();
    $(".start").hide();
    $(".quiz").show();
    showQuestion(0);
  });
  $(".quiz ul").on("click", "li", function () {
    $(".selected").removeClass("selected");
    $(this).addClass("selected");
  });

  $(".submitAnswer").click(checkAnswer);
  // $(".previousQuestion").click(previousQuestion);
  $(".nextQuestion").click(nextQuestion);
  $(".restart-quiz").click(restartQuiz);
});

function showQuestion(current) {
  $(".nextQuestion").hide();
  let question = questions[current];
  $(".quiz h2").text(question.title);
  $(".quiz ul").html("");
  for (let i = 0; i < question.answers.length; i++) {
    $(".quiz ul").append(`<li id='${i}'>${question.answers[i]}</li>`);
  }
}

function nextQuestion(e) {
  $(".submission").hide();
  e.preventDefault();
  console.log(currentQuestion);
  if (currentQuestion < questions.length - 1) {
    currentQuestion += 1;
    showQuestion(currentQuestion);
  } else {
    console.log("results");
    showResults();
  }
}

function checkAnswer(e) {
  e.preventDefault();

  if (!$(".selected").length) {
    return alert("Please select an answer");
  }
  $(".nextQuestion").show();
  const selected = $(".selected").text();
  const correctIdx = questions[currentQuestion].correct;
  const correct = questions[currentQuestion].answers[correctIdx];

  if ($(".selected").attr("id") == correctIdx) {
    score++;
  }

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
  $(".quiz").show();
  $(".summary").hide();
  showQuestion(currentQuestion);
}
