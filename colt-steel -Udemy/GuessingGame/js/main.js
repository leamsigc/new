const colors = generateRandomColors(6);
// select all que squares ;
const squares = document.querySelectorAll('.square');
//pickColor
const pickColor = pickColorFun();
// display color;
const colorDisplay = document.getElementById('colorDisplay');
//display color picket
colorDisplay.textContent = pickColor;
// display message 
const message = document.getElementById('message');
//h1 
const h1 = document.querySelector('h1');
// reset btn for new game or new colors
const resetBtn = document.getElementById('reset-btn');
// loop to all the squares ;
squares.forEach(function (item, i) {
    //add initial colors;
    item.style.backgroundColor = colors[i];
    //add click listener for the squares
    item.addEventListener('click', function () {
        console.log(pickColor);
        //grab color of the square clicked;
        const currentColor = this.style.backgroundColor;
        console.log(currentColor);
        //compare color to colorPicked
        if (currentColor === pickColor) {
            message.textContent = 'CORRECT';
            changeColors(pickColor);
        } else {
            this.style.backgroundColor = '#232323';
            message.textContent = 'Try Again';
        }
    });
});


// change color to all the squares if correct
function changeColors(color) {
    h1.style.backgroundColor = color;
    squares.forEach(function (item) {
        item.style.backgroundColor = color;
    });
}
// pick color function 
function pickColorFun() {
    const random = Math.floor(Math.random() * colors.length);
    return colors[random];
}
// Generate Random colors function;
function generateRandomColors(num) {
    const arr =[];
    for(let i = 0 ;i<num;i++){
        let r =Math.floor(Math.random() * 256);
        let g = Math.floor(Math.random() * 256);
        let b = Math.floor(Math.random() * 256);
        arr.push(`rgb(${r}, ${g}, ${r})`); 
    }
    return arr;
}