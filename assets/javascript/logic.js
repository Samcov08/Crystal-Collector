var crystal = {
    blue: {
        value: 0
    },
    red: {
        value: 0
    },
    green: {
        value: 0
    },
    yellow: {
        value: 0
    }
};

var wins = 0;
var losses = 0;
var targetScore = 0;
var yourScore = 0;


var getRandom = function(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function gameStart() {
    //rest current score
    var currentScore = 0;
    //set a new target score
    var targetNumber = getRandom(19, 120);
    //set variables to crystals
    crystal.red.value = getRandom(1, 12);
    crystal.yellow.value = getRandom(1, 12);
    crystal.green.value = getRandom(1, 12);
    crystal.blue.value = getRandom(1, 12);



    console.log("Target Score:" + targetScore);
    console.log("Blue" + crystal.blue.value);
    console.log("Red" + crystal.red.value);
    console.log("Yellow" + crystal.yellow.value);
    console.log("Green" + crystal.green.value);

    var addValue = function(crystal) {
        currentScore = currentScore + crystal.value
    }

}

gameStart();
$("#red").click(function() {
        addValue(crystal.red);
    }),
    $("#yellow").click(function() {
        addValue(crystal.yellow);
    }),
    $("#green").click(function() {
        addValue(crystal.green);
    }),
    $("#blue").click(function() {
        addValue(crystal.blue);
    })