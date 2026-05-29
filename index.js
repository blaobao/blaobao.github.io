var word = "72";

/* --------------------------------------------------- \\
    I DO NOT KNOW JAVASCRIPT THIS IS MY FIRST PROJECT this may be from youtube fr */

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
// a span is used for the characters. it does not force creation of new line

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

    //key press tracker using keyup. tracks when you lift up
    document.addEventListener("keyup", (e) => {
        if(gameOver) return;
        if("Digit0" <= e.code && "Digit9" >= e.code){
            if(curLetter < lengthOfWord){
                //visually appending letter and moving to next
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

            //visually removing letter and going back to previous box
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
            document.getElementById("answer").innerText = word;
        }
    })
}

function update(){
    let correct = 0;
    for(let i = 0; i < lengthOfWord; i++){
        let curTile = document.getElementById(curGuess.toString() + '-' + i.toString());
        let letter = curTile.innerText;

        if(word[i] == letter){
            curTile.classList.add("correct");
            correct += 1;
        }

        //other cases
        else if(word.includes(letter)) curTile.classList.add("included");
        else curTile.classList.add("wrong");

        if(correct == lengthOfWord){
            gameOver = true;
            document.getElementById("answer").innerText = "you guessed it in " + (curGuess + 1) + "!!!";
        }


    }
}
