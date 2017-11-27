// decalere a game object



const game ={
    init : function(){
        const resetBtnresetBtn = document.getElementById('resetBtn');
        let numSquares = 6;
        let colors = game.setUpColors(numSquares);
        let pickColor =selectColor(colors);
        const squares = document.querySelectorAll('.square');
        const message = document.getElementById('notification');
        resetBtn.addEventListener('click',function(){
            game.reset(colors,numSquares,resetBtn,message);
            this.textContent = 'New Color';
        });
        this.mode(colors,squares,message,pickColor);
        this.setupsquares(colors , resetBtn,squares,message,pickColor);
        // game.reset(colors,numSquares,resetBtn,message);
    },
    mode:function(colors,squares,message,pick){
        const modeBtn=document.querySelectorAll('.mode');
        modeBtn.forEach(function(item){
            item.addEventListener('click',function(){
                modeBtn[0].classList.remove('active');
                modeBtn[1].classList.remove('active');
                this.classList.add('active');
                this.textContent == 'Easy' ? numSquares= 3:numSquares = 6;
                console.log(numSquares);
                game.reset(colors,numSquares,squares,resetBtn,message,pick);
            });
        });
    },
    setupsquares:function(color,btn,squareDivs,msg,pick){
        pick = selectColor(color);
        console.log(`all the colors are  ${color}`);
        console.log(`select color is ${pick}`);
        squareDivs.forEach(function(items , i ){
            if(color[i]){
                items.style.backgroundColor = color[i];
                items.style.display = 'block';
            }else{
                items.style.display = 'none';
            }
            // pick color function;
            items.addEventListener('click',function(){
                let currentColor = this.style.backgroundColor;
               console.log(`current div color is ${currentColor}`);
               if(currentColor === pick){
                msg.textContent = 'Play Again';
                btn.textContent = 'Correct';
                changeAllColors(pick,squareDivs);
               }else{
                   this.style.opacity = '0';
                   msg.textContent = 'New Colors';
               }
            });
        });
    },
    setUpColors:function(num){
        let arr=[];
        for(let i=0;i<num;i++){
            arr.push(randomColor());
        }
        return arr;
    },
    reset:function(color,numOfSquares,resetBtn,msg,pick){
        const squares = document.querySelectorAll('.square');
        color=game.setUpColors(numOfSquares);
        console.log(color);
        // squares.forEach(function(item,i){
        //     if(color[i]){
        //         item.style.backgroundColor = color[i];
        //         item.style.display = 'block';
        //     }else{
        //         item.style.display = 'none';
        //     }
        // });
        resetBtn.textContent = 'New Colors';
        game.setupsquares(color, resetBtn,squares,msg,pick);
    }

}
game.init();
function randomColor(){
    let r = Math.floor(Math.random()*256);
    let g = Math.floor(Math.random()*256);
    let b = Math.floor(Math.random()*256);
    let a = Math.random();
    const aPrecision = a.toPrecision(1);
    return `rgba(${r}, ${g}, ${b}, ${aPrecision})`;
}
// selet color 
function selectColor(color){
    const random =Math.floor(Math.random()* color.length);
    return color[random];
}
// change all bg color 
const changeAllColors = function(currentColor,allSquares){
    allSquares.forEach(function(item){
        item.style.backgroundColor = currentColor;
        item.style.opacity='1';
    });
};