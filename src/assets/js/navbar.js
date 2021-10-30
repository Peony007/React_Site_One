
$(document).ready(function() {
    $(window).on('scroll', function() {
        if (window.scrollY > 800) {
            $(".topnav").addClass("topnav_fixed");
            $(".topnav").css("top", "-200px");
            $(".topnav").css("transition", "0.4s");
        } else {
            $(".topnav").removeClass("topnav_fixed");
        }
    })
})

$("#home_navbtn").click(function() {
    $('html,body').animate({
            scrollTop: $(".home").offset().top
        },
        'slow');
});

$("#service_navbtn").click(function() {
    $('html,body').animate({
            scrollTop: $(".service").offset().top - 100
        },
        'slow');
});

$("#works_navbtn").click(function() {
    $('html,body').animate({
            scrollTop: $(".works").offset().top - 160
        },
        'slow');
});

$("#about_navbtn").click(function() {
    $('html,body').animate({
            scrollTop: $(".about").offset().top - 160
        },
        'slow');
});
$("#client_navbtn").click(function() {
    $('html,body').animate({
            scrollTop: $(".client").offset().top + 60
        },
        'slow');
});
$("#blog_navbtn").click(function() {
    $('html,body').animate({
            scrollTop: $(".blog").offset().top
        },
        'slow');
});

$("#contact_navbtn").click(function() {
    $('html,body').animate({
            scrollTop: $(".contact").offset().top
        },
        'slow');
});