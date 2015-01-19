
 
window.requestAnimFrame = (function(callback) {
        return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || 
window.oRequestAnimationFrame || window.msRequestAnimationFrame ||
        function(callback) {
          window.setTimeout(callback, 1);
        };
      })();




abc();
$('card').click(function()
                {
                  $('.box1').remove();
                });
/**/

$(document).on("click", ".restart", function() {   
          var el = $(".wrapper"),
          newone = el.clone(true);

          el.before(newone);

          $("." + el.attr("class") + ":last").remove();
});