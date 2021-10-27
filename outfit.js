console.log("hello");

myArray = [
    "Carhartt Shirt.jpg",
    "Carhartt Sweatshirt.jpg",
    "Carhartt Vest.jpg"
];

function choose_random_item() {

    randomItem = Math.floor(Math.random() * myArray.length);

    selected_image = myArray[randomItem];

    document.getElementById('image').src = `./images/${selected_image}`;
}

// document.body.innerHTML = randomItem;


//     let image = myArray[randomItem];
//     document.getElementsById('img').src = myArray[randomItem];
// }


// selected_item = myArray[randomItem]
// document.getElementsByTagName('img').src = myArray[randomItem];