const container = document.getElementById("letterContainer");

for (let i = 65; i <= 90; i++) { // ASCII codes for A-Z
  const letter = String.fromCharCode(i); // Convert ASCII to character

  const button = document.createElement("button");
  button.className = "letter";
  button.textContent = letter;
  button.style.border = "0px solid";
  button.style.width = "5px";
  button.style.height = "5px";
  button.style.marginTop = "10px";
  button.style.marginBottom = "20px";
  button.style.marginLeft = "10px";
  button.style.marginRight = "auto";


  // Add onclick and ondblclick handlers
  button.setAttribute("onclick", `filterShowsByLetter('${letter.toLowerCase()}')`);
  button.setAttribute("ondblclick", "location.href='codes/HTML code/A-Zmovies/a-zmovies.html'");

  container.appendChild(button);
}