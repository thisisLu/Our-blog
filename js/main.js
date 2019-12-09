+function($) {
	function dwpb_fix_hieght() { 
		var dwpb_height = $('#dwpb').outerHeight();
		var adminbar_height = $('.admin-bar #wpadminbar').outerHeight();
		function dwpb_custom_style() {
			if ( ! $('#dwpb-custom-style').length ) {
				$('<style id="dwpb-custom-style">body.dwpb-push-page.dwpb-open, body.dwpb-push-page.admin-bar.dwpb-open #wpadminbar, .dwpb-twenty-fourteen.dwpb-open.dwpb-push-page .site-header{top:'+dwpb_height+'px}</style>').appendTo('body');
				$('<style id="dwpb-custom-style-twenty-fourteen">.admin-bar.dwpb-twenty-fourteen.dwpb-open.dwpb-push-page .site-header{top:'+ (dwpb_height + adminbar_height) +'px}</style>').appendTo('body');
			} else {
				return false; 
			}
		}

		setTimeout(function(){
			dwpb_custom_style();

			$('.dwpb-open .dwpb-action').click(function(){
				dwpb_custom_style();
			});
		},1010);
	}

	$(document).ready(function(){
		// Countdown
		$('.dwpb-counter').countdown({
			timestamp : (new Date()).getTime() + (dwpb.timeleft * 1000),
			callback: function(d, h, m, s){
				if( d === 0 && h === 0 && m === 0 && s === 0 ) {
					$('.dwpb-message').removeClass('hide');
					$('.dwpb-countdown').addClass('hide');
				}
			}
		});

		dwpb_fix_hieght();

		// Animation
		$('.dwpb-action').click(function(){
			$('body').toggleClass('dwpb-open');
		});

		// Body class
		setTimeout(function(){
			$('body').addClass('dwpb-open');
		},1000);



		// Close Promobar
		if ( $('body').hasClass('dwpb-allow-close') ) {
			function remove_promobar() {
				$('#dwpb, .dwpb-close').remove();
				$('body').removeClass('dwpb-cover-page dwpb-ramain-top dwpb-open dwpb-push-page dwpb-twenty-fourteen');
			}

			$('.dwpb-close').click(function(){
				remove_promobar();
			});



		}
	});

	$(window).resize(function(){
		dwpb_fix_hieght();
	});
}(jQuery);