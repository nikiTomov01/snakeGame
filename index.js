const snakeChar = document.getElementById("snake-body");
const gameArea = document.getElementById("game-grid");
const score = document.getElementById("score");

let xPos = 0;
let yPos = 0;
let direction = "ArrowRight";
let snakeSpeed = 500;
let currApples = 0;
let currScore = 0;

const maxX = window.innerWidth;
const maxY = window.innerHeight;
const step = 48;

getDir()

setInterval(() => {
        if (xPos <= 0) {
        xPos = 0;
    }
    else if (xPos >= maxX - step) {
        xPos = maxX - step;
    }
    if (yPos <= 0) {
        yPos = 0;
    }
    else if (yPos >= maxY - step) {
        yPos = maxY - step;
    }


    if (direction == "ArrowLeft") {
        xPos -= 48;
        yPos = yPos;
    }
    else if (direction == "ArrowRight") {
        xPos += 48;
        yPos = yPos;
    }
    else if (direction == "ArrowUp") {
        xPos = xPos;
        yPos -= 48;
    }
    else if (direction == "ArrowDown") {
        xPos = xPos;
        yPos += 48;
    }

    if (xPos <= 0) {
        xPos = 0;
    }
    else if (xPos >= maxX - step) {
        xPos = maxX - step;
    }
    if (yPos <= 0) {
        yPos = 0;
    }
    else if (yPos >= maxY - step) {
        yPos = maxY - step;
    }

    snakeChar.style.left = `${xPos}px`;
    snakeChar.style.top = `${yPos}px`;

    populateApples();
}, snakeSpeed)

function getDir() {
    document.onkeydown = (e) => {
        console.log(e.key);
        if (direction == "ArrowRight" && e.key == "ArrowLeft") {
            direction == "ArrowRight";
        }
        else if (direction == "ArrowLeft" && e.key == "ArrowRight") {
            direction == "ArrowLeft";
        }
        else if (direction == "ArrowUp" && e.key == "ArrowDown") {
            direction == "ArrowUp";
        }
        else if (direction == "ArrowDown" && e.key == "ArrowUp") {
            direction == "ArrowDown";
        }
        else {
            direction = e.key;
        }
        console.log(direction);
    } 
}

function populateApples() {
    let apple = document.getElementById("apple");
    if (currApples == 0) {
        makeApple();
        currApples++;
    }
    
    if ((snakeChar.style.left === apple.style.left) && (snakeChar.style.top === apple.style.top)) {
        console.log("Hello World");
        apple.remove();
        currApples--;
        setScore();
    }
    // console.log(`Char x: ${snakeChar.style.left} y: ${snakeChar.style.top}`)
    // console.log(`Apple x: ${apple.style.left} y: ${apple.style.top}`)
}

function setScore() {
    currScore++;
    score.innerHTML = `Score: ${currScore}`;
}

function makeApple() {
    let newApple = document.createElement("div");
    newApple.id = "apple";
    let randX = getRandomMultipleOf48(48, maxX);
    let randY = getRandomMultipleOf48(48, maxY);
    newApple.style.left = `${randX}px`;
    newApple.style.top = `${randY}px`;
    gameArea.appendChild(newApple);
}

function getRandomMultipleOf48(min, max) {
    min = Math.ceil(min / 48) * 48; // Round up to the nearest multiple of 48
    max = Math.floor(max / 48) * 48; // Round down to the nearest multiple of 48;

    if (min > max) {
        throw new Error("No mulitple of 48 in the given range.");
    }

    let rand = Math.floor(Math.random() * (max - min) / 48 + 1);

    return min + rand * 48;
}