
jQuery(document).ready(function() {	
	
    /*
        Background slideshow
    */
    images = [
		"images/backgrounds/IMG20240417192539.jpg"
	  , "images/backgrounds/IMG20240630085801.jpg"
	  , "images/backgrounds/IMG20240707173946.jpg"
	  , "images/backgrounds/IMG20240901102620.jpg"
	  , "images/backgrounds/IMG20241221164827.jpg"
	  , "images/backgrounds/IMG20241221172337.jpg"
	  , "images/backgrounds/IMG20241223174601.jpg"
	  , "images/backgrounds/IMG20241223180011.jpg"
	  , "images/backgrounds/IMG20250112161425.jpg"
	  , "images/backgrounds/IMG_3155.jpg"
	  , "images/backgrounds/IMG_3669.jpg"
	  , "images/backgrounds/IMG_5666.jpg"
	  , "images/backgrounds/IMG_5706.jpg"
	  , "images/backgrounds/acae0cfa-4a7f-4539-acb3-b7ffc093306e.jpg"
	  , "images/backgrounds/e9797aac-9a3f-415d-945c-5578d1c71641.jpg"
	 ];

	 for (let i = images.length - 1; i >= 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [images[i], images[j]] = [images[j], images[i]];
    }
	$('.banner-area').backstretch(images, {duration: 3000, fade: 750});
	

	$("#typed").typed({
		// strings: ["Typed.js is a <strong>jQuery</strong> plugin.", "It <em>types</em> out sentences.", "And then deletes them.", "Try it out!"],
		stringsElement: $('#typed-strings'),
		typeSpeed: 50,
		backDelay: 1000,
		loop: true,
		contentType: 'html', // or text
		// defaults to false for infinite loop
		loopCount: false,
		callback: function(){ foo(); },
		resetCallback: function() { newTyped(); }
	});

	$(".reset").click(function(){
		$("#typed").typed('reset');
	});
 
 
    function newTyped(){ /* A new typed object */ }

    function foo(){ console.log("Callback"); }

	
});

// cowntdown function. Set the date below (December 1, 2016 00:00:00):
var austDay = new Date("May 4, 2025 08:00:00");
	$('#countdown').countdown({until: austDay, layout: '<div class="item"><p>{dn}</p> {dl}</div> <div class="item"><p>{hn}</p> {hl}</div> <div class="item"><p>{mn}</p> {ml}</div> <div class="item"><p>{sn}</p> {sl}</div>'});
	$('#year').text(austDay.getFullYear());
	
// smooth scrolling	
	$(function() {
  $('a[href*=#]:not([href=#])').click(function() {
	if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {

	  var target = $(this.hash);
	  target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
	  if (target.length) {
		$('html,body').animate({
		  scrollTop: target.offset().top
		}, 1000);
		return false;
	  }
	}
  });
});
