
// Declared Variables

var location1 = 3;
var location2 = 4;
var location3 = 5;

var guess = 0;
var hits = 0;
var guesses = 0;


var isSunk = false;

// Game Logic


while (isSunk == false){
    guess = prompt("Ready!, Aim!, Fire! (Enter number 0-6) ")

    if (guess <0 || guess >6) {
        alert("botcog 0-6 gane  🫰 ")
        
    }else{

        guesses += 1;

        if(guess == location1 || guess == location2 || guess == location3){
            hits += 1;
            alert("HIT!")

            if(hits == 3){
                isSunk = true;
                alert("You Won Botchog! Congrats!")

            }
        }else{
            alert("MISS!")
        }


    }
}

var stats = "You Sank my Battleships at  " + guesses + guesses + "and your accuracy is " + (3/guesses);

alert(stats);
