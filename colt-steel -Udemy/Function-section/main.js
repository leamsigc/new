/* FUNCTION FOR EVEN NUMBERS */
//TWO WAYS TO DO IT FIST WEY NEXT
/*function isEven (num){
    if(num % 2 === 0){
       return true;
       }
    else{
        return false;
    }
}*/
/*==== BEST WAY TO DO IT ====*/
function isEven(num){
    return num % 2 === 0;
}
/*FACTORYAL NUMBER*/
function factorial(num){
  var result= 1;
    
    
    for(var i=2 ;i <= num ;i++){
     result*=i;  
    };
    return result;
};
/*how to change a array data*/
function kabakToSnake (str){
    //remplace all - to _ 
    var newStr=    str.replace(/-/g , "_");
    //return string
    return newStr;
}