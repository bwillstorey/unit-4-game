$(document).ready(function() {

// Define global variables

    var randomNumber = Math.floor(Math.random() * 120) + 19;
    var wins = 0;
    var losses = 0;
    var currentScore = 0;
    var champagne = Math.floor(Math.random() * 12) + 1;
    var ball = Math.floor(Math.random() * 12) + 1;
    var gayle = Math.floor(Math.random() * 12) + 1;
    var skull = Math.floor(Math.random() * 12) + 1;

console.log("Champage = " + champagne)
console.log("Ball = " + ball)
console.log("Gayle = " + gayle)
console.log("Skull = " +skull)

// FUNCTIONS

// Update display with Random Number, # Wins, # Losses, & Current Score

function resetRound () {

}

function resetGame () {
    currentScore = 0;
    randomNumber = Math.floor(Math.random() * 120) + 19;
    champagne = Math.floor(Math.random() * 12) + 1;
    ball = Math.floor(Math.random() * 12) + 1;
    gayle = Math.floor(Math.random() * 12) + 1;
    skull = Math.floor(Math.random() * 12) + 1;
    displayUpdate()

}

function displayUpdate () {
    $("#random-number").text(randomNumber);
    $("#wins").text(wins);
    $("#losses").text(losses);
    $("#points").text(currentScore)
}

// Assign values to images
function imageAssignment () {
    $("#champagne").html(champagne);
    $("#ball").html(ball);
    $("#gayle").html(gayle);
    $("#skull").html(skull);
}



// Event listeners for image clicks

$("#champagne").on("click", function() {
    currentScore = currentScore + champagne;
    displayUpdate()
    checkScore()
})

$("#ball").on("click", function() {
    currentScore = currentScore + ball;
    displayUpdate()
    checkScore()
})

$("#gayle").on("click", function() {
    currentScore = currentScore + gayle;
    displayUpdate()
    checkScore()
})

$("#skull").on("click", function() {
    currentScore = currentScore + skull;
    displayUpdate()
    checkScore()
})


// check if randomNumber and currentScore match to update wins/losses

function checkScore () {
    if (randomNumber === currentScore) {
        wins++
        displayUpdate()
    }
    else if (randomNumber < currentScore) {
        losses++
        displayUpdate()
        resetGame()
    }

}



// Call Functions

imageAssignment()
displayUpdate()
checkScore()

})