// number of suares 
let numSquares = 6;
let colors = generateRandomColors(numSquares);
// select all que squares ;
const squares = document.querySelectorAll('.square');
//pickColor
let pickColor = pickColorFun();
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
// mode buttons;
const mode = document.querySelectorAll('.mode');
init();
// loop to all the squares ;
//change squares background color;
function changeSquaresBackground(item, i) {
    //add initial colors;
    if (colors[i]) {
        item.style.backgroundColor = colors[i];
        item.style.display = 'block';
    } else {
        item.style.display = 'none';
    }
    //add click listener for the squares
}

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
    const arr = [];
    for (let i = 0; i < num; i++) {
        let r = Math.floor(Math.random() * 256);
        let g = Math.floor(Math.random() * 256);
        let b = Math.floor(Math.random() * 256);
        arr.push(`rgb(${r}, ${g}, ${r})`);
    }
    return arr;
}
//add event listener to reset button ;
resetBtn.addEventListener('click', reset);
function setupMode(){
    mode.forEach(function(item){
        item.addEventListener('click',function(){
            mode[0].classList.remove('selected');
            mode[1].classList.remove('selected');
            this.classList.add('selected');
            this.textContent === "Easy" ? numSquares = 3 : numSquares = 6 ;
            reset();
        });
    });
}
function setupSquares() {
    squares.forEach(function (item, i) {
        changeSquaresBackground(item, i);
        //add click listener for the squares
        item.addEventListener('click', function () {
            //grab color of the square clicked;
            const currentColor = this.style.backgroundColor;
            //compare color to colorPicked
            if (currentColor === pickColor) {
                resetBtn.textContent = 'Play Again'
                message.textContent = 'CORRECT';
                changeColors(pickColor);
            } else {
                this.style.backgroundColor = '#232323';
                message.textContent = 'Try Again';
            }
        });
    });
}
//reset function ;
function reset(){
    colors = generateRandomColors(numSquares);
    //pick new color from the array;
    pickColor = pickColorFun();
    colorDisplay.textContent = pickColor;
    //display all the colors;
    squares.forEach(changeSquaresBackground);
    // reset the h1 bg color;
    h1.style.backgroundColor = 'steelblue';
    // reset the message ;
    message.textContent = '';
    resetBtn.textContent='New colors'
}
function init(){
    setupMode();
    setupSquares();
    reset();
}
