const snakeChar = document.getElementById("snake-body");
let xPos = 0;
let yPos = 0;
let direction = "ArrowRight";
let snakeSpeed = 1000;
getDir()

setInterval(() => {
    const step = 48;
    const maxX = window.innerWidth;
    const maxY = window.innerHeight;

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

