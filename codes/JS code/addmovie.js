function addMovie() {
    const movie = document.getElementById("movieList");
    const movieText = movie.value.trim();
    const added = document.getElementById("added")


    if (movieText === "") {
        alert("Please enter the movie")
    } else {
        alert(` you've successfully added a new ${movieText}  `);
        added.innerText = "you've successfully added a new ";
    }
    added.innerText = " you've successfully added a new ";
    // const div = document.createElement("div").getPrioryClass("card-container");
    // const img = document.createElement("img").getPrioryClass("");
    localStorage.setItem("userProfile", JSON.stringify(movieText));
}

function showMovie() {
    localStorage.setItem("movieText", JSON.stringify(movieText));
    const showMovie = JSON.parse(storedProfile);
    showMovie.innerText = `you've successfully added a new  `
}






