$(document).ready(function(){
    
    //event listener defining the functionality of each button when clicked
    $(".quizOptions").click(function(){
        console.log("Clicked!");
        $(this).parent().attr("selectedAnswer", this.text());
        console.log(this.text());
    });


    //Creating a class to act as the game timer
    var intervalId;
    var clockRunning = false;

    var gameTimer = {
        timeRemaining: 30,

        start: function(){
            if (!clockRunning){
                intervalId = setInterval(gameTimer.count, 1000);
                clockRunning = true;
            }
        },

        count: function(){
           gameTimer.timeRemaining--;
           console.log(gameTimer.timeRemaining);

           //Update the page to reflect the time remaining
           var timeDisplay = $("<p>");
           timeDisplay.text("Time Remaining: " + gameTimer.timeRemaining)
           $("#timerContainer").empty();
           $("#timerContainer").append(timeDisplay);
            
           //Call function "endGame() if time <= 0"
           if (gameTimer.timeRemaining <= 0){
                gameTimer.stop();
           }
        },

        //Called when we reach time 0. 
        stop: function(){
            clearInterval(intervalId);
            clockRunning = false;
            endGame();
        },

        //We will need this function when a new game begins
        reset: function(){
            clearInterval(intervalId);
            clockRunning = false;
            gameTimer.timeRemaining=30;
        }

    };

    //Write a start button to the document inside the "start button" div
    //In theory, we could have the button included in the base html and clear it
    //when the user presses start. However, it is cleaner to have everything that changes
    //in one place.
    function newGame(){
        var startButton = $("<button>");
        startButton.attr("id", "startButton");
        startButton.text("Start Game!");
        
        $("#startButtonContainer").append(startButton);

        gameTimer.reset();
    }

    //We will call this function at least once, when the page initially loads. 
    newGame();

    //This function will randomly select a number of questions from the master "questions" array
    //contained within questions.js
    function selectQuestions(){
        return questions;
    }

    

    //this question will display the questions - called whenever a new game is started
    function displayQuestions(){
        questions = selectQuestions();
        console.log(questions);

        //correct answers array

        for (question in questions){
            var questionDiv = $("<div>");
            questionDiv.attr("id", "questionNumber"+question);
            
            //Display the text of the first question
            var questionText = $("<p>");
            questionText.text(questions[question].questionText);
            questionDiv.append(questionText);

            questionDiv.attr("correctAnswer", questions[question].correctAnswer);

            questionDiv.attr("selectedAnswer", "");
            var selectedAnswerDisplay = $("<p>");
            selectedAnswerDisplay.text("Selected Answer: " + questionDiv.attr("selectedAnswer"));
            questionDiv.append(selectedAnswerDisplay);
            
            //Create a button for option 1
            //all should share a class so on click can apply to all of them
            //object itself will 
            var buttonOption1 = $("<button>");
            buttonOption1.attr("class","quizOptions");
            buttonOption1.text(questions[question].option1);
            questionDiv.append(buttonOption1);

            
            //Create a button for option 2
            var buttonOption2 = $("<button>");
            buttonOption2.attr("class","quizOptions");
            buttonOption2.text(questions[question].option2);
            questionDiv.append(buttonOption2);

            //Create a button for option 3
            var buttonOption3 = $("<button>");
            buttonOption3.attr("class","quizOptions");
            buttonOption3.text(questions[question].option3);
            questionDiv.append(buttonOption3);
            
            //Create a button for option 4
            var buttonOption4 = $("<button>");
            $(buttonOption4).addClass("quizOptions");
            buttonOption4.text(questions[question].option4);
            questionDiv.append(buttonOption4);
            
            
            
            $("#questionsContainer").append(questionDiv);
        }

    }

    

    //Function startGame()
    //Starts the timer in the countdown timer object, changes the UI elements to display 
    //questions on the screen
    function startGame(){
        displayQuestions();
        $("#startButtonContainer").empty();
        gameTimer.start();
    }
    
    
    
    //function endGame()
    //Display Game Over Message!
    //Display Score
    //Display button offering for a new game
    //button on Click calls newGame()
    function endGame(){
        $("#timerContainer").empty();
        var allDoneMessage = $("<h2>");
        allDoneMessage.text("All Done!");
        $("#gameDisplay").append(allDoneMessage);

        var newGameButton = $("<button>");
        newGameButton.text("New Game");
        newGameButton.attr("id", "newGameButton");
        $("#gameDisplay").append(newGameButton);
    }
    

    //Clicking the button should call the startGame function
    $("#startButton").click(function(){
        startGame();
    });

    //Clicking the New Game button should start the process again
    $("#newGameButton").click(function(){
        newGame();
    });
});