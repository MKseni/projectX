$(document).ready(function() {
  $('#pageUp').click(function() {
    $('body, html').animate({scrollTop: 0},1000);
  });
});
$(window).scroll(function() {
	if($(this).scrollTop() != 0) {
	$('#psgeUp').fadeIn();
 	} else {
	$('#pageUp').fadeOut();
	}
});