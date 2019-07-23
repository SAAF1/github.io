var x = 0;


var randomfact = document.getElementById('randomfact');

randomfact.addEventListener("click", function() {
 // var x= 0;
  switch (x) {
    case (x = 0):
      document.getElementById("random1").style.display = 'block';
      document.getElementById("random2").style.display = 'none';
      document.getElementById("random3").style.display = 'none';
console.log(x);
      x += 1;
      console.log(x);
      break;
    case (x = 1):
      document.getElementById("random1").style.display = 'none';
      document.getElementById("random2").style.display = 'block';
      document.getElementById("random3").style.display = 'none';
console.log(x);
      x += 1;
      console.log(x);
      break;
    case (x = 2):
      document.getElementById("random2").style.display = 'none';
      document.getElementById("random1").style.display = 'none';
      document.getElementById("random3").style.display = 'block';
console.log(x);
      x = 0;
      console.log(x);
      break;
  }
});
// randomfact.addEventListener("click", function (){
//
// switch(x) {
//
//   if(x == 0){
//     document.getElementById('random1').style.display = 'block';
//       document.getElementById('random2').style.display = 'none';
//     document.getElementById('random3').style.display = 'none';
//     x += 1;
//   }
//   if(x == 1){
//     document.getElementById('random2').style.display = 'block';
//     document.getElementById('random1').style.display = 'none';
//     document.getElementById('random3').style.display = 'none';
//     x += 1;
//   }
//   else
//   {
//     document.getElementById('random3').style.display = 'block';
//     document.getElementById('random1').style.display = 'none';
//     document.getElementById('random2').style.display = 'none';
//     x = 0;
//   }
// }



  // var text = "Hi";
  //   switch (new fact().getFact()) {
  //     case 0:
  //       fact = "Sunday";
  //       break;
  //     case 1:
  //       fact = "Monday";
  //       break;
  //     case 2:
  //        fact = "Tuesday";
  //       break;
  //     case 3:
  //       fact = "Wednesday";
  //       break;
  //     case 4:
  //       fact = "Thursday";
  //       break;
  //     case 5:
  //       fact = "Friday";
  //       break;
  //     case 6:
  //       fact = "Saturday";
  //   }

    // document.getElementById("randomfact").innerHTML = text;
// });
