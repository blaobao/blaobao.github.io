// UPDATE PER DAY \\:

var word = "81"; //room temp!!!
var date = "06/04/2026 @ 12:55AM";

/* --------------------------------------------------- \\
    I DO NOT KNOW JAVASCRIPT THIS IS MY FIRST PROJECT */

var numGuesses = 5;
var lengthOfWord = 2;

var curGuess = 0;
var curLetter = 0;

var gameOver = false;

// load stuff
window.onload = function(){
    initialize();
}

// writing this one to remember let = var but usable only in the {} it's in
// a span is used for the characters. it does not force creation of new line. like System.out.print()!!!!!
// 
function initialize(){
    for(let row = 0; row < numGuesses; row++){
        for(let col = 0; col < lengthOfWord; col++){

            //the lines below insert the following line(s) into index.html:
            /* <span id="0-0" class="tile"></span>
               <span id="0-1" class="tile"></span>
               ...
               <span id="4-1" class="tile"></span> */

            let tile = document.createElement("span");
            tile.id = row.toString() +"-" + col.toString();
            tile.classList.add("tile");
            tile.innerText = "";

            // this line actually inserts the line by finding the id of the div (group) and adding lines described above
            document.getElementById("board").appendChild(tile);
        }
    }

    let keyboard = [
        ["1", "2", "3", "4", "5", "⌫"],
        ["✔", "6", "7", "8", "9", "0"]
    ]

    for(let i = 0; i<keyboard.length; i++){
        let row = keyboard[i];
        let keyboardRow =  document.createElement("div");
        keyboardRow.classList.add("keyboard-row");

        for(j = 0; j<row.length; j++){
            let keyTile = document.createElement("div");
            let key = row[j];
            keyTile.innerText = key;

            if(key == "✔") keyTile.id = "Enter";
            else if(key == "⌫") keyTile.id = "Backspace";
            else if(key >= "0" && key <= "9") keyTile.id = "Digit" + key;

            keyTile.addEventListener("click", keyInput)
            keyTile.classList.add("key-tile");

            keyboardRow.appendChild(keyTile);
        }
        //adds row to keyboard
        document.body.appendChild(keyboardRow);

        document.getElementById("date").innerText = date;
    }

    //key press tracker using keyup. tracks when you lift up
    document.addEventListener("keyup", (e) => {
        input(e);
    })
}

function keyInput(){
    let e = {"code" : this.id}; //assigns key id to e
    input(e);
}

function input(e) {
    if(gameOver) return;
    
    if("Digit0" <= e.code && "Digit9" >= e.code){
        if(curLetter < lengthOfWord){
            //tile will go forwards by 1 visually
            let curTile = document.getElementById(curGuess.toString() + '-' + curLetter.toString());
            if(curTile.innerText == ""){
                curTile.innerText = e.code[5];
                curLetter += 1;
            }
        }
    }
    else if(e.code == "Backspace"){
        if(curLetter > 0 && curLetter <= lengthOfWord){
            curLetter -= 1;
        }

        //tile will go back by 1 visually
        let curTile = document.getElementById(curGuess.toString() + '-' + curLetter.toString());

        curTile.innerText = "";
    }
    else if(e.code == "Enter"){
        update();
        curGuess += 1;
        curLetter = 0;
    }
    if(!gameOver && curGuess == numGuesses){

        //give answer if die
        gameOver = true;
        document.getElementById("answer").innerText = "damn bro answer was " + word;
    }
}

function update(){
    let yourWord = "";
    let correct = 0;

    for(let i = 0; i < lengthOfWord; i++){
        let curTile = document.getElementById(curGuess.toString() + '-' + i.toString());
        let letter = curTile.innerText;

        if(word[i] == letter){
            curTile.classList.add("correct");
            correct += 1;
        }

        //other cases
        else if(word.includes(letter) && letter != "") curTile.classList.add("included");
        else if(letter == "") curTile.classList.add("empty");
        else curTile.classList.add("wrong");

        if(letter == "") yourWord = "";
        yourWord += letter;

        if(correct == lengthOfWord){
            gameOver = true;
            document.getElementById("answer").innerText = "you guessed it in " + (curGuess + 1) + "!!!";
            document.body.style.backgroundColor = "rgb(121, 148, 124)";
        }


    }
    if(parseInt(yourWord) < parseInt(word)){
        document.getElementById("answer").innerText = "too low!";
        document.body.style.backgroundColor = "rgb(106, 131, 149)";
    } 
    else if(parseInt(yourWord) > parseInt(word)){
        document.getElementById("answer").innerText = "too high!";
        document.body.style.backgroundColor = "rgb(150, 118, 118)";
    } 
    else if(yourWord == ""){
        document.getElementById("answer").innerText = "there can't be empty tiles!";
        document.body.style.backgroundColor = "rgb(61, 61, 61)";
    } 
}
