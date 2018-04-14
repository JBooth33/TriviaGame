//define variables

var timeUp = false;
var gameOver = false;
var rightAnswer = 0;
var currentQuestion = 0;
var myQuestions = [
    {
        quest: "Where is The Wire set?",
        answ: ["Baltimore,MD", "Philadelphia, PA", "Boston, MA", "New York, NY"],
        answIndex: 0
    },

    {
        quest: "What town is Stranger Things set in?",
        answ: ["Elgin, IL", "Farmington, MO", "Lincoln, NE", "Hawkins, IN"],
        answIndex: 3
    },

    {
        quest: "Where is the American version of The Office set?",
        answ: ["Dayton, OH", "Edina, MN", "West Lafayette, IN", "Scranton, PA"],
        answIndex: 3
    },

    {
        quest: "Where is Breaking Bad set?",
        answ: ["Moab, UT", "Albuquerque, NM", "Phoenix, AZ", "Fresno, CA"],
        answIndex: 1
    },

    {
        quest: "What city is Cheers set in?",
        answ: ["Philadelphia, PA", "Chicago, IL", "Providence, RI", "Boston, MA"],
        answIndex: 3
    },

    {
        quest: "What town is Parks and Recreation set in?",
        answ: ["Springfield, IL", "Utica, NY", "Pawnee, IN", "Erie, PA"],
        answIndex: 2
    },

    {
        quest: "What city is Boardwalk Empire set in?",
        answ: ["Santa Monica, CA", "Chicago, IL", "Atlantic City, NJ", "Ocean City, MD"],
        answIndex: 2
    },

    {
        quest: "What city is Happy Days set in?",
        answ: ["Minneapolis, MN", "Milwaukee, WI", "St Louis, MO", "Detroit, MI"],
        answIndex: 1
    }

    ];


$(document).ready(function() {
    //questions and answers start off hidden
    
    //start button is clicked.  Trying to reset display property so questions and answers are shown
    $("#start").click(function() {
        displayCurrentQuestion();
        timer.run();
        $(".quizMessage").hide();
        $("next").on("click", function() {
            if(!gameOver) {
    //checking user input
                value = $("input[type='radio']:checked").val();
    //checking user input against correct answer
                if (value == myQuestions[currentQuestion].answIndex) {
                    correctAnswers++;
                }
    //move to next question
                currentQuestion++;
    //checking game progress
                if (currentQuestion < questions.length) {
                    displayCurrentQuestion();
                } else {

                    
    //showing score and resetting the game
                    displayScore();
                    gameOver = true;
                    timer.reset();
                    reset();
                
                }
            }        
        })
        
    

   

    //resets all variables
    function reset() {
        var timeUp = false;
        var gameOver = false;
        var rightAnswer = 0;
        var currentQuestion = 0;
        timer.reset();
        getQuestions();

    //show current question
    function displayCurrentQuestion() {
        var question = questions[currentQuestion].question;
        $("#question").text(myQuestions.question.quest);
        $(".options").text(myQuestions.question.answ);
    }
       

//set timer
var timer = {
    clock: 120,
//reset timer to 120 seconds
    reset: function() {
        timer.clock = 120;

        $("#timer").text("120");
    },
//begin timer
    begin: function() {
        cycle = setInterval(timer.run, 1000);
    },
//stop timer
    stop: function() {
        clearInterval(cycle);
    },
//funtion to run timer until time hits zero
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



