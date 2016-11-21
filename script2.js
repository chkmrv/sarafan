$(document).ready(function(){
  $('.block-table').hover(function(event){
    // Hover over code
    var tmp = $(this).children('.imgme')
     $(tmp)
      .show()
      .css('top', (event.pageY - 1300) + 'px')
      .css('left', (event.pageX - 40) + 'px')
      .fadeIn('slow');
  }, function() {
    // Hover out code
    $('#moo').fadeOut('slow');
  }).mousemove(function(event){
    // Mouse move code
    $('#moo')
      .css('top', (event.pageY - 1300) + 'px')
      .css('left', (event.pageX - 40) + 'px');
  });
});
