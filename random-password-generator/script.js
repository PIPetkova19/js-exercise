function passwordGenerator() {
    const optionsNumbers = document.getElementById("numbersTextBox").value === "true";
    const optionsLowercase = document.getElementById("lowercaseTextBox").value === "true";
    const optionsUppercase = document.getElementById("uppercaseTextBox").value === "true";
    const optionsSymbols = document.getElementById("symbolsTextBox").value === "true"; 
    const result = document.getElementById("result");
    const length = parseInt(document.getElementById("lengthTextBox").value);

    const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
    const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numbersChars = "0123456789";
    const symbolsChars = "!@#$%^&*()_+";

    let password = "";
    let allChars = "";
    if (optionsLowercase) allChars += lowercaseChars;
    if (optionsUppercase) allChars += uppercaseChars;
    if (optionsNumbers) allChars += numbersChars;
    if (optionsSymbols) allChars += symbolsChars; 

    if (allChars === "") {
        result.innerText = "Please select at least one option!";
        return;
    }

    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * allChars.length);
        password += allChars[randomIndex];
    }

    result.innerText = password;
}
