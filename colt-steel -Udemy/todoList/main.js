const lis=document.querySelectorAll("li");
console.log(lis);
//loop for the list 
lis.forEach(function(item){
    item.addEventListener('mouseover', function (){
        this.classList.add('active');
    });
    item.addEventListener('mouseout', function () {
        this.classList.remove('active');
     });
     item.addEventListener('click', function () {
        this.classList.toggle('done');
     });
})
// add event listener for list ;