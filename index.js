let score = 0;
let currentQuestion = 0;
let questions = [
    {
        title: "Who is Darth Vader's son?",
        answers: ['Yoda', 'Luke', 'Han Solo', 'R2D2'],
        correct: 1
    }
     {
        title: "What is the name of Han Solo's ship?",
        answers: ['X-wing', 'Star Cruiser', 'Death Star', 'Millenium Falcon'],
        correct: 3
    }
     {
        title: "How old was Yoda when he died",
        answers: [2000, 500, 900, 1000],
        correct: 2
    }
     {
        title: "What planet did Luke Skywalker grow up on",
        answers: ['Tatooine', 'Earth', 'Hoth', 'Alderaan'],
        correct: 0
    },
];


$(document).ready(function(){

    $('.start a').click(function(e){
        e.preventDefault();
        $('.start').hide();
        $('.quiz').show();
        showQuestion();
    });

    $('.quiz ul').on('click', 'li',function(){
        $('.selected').removeClass('selected');
        $(this).addClass('selected');
    });

});





function showQuestion(){
    let question = questions[currentQuestion];
    $('.quiz h2').text(question.title);
    $('.quiz ul').html('');
    for(var i=0; i<question.answers.length; i++) {
        $('.quiz ul').append("<li id='"+i+"'>"+question.answers[i]+"</li>");
        )
    }
}

function checkAnswer(){

}

function showSummary(){

}