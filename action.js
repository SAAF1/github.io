function onReady(){

  var arrow = document.getElementById('arrow');
arrow.addEventListener("click", function (){
  window.scrollTo({
    top:700,
    behavior:"smooth"
  });
});

// function quotes(){
//
// var aquote = new Array;
// aquote[0]="\"It was a beautiful day.\"";
// aquote[1]="\"Dark and stormy night.\"";
// aquote[2]="\"Quote 3.\""
//
// rdmQuote = Math.floor(Math.random()*aquote.length);
// document.getElementById("txtbox") .value=aquote[rdmQuote];
// }

var x = 0;
var randomfact = document.getElementById('randomfact');

randomfact.addEventListener("click", function (){
  if(x = 0){
    document.getElementById('random1').style.display = 'block';
    document.getElementById('random3').style.display = 'none';
    x += 1;
  }
  if(x = 1){
    document.getElementById('random2').style.display = 'block';
    document.getElementById('random1').style.display = 'none';
    x += 1;
  }
  else
  {
    document.getElementById('random3').style.display = 'block';
    document.getElementById('random2').style.display = 'none';
    x = 0;
  }
})

}


window.onload = function() {
  onReady();
};
