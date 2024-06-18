const display = document.getElementById("display");

let = 100

let a = 250

var bestString = "";


var randomArray = [];

for (var j = 0; j < 50; j++) {

    randomArray.push(Math
        .random() * 100);
}


function appendToDisplay(input) {
    display.value += input;
}

function clearDisplay() {
    display.value = "";
}

function calculate() {
    try {
        // Para ma evaluat
        const result = eval(display.value);
        
        // para sa resulta 


        if (result === 10) {
            display.value = "MAMIMISS KITA :(";
        } else if (result === 25) {
            display.value = "LUH, TORPE KA NAMAN EH";
        } else if (result === 37) {
            display.value = "Atleast you tried. Not BAD";
        } else if (result === 20) {
            display.value = "BOBO SI EVONG"; 
        } else {
            display.value = result;
        }
    } catch (error) {
        display.value = "Error";
    }
}
