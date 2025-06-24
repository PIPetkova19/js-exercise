
function roll() {
    const numberTextBox = document.getElementById("numberTextBox").value;
    const result = document.getElementById("result");
    const image = document.getElementById("image");
    const values = [];
    const images = [];
    for (let i = 0; i < numberTextBox; i++) {
        const value = Math.floor(Math.random() * 6) + 1
        values.push(value);
        images.push(`<img src="images/${value}.png" alt="Dice image">`);
    }
    result.textContent = `dice: ${values.join(', ')}`;
    image.innerHTML = images.join('');
}