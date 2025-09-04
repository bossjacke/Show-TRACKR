let mv =[];

function addMovie() {
    const movie = document.getElementById("movieList");
    const movieText = movie.value.trim();
    const added = document.getElementById("added")

const Number = [1,2,3,4,5,6,7,8,9,0];
    if (movieText === "" || /^[0-9]+$/.test(movieText) ) {
        alert("Please enter the movie")
    } else {
        alert(` you've successfully added a new ${movieText}  `);
        added.innerText = "you've successfully added a new ";
        mv.push(movieText)
    }
    added.innerText = " you've successfully added a new ";
    
    
}

function showMovie() {
    // let mv = [""];
    const movie = document.getElementById("movieList");
    const movieText = movie.value.trim();
      mv.push(m=movieText)
    const showmovie = document.getElementById("showmovie")
    
    if (mv.length === 0) {
        added.innerText = "No movies yet.";
      } else {
        mv.forEach((movie, index) => {
            const p = document.createElement("p");
            p.innerText = `${index + 1}. ${movie}`;
            showmovie.appendChild(p);
          });      }
}






