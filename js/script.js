function showMenu(type) {
  document.getElementById("food").classList.add("hidden");
  document.getElementById("drinks").classList.add("hidden");
  document.getElementById(type).classList.remove("hidden");
}
