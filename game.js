var buttonColors = ["red", "blue", "yellow", "green"];
var userClickedPattern = [];
var gamePattern = [];
var gameStart = 0;
var level = 0;


//Function to iterate the sample
function nextSequence() {
    var randomNumber;
    userClickedPattern = [];
    randomNumber = Math.floor(Math.random() * 4);
    var randomChosenColor = buttonColors[randomNumber];
    gamePattern.push(randomChosenColor);
    $("#" + randomChosenColor).fadeOut(100).fadeIn(100);
    playSound(randomChosenColor);
    level += 1;
    $("h1").text("Level "+ level);
    // console.log(gamePattern);
}


// Play Sound
function playSound(name){
    var audio = new Audio("/sounds/"+name+".mp3");
    audio.play();
}

// Function to animate the button clicked to grey color for 100ms
function animatePress(currentColor){
        $("#" +currentColor).addClass("pressed");
    setTimeout(function() {
        $("#" + currentColor).removeClass("pressed");
    },100);
}


//Capture the button clicked
$(".btn").on("click", function(){
    // var userChosenColor = this.id;
    var userChosenColor = $(this).attr("id");
    userClickedPattern.push(userChosenColor);
    playSound(userChosenColor);
    animatePress(userChosenColor);
    console.log("Button Clicked");
    checkAnswer(userClickedPattern.length-1);
});


//function to start the game
$(document).keydown(function(e) {
    gameStart +=1;
    if (gameStart == 1) {
        $("h1").text("Level 0");
        nextSequence();
    }
})

function  checkAnswer(currentLevel) {
    console.log("User clicked pattern ", userClickedPattern);
    console.log("Game Pattern", gamePattern);
    console.log("level", level);
    if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
        console.log("Success");

        if (gamePattern.length === userClickedPattern.length) {
            setTimeout(function () {
                nextSequence();
            }, 1000);
        }
    }
    else {
        console.log("User clicked pattern ", userClickedPattern);
        console.log("Game Pattern", gamePattern);
        console.log("wrong!");
        var wrongSound = new Audio("sounds/wrong.mp3");
        wrongSound.play();
        $("body").addClass("game-over");
        setTimeout(function (){
            $("body").removeClass("game-over");
        },200);
        $("h1").text("Game Over, Press any key to continue");
        startOver();
    }
};


function startOver() {
    userClickedPattern = [];
    gamePattern = [];
    gameStart = 0;
    level = 0;
}
