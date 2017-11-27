//    //create a paper.js path();
//    var    path = new Path();
//    //stroke color
//    path.strokeColor = 'black';
//    var  start = new Point(100,100);
//    //move to star and draw a line from there
//    path.moveTo(start);
//    //Note the plus operator on the Point objects.
//    //paperscript does that for us and much more
//    path.lineTo(start+[100,-50]);
// ===== complete circle
// var myCircle = new Path.Circle(view.center, 150);
// myCircle.strokeColor = 'green';
// myCircle.selected = true;
// half of a circle
// var myHalfCircle = new Path.Circle(new Point(400, 200), 50);
// myHalfCircle.strokeColor = 'red';
// myHalfCircle.fillColor = 'green';
// myHalfCircle.selected = true;
// myHalfCircle.removeSegment(2);
//    Remove item completely  we use item.remove();
// myHalfCircle.remove();
// rectangles
// var path = new Path();
// path.strokeColor = 'red';
// path.add(new Point(50, 75));
// path.add(new Point(50, 25));
// path.add(new Point(100, 25));
// path.add(new Point(100, 75));
// path.closed = true;
// //Seect the path so we can see it handles :
// path.fullySelected = true;
// //Create a copy of the path and moved it 100pt to the right
// var copy = path.clone();
// copy.fullySelected = true;
// copy.position.x += 100;
// //smooth the segment of the copy;
// copy.smooth();

// // second circle whit color fill
// var secondCircle = new Path.Circle(new Point(100, 400), 50);
// secondCircle.fillColor = '#eee';
// secondCircle.strokeColor = 'red';
// var circle2 = new Path.Circle(new Point(200, 600), 400);
// circle2.fillColor = "pink";
// circle2.strokeColor = 'skyblue';

//Circle all the screeen complite
// for (var  index = 0; index < Canvas.width ; index+=100) {
//     for (var j = 0; j < Canvas.height; j+=100) {
//         var circle3 = new Path.Circle(new Point(index,j),40);
//         circle3.fillColor ='rgb('+((j+index)%255)+','+(j%255)+','+(index%255)+')';
//         circle3.strokeColor='rgb('+((j+index)%255)+','+((j+index)%255)+','+((j+index)%255)+')';
//         circle3.strokeWidth = 13;
//         circle3.opacity = 0.6;
//     }
// }

/* ON MOUSE MOVE EVENT  */
// var path;
// tool.minDistance = 5;
//     function onMouseDown(event) {
//         if(path){
//             path.selected = false;
//         };
//         path = new Path();
//         path.strokeColor = 'rgb('+(event.point.x % 255)+','+((event.point.x + event.point.y) % 255)+','+(event.point.y % 255)+')';
//         path.strokeWidth = 3;
//         path.fullySelected = true;
//     }
// function onMouseDrag(event) { 
//     path.add(event.point);
//     console.log((event.point.x % 255 ) );
//  }
//  function onMouseUp(event) {
//      path.selected = false;
//      path.smooth();
//  }
//  var circle4;
//  function onKeyDown(event) {
//     var destination = Point.random() * view.size;
//      circle4 = new Path.Circle(new Point(destination),100);
//     circle4.strokeColor = "red";
//     circle4.fillColor = "green";
//     circle4.opacity = 0.6;
// }

//  function onFrame(event ){
//         circle4.scale(.8);
//      }
 // The amount of circles we want to make:

// The amount of segment points we want to create:
var amount = 20;

// The maximum height of the wave:
var height = 20;

// Create a new path and style it:
var path = new Path({
	// 80% black:
	strokeColor: ["red"],
	strokeWidth: 60,
	strokeCap: 'square'
});

// Add 5 segment points to the path spread out
// over the width of the view:
for (var i = 0; i <= amount; i++) {
	path.add(new Point(i / amount, 1) * view.size);
}

// Select the path, so we can see how it is constructed:
path.selected = true;

function onFrame(event) {
	// Loop through the segments of the path:
	for (var i = 0; i <= amount; i++) {
		var segment = path.segments[i];

		// A cylic value between -1 and 1
		var sinus = Math.sin(event.time * 3 + i);
		
		// Change the y position of the segment point:
		segment.point.y = sinus * height + 100;
    }
}