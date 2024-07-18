//1. The logo text of the site has the wrong color. Change it to the correct one.

let headerLogoElement = document.querySelector(".logo-text");
headerLogoElement.style.color = "#384241";

//2. The alignment of the elements inside the header element are wrong. 
//Change it to the correct one. Hint, check the flex properties for the correct alignment. 
//Here is a link that might help: https://css-tricks.com/snippets/css/a-guide-to-flexbox/
let headerElement = document.querySelector("header");
headerElement.style.justifyContent = "flex-start";

//3. The header has a border at the bottom, but it has the wrong color. Change it do the correct one.
headerElement.style.borderColor = "lightgray";

//4. The recipe name is wrong, change it to the correct one.
let recipeNameElement = document.querySelector("#recipe-name");
recipeNameElement.textContent = "Frozen Cheesecake";

//5. The clock icon beneath the recipe name has disappeared and been replaced by a text instead. 
//This can be fixed by adding a class to that element.
let clockIconElement = document.querySelector("div.time-container > span");
clockIconElement.classList.add("material-icons");

//6.The estimated time of the recipe is also incorrect.
//Change it to the correct time estimation.
let estimatedTimeElement = document.querySelector("div.time-container > span.time");
estimatedTimeElement.textContent = "60+ min";

//7. The src path to the image is wrong, or atleast it's showing the wrong image.
//Change it to the correct one. The available images can be found in the assets folder.
let introductionImageElement = document.querySelector("main > section > article.image-container > img");
introductionImageElement.src = "assets/frozen-cheesecake-slice.jpg";

//8. The background color of the ingredients list container is wrong. 
//Fix it.
let ingredientsContainerElement = document.querySelector("section.how-to-do > article.ingredients-container");
ingredientsContainerElement.style.backgroundColor = "#f9f9f9";

//9. The ingredients are divided in to two parts, one for the bottom and one for the paste.
//In the list of the ingredients to the bottom, there is a text instead of two list items.
//Remove the text and add those two list items.
let ingredientsListBottomElement = document.querySelector(".ingredients-list-bottom");
let firstListElement = document.createElement("li");
firstListElement.innerText = "15st digestivetex";
let secondListElement = document.createElement("li");
secondListElement.innerText = "Lite smör";
ingredientsListBottomElement.replaceChildren(firstListElement, secondListElement);

//10. The third ingredient in the list of ingredients to the paste is wrong.
//Change that specific ingredient to the correct one.
let wrongIngredientsListPasteElement = document.querySelector(".ingredients-list-paste > :nth-of-type(3)");
wrongIngredientsListPasteElement.textContent = "3tsk vaniljsocker";

//11. There is also a missing ingredient in the list of ingredients to the paste.
//Look and see what it is and add that one the the end of the list.
let ingredientsListElement = document.querySelector(".ingredients-list-paste");
let newPasteIngredient = document.createElement("li");
newPasteIngredient.innerText = "400g naturell philadelphiaost";
ingredientsListElement.appendChild(newPasteIngredient);

//12. The text "Instructions" to the left, beneath the image, has some shadow styling applied to it.
//Remove that styling.
let instructionsContainerH3Element = document.querySelector(".instructions-container > h3");
instructionsContainerH3Element.classList.remove("shadow");

//13. Two list elements of the list of instructions are incorrect.
//Find them and change them to the correct ones.
let instructionListElement = document.querySelector(".instructions-list");
//Replace text of second list element
instructionListElement.children[1].textContent = "Separera ägggulor och äggvitor. Äggvitorna lägger du i en stor bunke, äggulorna i en liten bunke.";
instructionListElement.children[instructionListElement.children.length-2].textContent = "Ställ in i frysen över natten.";
