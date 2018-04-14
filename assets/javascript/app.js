//define variables

var gameOn = false;
var correctAnswer = false;
var timeUp = false;
var gameOver = false;
var myQuestions = [];
var rightAnswer = 0;
var wrongAnswer = 0;



$(document).ready(function() {
    //start button is clicked
    $("#start").click(function() {
        questionList.gameOn();
    })

    getQuestions();

    $(".buttons").click(function() {
        questionList.gradeAnswer($(this).data("answer"));
        console.log("graded it!");
    });

    //resets all variables
    function reset() {
        gameActive = false,
            correctAnswer = false,
            gameOver = false,
            questionList.num = 8,
            rightAnswer = 0,
            wrongAnswer = 0,
            gameQuestion = [];
        timer.reset();
        getQuestions();
        questionList.gameOn();
    }
    //array of all the questions and answers
    var myQuestions = [
    {
        quest: "Lorem ipsum?",
        answ: ["a", "b", "c", "d"],
        answIndex: 0
    },

    {
        quest: "Lorem ipsum?",
        answ: ["a", "b", "c", "d"],
        answIndex: 0
    },

    {
        quest: "Lorem ipsum?",
        answ: ["a", "b", "c", "d"],
        answIndex: 0
    },

    {
        quest: "Lorem ipsum?",
        answ: ["a", "b", "c", "d"],
        answIndex: 0
    },

    {
        quest: "Lorem ipsum?",
        answ: ["a", "b", "c", "d"],
        answIndex: 0
    },

    {
        quest: "Lorem ipsum?",
        answ: ["a", "b", "c", "d"],
        answIndex: 0
    },

    {
        quest: "Lorem ipsum?",
        answ: ["a", "b", "c", "d"],
        answIndex: 0
    },

    {
        quest: "Lorem ipsum?",
        answ: ["a", "b", "c", "d"],
        answIndex: 0
    }

    ];
    })

   

function getQuestions() {
    //make questions into new array
    gameQuestion = myQuestions.slice(0);
    for (var i = myQuestions.length - 1; i > 0; i--) {
        
        var getIndex = Math.floor(Math.random() * (i + 1));

        gameQuestion[getIndex] = gameQuestion[i];

        gameQuestion[i] = displayQuestion;
    }
}

//set timer
var timer = {
    clock: 120,
//reset timer to 120 seconds
    reset: function() {
        timer.clock = 120;

        $("#timer").text("120");
    },
//stop timer
    begin: function() {
        cycle = setInterval(timer.run, 1000);
    },

    stop: function() {
        clearInterval(cycle);
    },

    run: function() {
        if (timer.clock === 0) {
            timeUp = true;
            timer.stop();
            questionList.gameOver();
        } else {
            timer.clock--;
            $("#timer").text(timer.clock);
        }
    }
}

getQuestions();

var questionList = {
    num: 8,
    gameOn: function() {
        if (questionList === 0) {
             questionList.gameOver();

    } else {
        $("#start").css("display", "none");

        gameActive = true;
        timer.begin();
        questionList.showQuestion();
    }
},

showQuestion: function() {
    questionList.num--;

    $("#question").text(myQuestions[questionList.num].ans[0]);
    $("#question").text(myQuestions[questionList.num].ans[1]);
    $("#question").text(myQuestions[questionList.num].ans[2]);
    $("#question").text(myQuestions[questionList.num].ans[3]);
},

checkAnswer: function(data) {
    if (parseInt(data) === myQuestions[questionList.num].ansIndex) {
        correctAnswer = true;
        rightAnswer++;
    } else {
        correctAnswer = false;
        wrongAnswer++;
    }
},

gameOver: function() {
    $("#question").css("display", "none");
    $("#button1").css("display", "none");
    $("#button2").css("display", "none");
    $("#button3").css("display", "none");
    $("#button4").css("display", "none");

    var unAnswered;
    if ((rightAnswer + wrongAnswer) === 10) {
        unAnswered = 0;
    } else {
        unAnswered = 10 - rightAnswer + wrongAnswer;
    }
    $("#unAnswered").text(unAnswered);
    $("#score").text(rightAnswer + '/' + '8');
}
}

timer.begin();
console.log(wrongAnswer);