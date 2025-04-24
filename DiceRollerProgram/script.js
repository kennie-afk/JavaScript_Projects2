function rollDice() {
    const numDice = document.getElementById('numDice').value;
    const diceResultDiv = document.querySelector('.diceResult');
    const diceImagesDiv = document.querySelector('.diceImages');

    diceResultDiv.innerHTML = '';
    diceImagesDiv.innerHTML = '';

    let results = [];
    for (let i = 0; i < numDice; i++) {
        let roll = Math.floor(Math.random() * 6) + 1;
        results.push(roll);

        let img = document.createElement('img');
        img.src = `https://upload.wikimedia.org/wikipedia/commons/thumb/${getDiceImage(roll)}`;
        img.alt = `Dice ${roll}`;
        diceImagesDiv.appendChild(img);
    }

    diceResultDiv.textContent = `You rolled: ${results.join(', ')}`;
}

function getDiceImage(number) {
    const diceImages = {
        1: "2/2c/Alea_1.png/120px-Alea_1.png",
        2: "b/b8/Alea_2.png/120px-Alea_2.png",
        3: "2/2f/Alea_3.png/120px-Alea_3.png",
        4: "8/8d/Alea_4.png/120px-Alea_4.png",
        5: "5/55/Alea_5.png/120px-Alea_5.png",
        6: "f/f4/Alea_6.png/120px-Alea_6.png"
    };
    return diceImages[number];
}
