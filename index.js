let started = false;
let player = 0;
let mark = "X";
let board = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
let clickedbtn;

$(document).keyup(function (event) {
  if (started === false) {
    $(".container").removeClass("hide");
    $(".img").addClass("hide");
    $(".align").addClass("hide");
    $(".start-p").addClass("hide");
    started = true;
  }
  else{
    startOver();
  }
});

$(".btn").click(function () {
  clickedbtn = Number($(this).attr("id"));
  $("#" + clickedbtn).addClass("animate");
  setTimeout(function () {
    $("#" + clickedbtn).removeClass("animate");
  }, 100);

  player++;
  mark = player % 2 === 1 ? "X" : "O";

  if (markBoard(mark)) {
    if (checkWin()) {
      $("#" + clickedbtn).text(mark);
    }
    else{
        $(".container").addClass("opacity");
        $(".start-p").removeClass("hide");
        $(".start-p").html(`Player ${mark} wins!<br>Press any key to restart`);
        $(".start-p").addClass("win-font");
 

    }
  }
});

//return true if marking is done
// return false if not
function markBoard(mark) {
  if (clickedbtn == 1 && board[1] == "1") {
    board[1] = mark;
    return true;
  } else if (clickedbtn == 2 && board[2] == "2") {
    board[2] = mark;
    return true;
  } else if (clickedbtn == 3 && board[3] == "3") {
    board[3] = mark;
    return true;
  } else if (clickedbtn == 4 && board[4] == "4") {
    board[4] = mark;
    return true;
  } else if (clickedbtn == 5 && board[5] == "5") {
    board[5] = mark;
    return true;
  } else if (clickedbtn == 6 && board[6] == "6") {
    board[6] = mark;
    return true;
  } else if (clickedbtn == 7 && board[7] == "7") {
    board[7] = mark;
    return true;
  } else if (clickedbtn == 8 && board[8] == "8") {
    board[8] = mark;
    return true;
  } else if (clickedbtn == 9 && board[9] == "9") {
    board[9] = mark;
    return true;
  } else {
    player--;
    return false;
  }
}


// return flase if someone wins
// return true if game is on
// starover is draw
function checkWin() {
  if (board[1] == board[2] && board[2] == board[3]) {
    $("#1").addClass("win");
    $("#2").addClass("win");
    $("#3").addClass("win");

    $("#1").text(mark);
    $("#2").text(mark);
    $("#3").text(mark);
    return false;
  } else if (board[4] == board[5] && board[5] == board[6]) {
    $("#4").addClass("win");
    $("#5").addClass("win");
    $("#6").addClass("win");

    $("#4").text(mark);
    $("#5").text(mark);
    $("#6").text(mark);
    return false;
  } else if (board[7] == board[8] && board[8] == board[9]) {
    $("#7").addClass("win");
    $("#8").addClass("win");
    $("#9").addClass("win");

    $("#7").text(mark);
    $("#8").text(mark);
    $("#9").text(mark);
    return false;
  } else if (board[1] == board[4] && board[4] == board[7]) {
    $("#1").addClass("win");
    $("#4").addClass("win");
    $("#7").addClass("win");

    $("#1").text(mark);
    $("#4").text(mark);
    $("#7").text(mark);
    return false;
  } else if (board[2] == board[5] && board[5] == board[8]) {
    $("#2").addClass("win");
    $("#5").addClass("win");
    $("#8").addClass("win");

    $("#2").text(mark);
    $("#5").text(mark);
    $("#8").text(mark);
    return false;
  } else if (board[3] == board[6] && board[6] == board[9]) {
    $("#3").addClass("win");
    $("#6").addClass("win");
    $("#9").addClass("win");


    $("#3").text(mark);
    $("#6").text(mark);
    $("#9").text(mark);
    return false;
  } else if (board[1] == board[5] && board[5] == board[9]) {
    $("#1").addClass("win");
    $("#5").addClass("win");
    $("#9").addClass("win");

    $("#1").text(mark);
    $("#5").text(mark);
    $("#9").text(mark);
    return false;
  } else if (board[3] == board[5] && board[5] == board[7]) {
    $("#3").addClass("win");
    $("#5").addClass("win");
    $("#7").addClass("win");

    $("#3").text(mark);
    $("#5").text(mark);
    $("#7").text(mark);
    return false;
  } else if (
    board[1] != "1" &&
    board[2] != "2" &&
    board[3] != "3" &&
    board[4] != "4" &&
    board[5] != "5" &&
    board[6] != "6" &&
    board[7] != "7" &&
    board[8] != "8" &&
    board[9] != "9"
  ) {
    startOver();
    return false;
  } else {
    return true;
  }
}

function startOver(){
    $(".start-p").removeClass("win-font");
    $(".btn").text("");
    $(".btn").removeClass("win");
    $(".start-p").addClass("hide");
    $(".container").removeClass("opacity");
    player = 0;
    mark = "X";
    board = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
    clickedbtn = 0;
}





