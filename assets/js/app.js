$(document).ready(function() {
	'use strict'
	// add active to li links //
    // $('.nav-link').click(function (e) {
    //     $('.subTitle').addClass('active');
    // });    })

    // hide navbar //
    $(document).scrollTop(0);
    $('.navbar').hide();

    // function to show navbar //
    $(window).scroll(function(){                          
            if ($(this).scrollTop() > 805) {
            	$('.navbar').show();
            } else {
            	$('.navbar').hide();

            }
        });

    })
