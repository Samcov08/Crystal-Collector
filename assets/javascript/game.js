var targetNumber = Math.floor(Math.random() * 100) + 19;
var red = Math.floor(Math.random() * 12);
var yellow = Math.floor(Math.random() * 12);
var green = Math.floor(Math.random() * 12);
var blue = Math.floor(Math.random() * 12);

var wins = 0;
var losses = 0;
var pointsToGo = 0;
var totalPoints = 0;



var directionsText = document.getElementById("directions-text");
var winsText = document.getElementById("wins-text");
var lossesText = document.getElementById("losses-text");
var totalPointsText = document.getElementById("totalPoints-text");



function gameStart() {
    pointsToGo = 0;
    userGuesses = [];
    winsText.textContent = "wins: " + wins;
    lossesText.textContent = "losses: " + losses;

    $("#red").on("click", function() {
                $("#counter") ++;
            }
            $("#yellow").on("click", function() {
                    $("#counter") ++;
                }

                $("#green").on("click", function() {
                        $("#counter") ++;
                    }

                    $("#blue").on("click", function() {
                            $("#counter") ++;
                        }