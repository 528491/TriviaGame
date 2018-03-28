$(document).ready(function(){
    
    //Write a start button to the document inside the "start button" div
    //In theory, we could have the button included in the base html and clear it
    //when the user presses start. However, it is cleaner to have everything that changes
    //in one place.
    function newGame(){
        var startButton = $("<button>");
        startButton.attr("id", "startButton");
        startButton.text("Start Game!");
        
        $("#startButtonContainer").append(startButton);
    }

    //We will call this function at least once, when the page initially loads. 
    newGame();
    

    //Clicking the button should initiate ...
    $("#startButton").click(function(){
        
    });

});