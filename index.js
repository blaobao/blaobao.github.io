body{
    font-family: Arial;
    font-size: 1.5em;
    text-align: center;
    background-color: rgb(164, 157, 121);
}

hr{
    width: 550px;
    border: 4px solid rgb(255, 255, 255);
}
#title{
    font-size: 36px;
    letter-spacing: 2px;
    color: rgb(255, 255, 255);
}
#answer{
    font-size: 36px;
    letter-spacing: 2px;
    color: rgb(255, 255, 255);
}
#date{
    font-size: 15px;
    letter-spacing: 2px;
    color: rgb(255, 255, 255);
}
#board{
    width: 160px;
    height: 350px;
    /* this margin stuff centers box. margins are used to create separations*/
    margin: 0 auto;
    /* flex stuff keeps text inside the box no matter what screen size*/
    display: flex;
    flex-wrap: wrap;
}

/*these . things are basically classes. you can use these in js code*/

.tile{
    /* box */
    border: 4px solid rgb(255, 255, 255);
    width: 60px;
    height: 60px;
    margin: 2.5px;
    border-radius: 4px;

    /* text */
    color: rgb(255, 255, 255);
    font-size: 36px;
    font-weight: bold;
    display: flex;

    /*center stuff*/
    justify-content: center;
    align-items: center;
}

.correct{
    background-color: rgb(90, 139, 90);
    color: white;
    border-color: white;
}

.included{
    background-color: rgb(186, 157, 59);
    color: white;
    border-color: white;
}

.wrong{
    background-color: rgb(120, 62, 62);
    color: white;
    border-color: white;
}

.empty{
    background-color: rgb(0, 0, 0);
    color: white;
    border-color: white;
}

.keyboard-row{
    width: 400px;
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
}

.key-tile{
    /* box */
    border: 4px solid rgb(241, 226, 177);
    width: 38px;
    height: 40px;
    margin: 2px;
    background-color: rgb(177, 167, 133);
    border-radius: 4px;
    cursor: grab;
    

    /* text */
    font-size: 25px;
    font-weight: bold;
    display: flex;
    justify-content: center;
    align-items: center;
    color: rgb(255, 255, 255);
}
