(function($) {
	window.addEventListener("scroll", function(){
		var currentScroll = window.pageYOffset;
		if(currentScroll > 10) {
			$('.toggle').css({"-webkit-filter":"grayscale(100%)"});
			$('.toggle').css({"filter":"grayscale(100%)"});
			$('.toggle').css({"opacity":"0"});
			$('#titleBar').css({"box-shadow":"0 1vh 1em 0 rgba(0, 0, 0, 0.125)"});
			$('#titleBar').css({"background-color":"white"});
			$('#header').css({"background-color":"white"});
			$("#nav > ul > li > a").css({"color":"black"});
			$('#header').css({"box-shadow":"0 0 1em 0 rgba(0, 0, 0, 1)"});
			$('.title').css({"-webkit-filter":"grayscale(100%)"});
			$('.title').css({"filter":"grayscale(100%)"});
			$('#logo').css({"-webkit-filter":"grayscale(100%)"});
			$('#logo').css({"filter":"grayscale(100%)"});
		}else{
			$('.toggle').css({"-webkit-filter":"none"});
			$('.toggle').css({"filter":"none"});
			$('.toggle').css({"opacity":"1.0"});
			$('#titleBar').css({"box-shadow":"none"});
			$('#titleBar').css({'background-color':'transparent'});
			$("#header").css({'background-color':'transparent'});
			$("#nav > ul > li > a").css({"color":"white"});
			$('#header').css({"box-shadow":"none"});
			$('#logo').css({"-webkit-filter":"none"});
			$('#logo').css({"filter":"none"});
			$('.title').css({"-webkit-filter":"none"});
			$('.title').css({"filter":"none"});
		}
	},{passive: true});
	$(function(){
		jQuery('.timeline').timeline({mode: 'horizontal'});
	});
	var	$window = $(window),
		$body = $('body');

	// Breakpoints.
		breakpoints({
			xlarge:   [ '1281px',  '1680px' ],
			large:    [ '981px',   '1280px' ],
			medium:   [ '737px',   '980px'  ],
			small:    [ '481px',   '736px'  ],
			xsmall:   [ null,      '480px'  ]
		});

	// Play initial animations on page load.
		$window.on('load', function() {
			window.setTimeout(function() {
				$body.removeClass('is-preload');
			}, 100);
			if(window.innerWidth > 980) {
				var temp = parseInt($(".generalCollage").css("height")) + 100;
				$(".gen").css("height",temp);
			}
			$('#emailButton').on( "click", function() {
				var formData = new FormData();
				formData.append("fname", "");
				formData.append("lname", "");
				formData.append("email", $("#email").val());
				$.ajax({
		            url: "http://aiaa.rutgers.edu/listSubscribe.php",
		            method: 'POST',
		            data: formData,
		            processData: false,
  					contentType: false,
		            success: function(res){
		            	if(res.status=="failed") {
		            		alert("Either this email has already been registered or something went wrong.");
		            	}else{
		            		alert("Thank you for registering to our mailing list.");
		            	}
		            }
		        });
			} );
		});

	// Touch mode.
		if (browser.mobile)
			$body.addClass('is-touch');

	// Scrolly links.
		$('.scrolly').scrolly({
			speed: 1000
		});

	// Dropdowns.
		$('#nav > ul').dropotron({
			alignment: 'right',
			hideDelay: 350
		});

	// Nav.

		// Title Bar.
			$(
				'<div id="titleBar">' +
					'<a href="#navPanel" class="toggle"></a>' +
					'<span class="title">' + $('#logo').html() + '</span>' +
				'</div>'
			)
				.appendTo($body);

		// Panel.
			$(
				'<div id="navPanel">' +
					'<nav>' +
						$('#nav').navList() +
					'</nav>' +
				'</div>'
			)
				.appendTo($body)
				.panel({
					delay: 500,
					hideOnClick: true,
					hideOnSwipe: true,
					resetScroll: true,
					resetForms: true,
					side: 'left',
					target: $body,
					visibleClass: 'navPanel-visible'
				});

	// Parallax.
	// Disabled on IE (choppy scrolling) and mobile platforms (poor performance).
		/*if (browser.name == 'ie'
		||	browser.mobile) {

			$.fn._parallax = function() {

				return $(this);

			};

		}
		else {
			
			$window
				.on('load resize', function() {
					$window.trigger('scroll');
				});

		}

	// Spotlights.
		var $spotlights = $('.spotlight');

		$spotlights
			._parallax()
			.each(function() {

				var $this = $(this),
					on, off;

				on = function() {

					var top, bottom, mode;

					// Use main <img>'s src as this spotlight's background.
						$this.css('background-image', 'url("' + $this.find('.image.main > img').attr('src') + '")');

					// Side-specific scrollex tweaks.
						if ($this.hasClass('top')) {

							mode = 'top';
							top = '-20%';
							bottom = 0;

						}
						else if ($this.hasClass('bottom')) {

							mode = 'bottom-only';
							top = 0;
							bottom = '20%';

						}
						else {

							mode = 'middle';
							top = 0;
							bottom = 0;

						}

					// Add scrollex.
						$this.scrollex({
							mode:		mode,
							top:		top,
							bottom:		bottom,
							initialize:	function(t) { $this.addClass('inactive'); },
							terminate:	function(t) { $this.removeClass('inactive'); },
							enter:		function(t) { $this.removeClass('inactive'); },

							// Uncomment the line below to "rewind" when this spotlight scrolls out of view.

							//leave:	function(t) { $this.addClass('inactive'); },

						});

				};

				off = function() {

					// Clear spotlight's background.
						$this.css('background-image', '');

					// Remove scrollex.
						$this.unscrollex();

				};

				breakpoints.on('<=medium', off);
				breakpoints.on('>medium', on);

			});

	// Wrappers.
		var $wrappers = $('.wrapper');

		$wrappers
			.each(function() {

				var $this = $(this),
					on, off;

				on = function() {

					$this.scrollex({
						top:		250,
						bottom:		0,
						initialize:	function(t) { $this.addClass('inactive'); },
						terminate:	function(t) { $this.removeClass('inactive'); },
						enter:		function(t) { $this.removeClass('inactive'); },

						// Uncomment the line below to "rewind" when this wrapper scrolls out of view.

						//leave:	function(t) { $this.addClass('inactive'); },

					});

				};

				off = function() {
					$this.unscrollex();
				};

				breakpoints.on('<=medium', off);
				breakpoints.on('>medium', on);

			});

	// Banner.
		var $banner = $('#banner');

		$banner
			._parallax();*/

})(jQuery);

var timeLineNext = function() {
	$(".timeline-nav-button")[1].click();
}
var timeLinePrev = function() {
	$(".timeline-nav-button")[0].click();
}
