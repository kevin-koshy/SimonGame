buttonColors = ["red", "blue", "yellow", "green"];
userClickedPattern = [];
gamePattern = [];

function nextSequence() {
    var randomNumber;
    randomNumber = Math.floor(Math.random() * 4);
    var randomChosenColor = buttonColors[randomNumber];
    gamePattern.push(randomChosenColor);
    console.log(gamePattern);
    $("#" + randomChosenColor).fadeOut(100).fadeIn(100);
    var audio = new Audio("/sounds/" + randomChosenColor + ".mp3")
    audio.play();
}

$(".btn").on("click", function(event){
    // var userChosenColor = this.id;
    var userChosenColor = $(this).attr("id");
    userClickedPattern.push(userChosenColor);
    console.log(userClickedPattern);
})