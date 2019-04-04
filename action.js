function onReady(){
  var arrow = document.getElementById('arrow');
arrow.addEventListener("click", function (){
  window.scrollTo({
    top:600,
    behavior:"smooth"
  });
});
}
window.onload = function() {
  onReady();
};
