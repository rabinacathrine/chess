let queen={
    position:{
        x:0,
        y:0
    },

};
var dir;
var steps;
var board = [
  ["a8", "b8", "c8", "d8", "e8", "f8", "g8", "h8"],
  ["a7", "b7", "c7", "d7", "e7", "f7", "g7", "h7"],
  ["a6", "b6", "c6", "d6", "e6", "f6", "g6", "h6"],
  ["a5", "b5", "c5", "d5", "e5", "f5", "g5", "h5"],
  ["a4", "b4", "c4", "d4", "e4", "f4", "g4", "h4"],
  ["a3", "b3", "c3", "d3", "e3", "f3", "g3", "h3"],
  ["a2", "b2", "c2", "d2", "e2", "f2", "g2", "h2"],
  ["a1", "b1", "c1", "d1", "e1", "f1", "g1", "h1"]
];
  //  var x;
   // var dir = document.getElementById("myText").value
  function changedir(dir,steps){
    
    switch(dir) {
      case "NW":
         
      break;
      case "n"||'N':
        console.log("queen is in the north",steps);
        y=queen.position.y-steps;
         var arr = y.split("",2);
         var xc=arr[0];
          var yc=arr[1];
        console.log(arr);
        console.log(board[xc][yc]);
        // var yc=new array(y);
        // var n=board.indexOf(yc);
        //console.log("changed to",board[n]);

      break;
      case "NE"||"ne":
        console.log("queen is in the North East");
      break;
      case "w"||'W':
        console.log("queen is in the west",steps);
        x=queen.position.x-steps;
        var arr = x.split("",2);
         var xc=arr[0];
          var yc=arr[1];
        console.log(arr);
        console.log(board[xc][yc]);
        //console.log("changed to",x);
      break;
      case 'e'||'E':
        console.log("queen is in the east",steps);
        x=queen.position.x+steps;
        var arr = x.split("",2);
         var xc=arr[0];
          var yc=arr[1];
        console.log(arr);
        console.log(board[xc][yc]);
       // console.log("changed to",x);
      break;
      case "se"||"SE":
        console.log("queen is in the South east");
      break;
      case "s"||'S':
        console.log("queen is in the south",steps);
        y=queen.position.y+steps;
        var arr = y.split("",2);
         var xc=arr[0];
          var yc=arr[1];
        console.log(arr);
        console.log(board[xc][yc]);
      //  console.log("changed to",y);
      break;
      case "sw"||'SW':
        console.log("queen is in the Southwest");
      break;
      default:
       // console.log("queen is in the south");
       break;
    }
   // document.getElementById("demo").innerHTML = text;
  }

function myFunction() {
  var x = document.getElementById("myText").value;
  document.getElementById("demo").innerHTML = x;
  var res=x.split("");
  console.log(res);
  //document.write(res); 
   dir=res[0];
   steps=res[1];
  //changedir(res[0],res[1]);
return changedir(dir,steps);
    }
 

// res.forEach(function(res){
//   console.log('${res}');
// });

  