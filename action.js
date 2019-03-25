function onReady{
  var arrow = document.getElementById('arrow').addEventListener("click", displayDate);;
arrow.addEventListener("click", function {
  window.scrollBy(0,50);
});

  arrow.onclick = function{
    	window.scrollBy(0,50);
  }
}


window.onload = function() {
  onReady();
};
