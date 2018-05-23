// 1. Create an HTML page that contains a text area and a button labeled Create.
// 2. When the user enters in text into the text area and then clicks the create button, create a new card element in the DOM. You decide the height/width of the card.
// 3. Above the text on each card, there must be two input controls of type color.
// 4. Above the text on each card, there must be a button element labeled Delete.
// 5. When the user selects a color from the first input, then the background color of that card, and no other cards, should change to the color chosen.
// 6. When the user selects a color from the second input, then the font color of that card, and no other cards, should change to the color chosen.
// 7. When the user clicks the Delete button, the containing card, and no other cards, should then be removed from the DOM. Not just made invisible, actually removed from the DOM.

let card = document.querySelector('.card');

document.querySelector('#create').addEventListener("click", function(){
    let input = document.querySelector('#input').value;
    card.innerHTML +=
    `<div class="card-css">
        <input type="color" class="background">
        <input type="color" class="font">
        <button class="delete">Delete</button>
        <p class="inputText">${input}</p>
    </div>`;

    let background = document.querySelector('.background');
    let bkgValue = document.querySelector('.background').value;
    let font = document.querySelector('.font');
    let fontValue = document.querySelector('.font').value;
    let cardCss = document.querySelector('.card-css');

    background.addEventListener('change', function() {
        cardCss.style.backgroundColor = bkgValue;
    })

    font.addEventListener('change', function() {
        cardCss.style.color = fontValue;
    })

    document.querySelector('.delete').addEventListener("click", function() {
        card.innerHTML = ` `;
    })

})

