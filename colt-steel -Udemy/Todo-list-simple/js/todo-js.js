/*GLOBAL VARIBLES*/
var todos = ['feed the turtle'];
var input = prompt('What Would you like To do');
/*while loop */
while(input !== "quit"){
    
    if(input === "list"){
        
             console.log(todos);
        /*add the new var to the array*/
    }
    else if (input === "new"){
        var newinput = prompt('add new todo item');
        
        todos.push(newinput);
             }
    input = prompt('What Would you like To do');
      }
console.log('Yay you quit the app');