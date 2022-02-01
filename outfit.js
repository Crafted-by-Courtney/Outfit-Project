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


setTimeout(() => {
    console.log("the callback works")
}, 2000);

// window.onload = function() {
//     document.querySelector("#callback").addEventListener("click", function() {
//         document.getElementById('image').src = "https://i0.wp.com/www.cssscript.com/wp-content/uploads/2015/11/ispinner.jpg?fit=400%2C298&ssl=1";
//         console.log("Button was clicked")
//     });
// }