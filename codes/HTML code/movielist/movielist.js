// 1. Movie class definition
class MovieCard {
    constructor(id, title, rating, time, imgSrc) {
      this.id = id;
      this.title = title;
      this.rating = rating;
      this.time = time;
      this.imgSrc = imgSrc;
    }
  
    // 2. Method to generate HTML element
    createCard() {
      const card = document.createElement("div");
      card.className = "moviedeta1";
      card.id = this.id;
  
      card.innerHTML = `
        <img src="${this.imgSrc}" alt="${this.title}" class="card-image">
        <div class="moviedeta2">
          <div class="moviedeta3">
            <h1>${this.title}</h1>
            <h1 style="margin-left: auto;">❤️<samp style="font-size: 20px;"> ${this.rating} </samp></h1>
          </div>
          <h2>${this.time}</h2>
        </div>
      `;
  
      return card;
    }
  }
  
  // 3. Movie data array
  const movieList = [
    new MovieCard("info1", "Captain America: Brave New World", 9.05, "Sunday 9:00 PM on HBO", "../../../img/movies img/sub-buzz-3963-1737142576-6.webp"),
    new MovieCard("info2", "Avengers: Secret Wars", 8.9, "Friday 8:30 PM on Disney+", "../../../img/movies img/avengers-secret-wars.webp"),
    new MovieCard("info3", "Iron Man: Legacy", 8.7, "Saturday 10:00 PM on Netflix", "../../../img/movies img/ironman-legacy.webp"),
    new MovieCard("info4", "Black Panther: Wakanda Forever", 9.2, "Wednesday 7:00 PM on Prime Video", "../../../img/movies img/wakanda-forever.webp"),
    new MovieCard("info5", "Doctor Strange: Multiverse Mayhem", 8.8, "Monday 9:30 PM on Hulu", "../../../img/movies img/doctor-strange-multiverse.webp")
  ];
  
  // 4. Render to DOM
  const container = document.getElementById("movie-container");
  movieList.forEach(movie => {
    container.appendChild(movie.createCard());
  });
  