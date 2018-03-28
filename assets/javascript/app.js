$(document).ready(function(){
    
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
    
    //function endGame()
    //Display Game Over Message!
    //Display Score
    //Display button offering for a new game
    //button on Click calls newGame()
    

    //Clicking the button should initiate ...
    $("#startButton").click(function(){
        gameTimer.start();
    });

});