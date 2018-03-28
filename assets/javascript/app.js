$(document).ready(function(){
    //Write a start button to the document inside the "start button" div
    //In theory, we could have the button included in the base html and clear it
    //when the user presses start. However, it is cleaner to have everything that changes
    //in one place.

    var startButton = "<button id='startButton'>Start Game!</button>";
    $("#startButtonContainer").append(startButton);

    //Clicking the button should initiate ...
    $("#startButton").click(function(){
        
    });

});