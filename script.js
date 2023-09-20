// Adding variables to store our data
// const userInput = document.querySelector(".field-input");
// const userLetterPreview = document.querySelector(".plaque-prev");
// const userPricePreview = document.getElementById("#plaque-price");



// Count letters function

    // function countLetters(some_data) {
    //     const optName = some_data.replaceAll('', '')
    //     const price = optName.length * 5

    //     userLetterPreview.textContent = some_data;
    //     userPricePreview.textContent = price;
    // }
    

    // countLetters('Olayinka')
    // countLetters('Dabo')
    // countLetters('Henry')
    // countLetters('Rob')
    // countLetters('Nkem')


// Event for input
// userInput.addEventListener('input', function(e){
//     countLetters(e.target.value)
// })

// Arrow function

// const countLetters = (some_data) =>{
//         const optName = some_data.replaceAll('', '')
//         const price = optName.some_data.length * 5

//         userLetterPreview.textContent = some_data;
//         userPricePreview.textContent = '$' + price;
// }

// userInput.onInput = (e) =>{
//     countLetters(e.target.value)
// }


const userInput = document.querySelector(".field-input");
const userLetterPreview = document.querySelector(".plaque-prev");
const userPricePreview = document.querySelector("#plaque-price");

userInput.addEventListener("input", () => {
    const inputText = userInput.value.trim(); // Get user input and remove leading/trailing(Empty) spaces

    // Update the letter preview with the user's input
    userLetterPreview.textContent = inputText;

    // Calculate the price based on the length of the input
    const price = inputText.length * 5;
    userPricePreview.textContent = '$' + price;
});











// const buyNow = (to_buy) =>{
//     const fieldInput = document.getElementById("guessField");
//     if (fieldInput === " "){
//         alert("Enter the name you would like.");
//     }else if(fieldInput === "YOUR NAME"){
//         alert('Enter your custom name.');
//     }else if (fieldInputIsUnique) {
//         alert('Hurray! You have entered a unique name!');
//     }else if (fieldInput.length >15) {
//         alert('ooops! You are only allowed 15 letters or less!')
//     }else{
//         alert('Enter a unique name');
//     }
// }

// const buySubmit = document.querySelector(".buy-submit");
// buySubmit.addEventListener('click', buyNow);

const buyNow = () => {
    const fieldInput = document.getElementById("guessField").value.trim();

    if (fieldInput === "") {
        alert("Enter the name you would like printed on your plaque.");
    } else if (fieldInput === "YOUR NAME") {
        alert('Enter your custom name.');
    } else if (inputIsUnique(fieldInput)) {
        alert('Hurray! You have entered a unique name!');
    } else if (fieldInput.length > 15) {
        alert('Oops! You are only allowed 15 letters or less!');
    } else {
        alert('Enter a unique name');
    }
}

// Function to check if input contains unique letters
function inputIsUnique(input) {
    const letterSet = new Set(input);
    return letterSet.size === input.length;
}

const buySubmit = document.querySelector(".buy-submit");
buySubmit.addEventListener('click', buyNow);


