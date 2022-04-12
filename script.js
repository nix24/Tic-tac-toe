$(document).ready(function () {
    //setting up variables
    //index will store cell ids as array
    let index = ["cell-1", "cell-2", "cell-3", "cell-4", "cell-5", "cell-6", "cell-7", "cell-8", "cell-9"];
    let player = "X";
    let computer = "O";
    let gameStatus = false;

    //when user clicks start button, annouce the game and start the game
    $("#start-button").click(function () {
        $("#start-button").prop("disabled", true);
        $("#reset-button").prop("disabled", false);

        $(".annoucement").text("Game Start! Let's get this show on the road!");
        gameStatus = true;
        /**when the game starts, the board will be empty and the user will be able to click on the board
        *when the user clicks on a cell, the cell will be filled with either X or O, after that, the computer will make a move
        *after the game, the user will be able to click on the reset button to start a new game
        */
        $(".cell").click(function () {
            if (gameStatus) {
                if ($(this).text() === "") {
                    $(this).text(player);
                    checkWin();
                    computerMove();
                    checkWin();
                }
            }
        });
    });
    //create functions
    function computerMove() {
        //create a random number between 0 and 8
        let randomIndex = Math.floor(Math.random() * index.length);
        //cpu will fill a random cell. If the cell is taken, it will keep generating a random number until it finds an empty cell
        let randomCell = $("#" + index[randomIndex]);
        if (randomCell.text() === "") {
            randomCell.text(computer);
            checkWin();
        } else {
            computerMove();
        }
    }
    function checkWin() {
        //check if there is a win
        //check if there is a tie
        let tie = true;
        for (let i = 0; i < index.length; i++) {
            if ($("#" + index[i]).text() === "") {
                tie = false;
            }
        }
        if (tie) {
            $(".annoucement").text("Tie!");
            gameStatus = false;
        }
        //check if there is a win for player
        if ($("#cell-1").text() === player && $("#cell-2").text() === player && $("#cell-3").text() === player ||
            $("#cell-4").text() === player && $("#cell-5").text() === player && $("#cell-6").text() === player ||
            $("#cell-7").text() === player && $("#cell-8").text() === player && $("#cell-9").text() === player ||
            $("#cell-1").text() === player && $("#cell-4").text() === player && $("#cell-7").text() === player ||
            $("#cell-2").text() === player && $("#cell-5").text() === player && $("#cell-8").text() === player ||
            $("#cell-3").text() === player && $("#cell-6").text() === player && $("#cell-9").text() === player ||
            $("#cell-1").text() === player && $("#cell-5").text() === player && $("#cell-9").text() === player ||
            $("#cell-3").text() === player && $("#cell-5").text() === player && $("#cell-7").text() === player) {
            $(".annoucement").text("You Win! You're not half bad after all!");
            gameStatus = false;
        }
        //check if there is a win for computer
        if ($("#cell-1").text() === computer && $("#cell-2").text() === computer && $("#cell-3").text() === computer ||
            $("#cell-4").text() === computer && $("#cell-5").text() === computer && $("#cell-6").text() === computer ||
            $("#cell-7").text() === computer && $("#cell-8").text() === computer && $("#cell-9").text() === computer ||
            $("#cell-1").text() === computer && $("#cell-4").text() === computer && $("#cell-7").text() === computer ||
            $("#cell-2").text() === computer && $("#cell-5").text() === computer && $("#cell-8").text() === computer ||
            $("#cell-3").text() === computer && $("#cell-6").text() === computer && $("#cell-9").text() === computer ||
            $("#cell-1").text() === computer && $("#cell-5").text() === computer && $("#cell-9").text() === computer ||
            $("#cell-3").text() === computer && $("#cell-5").text() === computer && $("#cell-7").text() === computer) {
            $(".annoucement").text("You Lose! Sucks to suck huh?");
            gameStatus = false;
        }
    }
    //when user clicks on reset button, annouce the game and start the game
    $("#reset-button").click(function () {
        $("#reset-button").prop("disabled", true);
        $("#start-button").prop("disabled", false);
        
        $(".annoucement").text("Game Reset! Hit the button so we can go again!");        
        gameStatus = false;
        for (let i = 0; i < index.length; i++) {
            $("#" + index[i]).text("");
        }
    });
}); 
