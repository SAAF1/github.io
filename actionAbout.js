var x = 0;


var randomfact = document.getElementById('randomfact');

randomfact.addEventListener("click", function() {
 // var x= 0;
 switch (x) {
    case (x = 0):
      document.getElementById("random1").style.display = "none";
      document.getElementById("random2").style.display = "block";
      document.getElementById("random3").style.display = "none";
      console.log(x);
      x += 1;
      console.log(x);
      break;
    case (x = 1):
      document.getElementById("random1").style.display = "none";
      document.getElementById("random2").style.display = "none";
      document.getElementById("random3").style.display = "block";
      console.log(x);
      x += 1;
      console.log(x);
      break;
    case (x = 2):
      document.getElementById("random1").style.display = "block";
      document.getElementById("random2").style.display = "none";
      document.getElementById("random3").style.display = "none";
      console.log(x);
      x = 0;
      console.log(x);
      break;
  }

});
