// 1. Create an HTML page that contains a text area and a button labeled Create.
// 2. When the user enters in text into the text area and then clicks the create button, create a new card element in the DOM. You decide the height/width of the card.
// 3. Above the text on each card, there must be two input controls of type color.
// 4. Above the text on each card, there must be a button element labeled Delete.
// 5. When the user selects a color from the first input, then the background color of that card, and no other cards, should change to the color chosen.
// 6. When the user selects a color from the second input, then the font color of that card, and no other cards, should change to the color chosen.
// 7. When the user clicks the Delete button, the containing card, and no other cards, should then be removed from the DOM. Not just made invisible, actually removed from the DOM.

let card = document.querySelector('.card');
let createCard = document.querySelector('#create');

createCard.addEventListener("click", function(){
    
    
    
    let divCardCss = document.createElement('div');
    let divClass = document.createAttribute('class');
    divClass.value = "card-css";
    divCardCss.setAttributeNode(divClass);
    card.appendChild(divCardCss);
    console.log(divCardCss);

    function colorPickerBackground() {
        let background = document.getElementsByClassName('background');
        event.target.parentElement.style.backgroundColor = event.target.value;
    }
    
    let inputBackground = document.createElement('input'); // create input element
    let type = document.createAttribute('type'); //create type attribute
    type.value = "color"; //assign value of color to type
    inputBackground.setAttributeNode(type); //set type to input element
    divCardCss.appendChild(inputBackground); //append to div class
    inputBackground.addEventListener('change', colorPickerBackground);
    
    function colorPickerFont() {
        event.target.parentElement.style.color = event.target.value;
    }
    let inputFont = document.createElement('input');
    let type2 = document.createAttribute('type');
    type2.value = "color"; 
    inputFont.setAttributeNode(type2)
    divCardCss.appendChild(inputFont);
    inputFont.addEventListener('change', colorPickerFont);

    
    function deleteDelete() {
        this.parentNode.remove()
    }
    let button = document.createElement('button');
    let btnContent = document.createTextNode('Delete');
    button.appendChild(btnContent);
    divCardCss.appendChild(button);
    button.addEventListener("click", deleteDelete)
    
    let input = document.querySelector('#input').value;
    
    let inputCard = document.createElement('p');
    let cardInput = document.createAttribute('class');
    cardInput.value = "inputText";
    inputCard.setAttributeNode(cardInput);
    let cardContent = document.createTextNode(`${input}`);
    inputCard.appendChild(cardContent);
    divCardCss.appendChild(inputCard);



})   






