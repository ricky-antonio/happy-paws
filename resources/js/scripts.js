$(document).ready(function() {
    
    // sticky nav
    var waypoint = new Waypoint({
        element: document.getElementsByClassName("js--section-features"),
        handler: function(direction) {
            if (direction === 'down') {
                $('nav').addClass('sticky');
            } else {
                $('nav').removeClass('sticky');
            }
        }, offset: 60  
      });

    // Scroll to buttons
    $('.js--scroll-to-plans').click(function (e) {
        e.preventDefault();
        document.querySelector('.js--section-plans').scrollIntoView({ behavior: 'smooth' });
    });

    $('.js--scroll-to-features').click(function (e) {
        e.preventDefault();
        document.querySelector('.js--section-features').scrollIntoView({ behavior: 'smooth' });
    });

    $('.js--scroll-to-steps').click(function (e) {
        e.preventDefault();
        document.querySelector('.js--section-steps').scrollIntoView({ behavior: 'smooth' });
    });

    $('.js--scroll-to-cities').click(function (e) {
        e.preventDefault();
        document.querySelector('.js--section-cities').scrollIntoView({ behavior: 'smooth' });
    });

    // Animations on scroll
    
    $('.js--wp-1').waypoint(function (direction) {
        if (direction === 'down') {
            $('.js--wp-1').addClass('animated fadeIn');
        } else {
            $('.js--wp-1').removeClass('animated fadeIn');
        }        
    }, { offset: '60%'});

    $('.js--wp-2').waypoint(function (direction) {
        if (direction === 'down') {
            $('.js--wp-2').addClass('animated fadeInUp');
        } else {
            $('.js--wp-2').removeClass('animated fadeInUp');
        }        
    }, { offset: '85%'});

    $('.js--wp-3').waypoint(function (direction) {
        if (direction === 'down') {
            $('.js--wp-3').addClass('animated fadeIn');
        } else {
            $('.js--wp-3').removeClass('animated fadeIn');
        }        
    }, { offset: '60%'});

    $('.js--wp-4').waypoint(function (direction) {
        if (direction === 'down') {
            $('.js--wp-4').addClass('animated pulse');
        } else {
            $('.js--wp-4').removeClass('animated pulse');
        }        
    }, { offset: '50%'});
    
    // Mobile Navigation
    $('.js--nav-icon').click(function () {
        var nav = $('.js--main-nav');
        var icon = $('.js--nav-icon i');

        nav.slideToggle(200);
        if (icon.hasClass('ion-navicon-round')) {
            icon.addClass('ion-close-round');
            icon.removeClass('ion-navicon-round');
        } else {
            icon.addClass('ion-navicon-round');
            icon.removeClass('ion-close-round');
        }
    });

    function collapse() {
        
    }
 
});