// Selecting buttons and elements by their ID
const changeTextButton = document.getElementById('changeTextBtn');
const changeColorButton = document.getElementById('changeColorBtn');
const addElementButton = document.getElementById('addElementBtn');
const contentText = document.getElementById('contentText');

// Function to change the text content dynamically
changeTextButton.addEventListener('click', function() {
    contentText.textContent = "The text has been changed! 🎉";
});

// Function to change the background color of the body dynamically
changeColorButton.addEventListener('click', function() {
    document.body.style.backgroundColor = "lightblue";
});

// Function to add a new element to the page
addElementButton.addEventListener('click', function() {
    const newElement = document.createElement('p');
    newElement.textContent = "A new paragraph was added! ✨";
    document.getElementById('dynamicContent').appendChild(newElement);
});
