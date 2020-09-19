const elementSelected = document.querySelector(".category-selected");
let descriptiveParagraph = document.getElementById("paragraph-description");

var descriptionWorks = ["test1", "test2"];

function changeParagraph() {
  descriptiveParagraph.innerHTML = "test";
}

elementSelected.onclick = changeParagraph;
//changer les nom de class (category selected) pour afficher la bonne description (descriptionWorks)
