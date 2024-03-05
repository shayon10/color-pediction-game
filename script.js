// Function to generate a random RGB color
function getRandomColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}

// Function to set up a new round of the game
function newRound() {
    const rgbColor = getRandomColor();
    document.getElementById('rgbValue').textContent = rgbColor;
    const correctButtonIndex = Math.floor(Math.random() * 3);
    const buttons = document.getElementsByClassName('colorButton');

    for (let i = 0; i < buttons.length; i++) {
        if (i === correctButtonIndex) {
            buttons[i].style.backgroundColor = rgbColor;
        } else {
            buttons[i].style.backgroundColor = getRandomColor();
        }
    }
}

// Function to check if the clicked button has the correct color
function checkColor(button) {
    const rgbValue = document.getElementById('rgbValue').textContent;
    const selectedColor = button.style.backgroundColor;
    const resultDiv = document.getElementById('result');

    if (selectedColor === rgbValue) {
        resultDiv.textContent = 'Correct!';
    } else {
        resultDiv.textContent = 'Incorrect. Try again.';
    }

    // Start a new round after a brief delay
    setTimeout(() => {
        resultDiv.textContent = '';
        newRound();
    }, 1000);
}

// Start the initial round
newRound();
