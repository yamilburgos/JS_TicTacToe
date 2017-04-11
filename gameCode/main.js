let playerChange = 0;

function startGame() {
    let cellContainer = document.querySelectorAll(".cell");

    for (let i = 0; i < cellContainer.length; i++) {
        cellContainer[i].setAttribute("id", i);
        cellContainer[i].addEventListener("click", listenToClick);
    }
}

function listenToClick() {
    let contents = document.createElement('p'); 
    contents.innerHTML = playerChange++ % 2 == 0 ? "X" : "O";
    this.appendChild(contents);
    
    this.removeEventListener('click', listenToClick);
    checkForWin();
}

function checkForWin() {
    console.log(this);
}

startGame();