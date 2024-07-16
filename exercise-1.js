console.log("1. What is the name of the recipe?");
let recipeElement = document.getElementById("recipe-name");
let recipeName = recipeElement.innerText;
console.log(recipeName);


console.log("2. What HTML tag is used to display the Recipe name?");
let tagName = recipeElement.tagName.toLowerCase();
console.log(tagName);

console.log('3. What is the font size of the paragraph tag with the class "description".');
let descriptionElement = document.getElementsByClassName("description")[0];
let descriptionFontSize = window.getComputedStyle(descriptionElement).fontSize;
console.log(descriptionFontSize);

console.log("4. What is the value of the alt atrribute on the image?");
let imgElement = document.getElementsByClassName("image-container").item(0).firstElementChild;
let valueOfAltAttribute = imgElement.alt;
console.log(valueOfAltAttribute);

console.log("5. What is the dimensions and the url of the image?");
let imgDimensions = {
    url: imgElement.src,
    height: imgElement.height,
    width: imgElement.width
}
console.log(imgDimensions);

console.log("6. How many ingredients has the paste?");
let ingredientsListElement = document.getElementsByClassName("ingredients-list-paste").item(0);
let ingredientListLength = ingredientsListElement.children.length;
console.log(ingredientListLength);

console.log("7. Which is the forth element in the list containing the ingredients for the paste?");
let fourthIngredient = ingredientsListElement.children[3];
console.log(fourthIngredient);

console.log("8. Create an an array of objects from the instructions.");
let arrayOfIntstructionObjects = [];
let instructionList = document.getElementsByClassName("instructions-list").item(0);
let instructionListItems = Array.from(instructionList.children);
instructionListItems.forEach((element, index) => {
    arrayOfIntstructionObjects.push({
        order: index+1,
        text: element.innerText
    })
});
console.log(arrayOfIntstructionObjects);
