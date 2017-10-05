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
// Easy btn ;
const easyBtn = document.getElementById('easy-btn');
//Hard btn ;
const hardBtn = document.getElementById('hard-btn');

// loop to all the squares ;
squares.forEach(function(item , i){
    changeSquaresBackground(item,i);
    //add click listener for the squares
    item.addEventListener('click', function () {
        console.log(pickColor);
        //grab color of the square clicked;
        const currentColor = this.style.backgroundColor;
        console.log(currentColor);
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
//change squares background color;
function changeSquaresBackground(item , i){
    //add initial colors;
    if(colors[i]){
        item.style.backgroundColor = colors[i];
        item.style.display='block';
    }else{
        item.style.display='none';
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
    const arr =[];
    for(let i = 0 ;i<num;i++){
        let r =Math.floor(Math.random() * 256);
        let g = Math.floor(Math.random() * 256);
        let b = Math.floor(Math.random() * 256);
        arr.push(`rgb(${r}, ${g}, ${r})`); 
    }
    return arr;
}
//add event listener to reset button ;
resetBtn.addEventListener('click', function(){
    //generate new colors;
    colors = generateRandomColors(numSquares);
    //pick new color from the array;
    pickColor = pickColorFun();
    colorDisplay.textContent = pickColor;
    //display all the colors;
    squares.forEach(changeSquaresBackground);
    // reset the h1 bg color;
    h1.style.backgroundColor = 'steelblue';
});
//add event listener for the easy btn ;
easyBtn.addEventListener('click', function(){
    numSquares = 3
    //change the background color ;
    this.classList.add('selected');
    //change the hard btn background color ;
    hardBtn.classList.remove('selected');
    //generate colors;
    colors=generateRandomColors(numSquares);
    //pick new color fom the array;
    pickColor = pickColorFun();
    colorDisplay.textContent = pickColor;
    //display color ;
    squares.forEach(changeSquaresBackground);
});
// add event lister for the hard btn
hardBtn.addEventListener('click', function(){
    numSquares = 6 ;
    //change the background color ;
    this.classList.add('selected');
    //change the hard btn background color ;
    easyBtn.classList.remove('selected');
    //generate colors;
    colors=generateRandomColors(numSquares);
    //pick new color fom the array;
    pickColor = pickColorFun();
    colorDisplay.textContent = pickColor;
    //display color ;
    squares.forEach(changeSquaresBackground);
});