let playerChange = 0;

let combination = {
    array1:[0,1,2],
    array2:[3,4,5],
    array3:[6,7,8],
    array4:[0,3,6],
    array5:[1,4,7],
    array6:[2,5,8],
    array7:[0,4,8],
    array8:[2,4,6]
};

function startGame() {
    let cellContainer = document.querySelectorAll(".cell");

    for (let i = 0; i < cellContainer.length; i++) {
        cellContainer[i].setAttribute("id", i);
        cellContainer[i].textContent = "";
        cellContainer[i].addEventListener("click", listenToClick);
    }
}

function listenToClick() {
    let contents = document.createElement("p");
    contents.innerHTML = playerChange++ % 2 == 0 ? "X" : "O";

    this.appendChild(contents);
    this.removeEventListener("click", listenToClick);
    checkThisClick();
}

function checkThisClick() {
    let collect = document.querySelectorAll(".cell");
    let theseBoxes = [];
    let results = [];

    for (let array in combination) {
        for (let i = 0; i < combination[array].length; i++) {
            if (collect[combination[array][i]].textContent === "X") {
                results.push(true);
            }

            if (collect[combination[array][i]].textContent === "O") {
                results.push(false);
            }

            if (collect[combination[array][i]].textContent !== "") {
                theseBoxes.push(collect[combination[array][i]]);  
            }
        }

        if (results.length === 3) {
            let trueOrFalse = playerChange % 2 == 0 ? false : true;

            if (victoryCheck(results, trueOrFalse)) {
                endGame(theseBoxes, trueOrFalse);
            }
        }

        results = [];
        theseBoxes = [];
    }
}

function victoryCheck(arrayResults, boolean) {    
    for (let i = 0; i < arrayResults.length; i++) {
        if (arrayResults[i] !== boolean) {
            return false;
        }
    }

    return true;
}

function endGame(colorResults, boolean) {
    let theColor = boolean ? "blue" : "red";

    for (let i = 0; i < colorResults.length; i++) {
        colorResults[i].firstChild.style.color = theColor;
    }

    let cellContainer = document.querySelectorAll(".cell");

    for (let i = 0; i < cellContainer.length; i++) {
        cellContainer[i].removeEventListener("click", listenToClick);
    }
}

startGame();