var redcrystal = 0;
var yellowcrystal = 0;
var greencrystal = 0;
var bluecrystal = 0;

var wins = 0;
var losses = 0;
var pointsToGo = 0;
var totalPoints = 0;


var getRandom = function(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function gameStart() {
    var currentScore = 0;
    var targetNumber = getRandom(19, 120);

    redcrystal = getRandom(1, 12);
    yellowcrystal = getRandom(1, 12);
    bluecrystal = getRandom(1, 12);
    greencrystal = getRandom(1, 12);
}
//  pointsToGo = 0;
//userGuesses = [];
//winsText.textContent = "wins: " + wins;
//lossesText.textContent = "losses: " + losses;


$("#red").on("click", function() {}
        $("#yellow").on("click", function() {

            }
            $("#green").on("click", function() {

                }
                $("#blue").on("click", function() {

                    }

                    //var directionsText = document.getElementById("directions-text");
                    //var winsText = document.getElementById("wins-text");
                    //var lossesText = document.getElementById("losses-text");
                    //var totalPointsText = document.getElementById("totalPoints-text");