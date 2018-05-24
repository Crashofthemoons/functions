// 1. Create an HTML page that contains a text area and a button labeled Create.
// 2. When the user enters in text into the text area and then clicks the create button, create a new card element in the DOM. You decide the height/width of the card.
// 3. Above the text on each card, there must be two input controls of type color.
// 4. Above the text on each card, there must be a button element labeled Delete.
// 5. When the user selects a color from the first input, then the background color of that card, and no other cards, should change to the color chosen.
// 6. When the user selects a color from the second input, then the font color of that card, and no other cards, should change to the color chosen.
// 7. When the user clicks the Delete button, the containing card, and no other cards, should then be removed from the DOM. Not just made invisible, actually removed from the DOM.

let card = document.querySelector('.card');

document.querySelector('#create').addEventListener("click", function(){
    console.log('button clicked')
    let input = document.querySelector('#input').value;
    

    let divCardCss = document.createElement('div');
    let divClass = document.createAttribute('class');
    divClass.value = "card-css";
    divCardCss.setAttributeNode(divClass);
    card.appendChild(divCardCss);
    console.log(divCardCss);

    let inputBackground = document.createElement('input'); // create input element
    let type = document.createAttribute('type'); //create type attribute
    type.value = "color"; //assign value of color to type
    inputBackground.setAttributeNode(type); //set type to input element
    divCardCss.appendChild(inputBackground); //append to div class

    let inputFont = document.createElement('input');
    let type2 = document.createAttribute('type');
    type2.value = "color";
    inputFont.setAttributeNode(type2); 
    divCardCss.appendChild(inputFont);
    
    let button = document.createElement('button');
    let btnClass = document.createAttribute('class');
    btnClass.value = "delete";
    let btnContent = document.createTextNode('Delete');
    button.appendChild(btnContent);
    button.setAttributeNode(btnClass);
    divCardCss.appendChild(button);

    let inputCard = document.createElement('p');
    let cardInput = document.createAttribute('class');
    cardInput.value = "inputText";
    inputCard.setAttributeNode(cardInput);
    let cardContent = document.createTextNode(`${input}`);
    inputCard.appendChild(cardContent);
    divCardCss.appendChild(inputCard);

    // let background = document.querySelector('input');
    // let font = document.querySelector('.font');
    // let cardCss = document.querySelector('.card-css');

    // this.addEventListener('change', colorPickerBackground, false);
    
    // function colorPickerBackground() {
    //     event.target.parentElement.style.backgroundColor = event.target.value;
    // }

    // font.addEventListener('change', colorPickerFont, false);
    
    //   function colorPickerFont() {
    //     event.target.parentElement.style.color = event.target.value;
    // }

    document.querySelector('.delete').addEventListener("click", function() {
        event.target.parentElement.visibility = event.target.remove();
    }, false)

})   






