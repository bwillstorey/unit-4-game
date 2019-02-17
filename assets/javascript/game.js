$(document).ready(function() {

// Define global variables

    var randomNumber = Math.floor(Math.random() * 120) + 19;
    var wins
    var losses
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
    currentScore = champagne;
})




// check if randomNumber and currentScore match to update wins/losses

if (randomNumber ===)


// Call Functions

imageAssignment()
displayUpdate()

})