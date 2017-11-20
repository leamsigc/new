   //create a paper.js path();
   var    path = new Path();
   //stroke color 
   path.strokeColor = 'black';
   var  start = new Point(100,100);
   //move to star and draw a line from there 
   path.moveTo(start);
   //Note the plus operator on the Point objects.
   //paperscript does that for us and much more 
   path.lineTo(start+[100,-50]);