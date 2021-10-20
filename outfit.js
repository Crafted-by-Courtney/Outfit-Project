console.log("hello");


let myArray = [
    "Carhartt Shirt.jpg",
    "Carhartt Sweatshirt.jpg",
    "Carhartt Vest.jpg"
];

document.getElementsByTagName('img').src = myArray[randomItem];

function choose_random_item() {

    let randomItem = Math.floor(Math.random() * myArray.length);
    let image = myArray[randomItem;]
}

// selected_item = myArray[randomItem]
// document.getElementsByTagName('img').src = myArray[randomItem];