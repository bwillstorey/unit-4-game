$(document).ready(function() {

// Define global variables

    var randomNumber = Math.floor(Math.random() * 120) +19
    var wins
    var losses
    var currentScore = 0;

// FUNCTIONS


// Call Functions


// Assign values to IDs

function displayUpdate () {
    $("#random.number").text(randomNumber);
    $("#wins").text(wins);
    $("#losses").text(losses);
    $("#points").text(currentScore)

}


})