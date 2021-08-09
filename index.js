document
  .querySelectorAll("img")[0]
  .setAttribute(
    "src",
    "images/" + "dice" + Math.floor(Math.random() * 6 + 1) + ".png"
  );

document
  .querySelectorAll("img")[1]
  .setAttribute(
    "src",
    "images/" + "dice" + Math.floor(Math.random() * 6 + 1) + ".png"
  );

if (
  document.querySelectorAll("img")[0].getAttribute("src") ===
  document.querySelectorAll("img")[1].getAttribute("src")
) {
  document.querySelector("h1").innerHTML = "Match is drawn";
} else if (
  document.querySelectorAll("img")[0].getAttribute("src") >=
  document.querySelectorAll("img")[1].getAttribute("src")
) {
  document.querySelector("h1").innerHTML = "🥉Player 1 wins!";
} else {
  document.querySelector("h1").innerHTML = "🥉player 2 wins!";
}
