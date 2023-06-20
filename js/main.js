let squares = document.querySelectorAll(".square");
let play = document.getElementById("user");
let btnRestart = document.getElementById("btn");
let turn = "O";
let user = "X";
let count = 0;
let x = [];

play.innerHTML = user;

// looping on element
squares.forEach((square) => {
  square.addEventListener("click", () => {
    showRestartBtn();
    if (square.innerHTML != "") {
      square.innerHTML != turn;
    } else {
      addValue(square);
      checkAllValue();
    }
    play.innerHTML = user;
  });
});

// add value to square
function addValue(square) {
  turn == "X" ? (turn = "O") : (turn = "X");
  checkUserPlay(turn);
  checkValue(square, turn);
}
// Check out the role
function checkUserPlay(turn) {
  user = turn;
  user != "X" ? (user = "X") : (user = "O");
}

// check the value in square
function checkValue(square, turn) {
  if (square.innerHTML == "") {
    count++;
    if (count == 9) {
      setTimeout(() => {
        location.reload();
      }, 2000);
    }
    square.innerHTML = turn;
  }
}

// onload page
function onReload() {
  showAlert();
  setTimeout(() => {
    location.reload();
  }, 2000);
}

// alert massage
function showAlert() {
  setTimeout(() => {
    document.getElementById("alert").style.display = "flex";
    document.getElementById("winner").innerHTML = turn;
    setTimeout(() => {
      document.getElementById("alert").style.display = "none";
    }, 2000);
  }, 1000);
}

//change color square
function color(one, two, three) {
  squares[one].style.background = "#ffc000";
  squares[two].style.background = "#ffc000";
  squares[three].style.background = "#ffc000";
  disable();
}

// show btn restart
function showRestartBtn() {
  btnRestart.style.visibility = "visible";
}
btnRestart.onclick = () => {
  location.reload();
};

// make all btn disabled
function disable() {
  for (let i = 0; i < 9; i++) {
    squares[i].disabled = "disabled";
    console.log(squares[i]);
  }
}
// check all square
function checkAllValue() {
  for (let i = 1; i < 10; i++) {
    x[i] = document.getElementById("sq" + i).innerHTML;
  }

  // check of row
  if (x[1] == x[2] && x[2] == x[3] && x[1] != "") {
    color(0, 1, 2);
    onReload();
  }
  if (x[4] == x[5] && x[5] == x[6] && x[4] != "") {
    color(3, 4, 5);
    onReload();
  }
  if (x[7] == x[8] && x[8] == x[9] && x[7] != "") {
    color(6, 7, 8);
    onReload();
  }
  // check of colum
  if (x[1] == x[4] && x[4] == x[7] && x[1] != "") {
    color(0, 3, 6);
    onReload();
  }
  if (x[2] == x[5] && x[5] == x[8] && x[2] != "") {
    color(1, 4, 7);
    onReload();
  }
  if (x[3] == x[6] && x[6] == x[9] && x[3] != "") {
    color(2, 5, 8);
    onReload();
  }
  // check of axis x
  if (x[1] == x[5] && x[5] == x[9] && x[1] != "") {
    color(0, 4, 8);
    onReload();
  }
  if (x[3] == x[5] && x[5] == x[7] && x[5] != "") {
    color(2, 4, 6);
    onReload();
  }
}
