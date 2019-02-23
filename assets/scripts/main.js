$(document).ready(function () {

    var $Rocket = $('.bblock-block-46aad3a .bblock-background-overlay .after');
    var launchPos = $('.bblock-block-46aad3a').innerHeight() - $Rocket.innerHeight();
    var launch = $('.bblock-block-46aad3a').innerHeight() - 150;
    
    if (window.screen.width > 575) {
        $Rocket.css({
            'top': launchPos
        })
    } else {
        $Rocket.css({
            'top': '800px'
        })
    }
    var rTop = $Rocket.css('top');
    var rLeft = $Rocket.css('left');
    var rLeftNum = parseFloat(rLeft, 10);
    var rTopNum = parseFloat(rTop, 10);
    

    var section3 = $(".bblock-block-7bfd03e");
    var section4 = $(".bblock-block-622e642");
    var section5 = $(".bblock-block-b8b7e93");

    var section3Top = $(".bblock-block-7bfd03e").offset().top - 300;
    var section4Top = $(".bblock-block-622e642").offset().top - 300;
    var section5Top = $(".bblock-block-b8b7e93").offset().top - 300;
        
    var screenOffset = $Rocket.offset().top - launch;


    $('.bblock-widget-heading').each(function (i, el) {
        setTimeout(function () {
            $(el).removeClass('bblock-invisible').addClass('fadeInRight')
        }, 300 * i)
    });





    $("body, html").on("click", ".BackTo", function (e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: 0
        }, 800);
    });




    $(window).scroll(function () {

        if ($(window).scrollTop() > $(window).height()) {
            $(".BackTo").fadeIn('slow');
        } else {
            $(".BackTo").fadeOut('slow');
        }

        if ($(window).scrollTop() > section3Top) {
            $(".bblock-block-b0da199").removeClass('bblock-invisible').addClass('fadeInLeft');
            $(".bblock-block-011984e").removeClass('bblock-invisible').addClass('fadeInRight');

            setTimeout(function () {
                $('.bblock-icon-list-item').each(function (i, el) {
                    setTimeout(function () {
                        $(el).removeClass('bblock-invisible').addClass('fadeInRight')
                    }, 300 * i)
                });
            }, 500)

        }


        if ($(window).scrollTop() > section4Top) {
            $('.timeline-item').each(function (i, el) {
                setTimeout(function () {

                    if (i % 2 === 0) {
                        $(el).removeClass('bblock-invisible').addClass('fadeInLeft')
                    } else {
                        $(el).removeClass('bblock-invisible').addClass('fadeInRight')
                    }


                }, 300 * i)
            });
        }


        if ($(window).scrollTop() > section5Top) {
            $('.features-blocks').removeClass('bblock-invisible').addClass('zoomIn')

        }


        var sPos = $(this).scrollTop() - screenOffset;
        if (sPos > 0) {
            $Rocket.css({
                'left': rLeftNum + sPos / 2.3,
                'top': rTopNum - sPos / 2.3
            });
        }
    });

    $(".bblock-custom-embed-play").click(function () {
        $(".bblock-custom-embed-image-overlay").hide();
    })
});
