// script.js

$('#score').click(function() {
  $('#answer').toggle('fast', function() {
    // Animation complete.
  });
});



document.getElementById("reset").onclick = function refreshPage(){
    window.location.reload();
}
