buttonColors = ["red", "blue", "yellow", "green"];
userClickedPattern = [];
gamePattern = [];
var gameStart = 0;
var level = 0;


//Function to iterate the sample
function nextSequence() {
    var randomNumber;
    randomNumber = Math.floor(Math.random() * 4);
    var randomChosenColor = buttonColors[randomNumber];
    gamePattern.push(randomChosenColor);
    $("#" + randomChosenColor).fadeOut(100).fadeIn(100);
    playSound(randomChosenColor);
    level += 1;
    $("h1").text("Level "+ level);
    console.log(gamePattern);
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
$(".btn").on("click", function(event){
    // var userChosenColor = this.id;
    var userChosenColor = $(this).attr("id");
    userClickedPattern.push(userChosenColor);
    playSound(userChosenColor);
    animatePress(userChosenColor);
    console.log(userClickedPattern);

    checkAnswer(0,[], userClickedPattern)
})


//function to start the game
$(document).keydown(function(e) {
    gameStart +=1;
    if (gameStart == 1) {
        $("h1").text("Level 0");
        nextSequence();
    }
})

function  checkAnswer(currentLevel, gamePattern, userPattern){
    console.log(userClickedPattern)
};

