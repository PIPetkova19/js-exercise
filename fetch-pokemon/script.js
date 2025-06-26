fetchData();
async function fetchData() {
    try {
        const pokemonName = document.getElementById("pokemonValue").value.toLowerCase();
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
        if (!response.ok) {
            throw new Error("No pokemon like that");
        }

        const data = await response.json();
        const pictureDisplay = data.sprites.front_default;

        const picture = document.getElementById("picture");
        picture.src = pictureDisplay;
        picture.style.display = "block";

    } catch (error) {
        console.log(error);
    }
}