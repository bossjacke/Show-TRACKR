// A to Z button
const shows = [
    "Anbe Vaa",
    "Baakiyalakshmi",
    "Chithi",
    "Cooku with Comali",
    "Deivam Thandha Veedu",
    "Bigg Boss",
    "Aaha Kalyanam",
    "Bharathi Kannamma"
  ];
  
  function filterShowsByLetter1(letter) {
     shows.filter(show => show.startsWith(letter));
    const list = document.getElementById("show-list");
  list.innerHTML = filtered.map(show => `<li>${show}</li>`).join("");
  return
  }