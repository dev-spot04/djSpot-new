// mobile sidemenu toggle script
$(document).ready(function() {
    $(".mobile-toggler-btn").click(function() {
        $(".cs-navbar-collapse").toggleClass("active");
        $(".x").toggleClass("toggle-active");
    });
    //  client testimonial js
    $('.client-testimonial').slick({
        draggable: true,
        centerMode: true,
        slidesToShow: 1,
        dots: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true,
        fade: false,
        speed: 400,
        responsive: [{
                breakpoint: 1399,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },

            {
                breakpoint: 1199,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },

            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }, {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    });

      $(document).ready(function() {
        $("#services").click(function() {
            $(".cs-dropdown-menu").toggleClass("active");
        });
        $("#expertise").click(function() {
            $(".cs-dropdown-megamenu").toggleClass("mega-active");
            $(".chevron-icn").toggleClass("mega-active");
        });
    });

    // Sticky header js
    if ($(window).width() > 768) {
        window.onscroll = function() { myFunction() };

        var header = document.getElementById("csHeader");
        var sticky = header.offsetTop;

        function myFunction() {
            if (window.pageYOffset > sticky) {
                header.classList.add("sticky");
            } else {
                header.classList.remove("sticky");
            }
        }
    }

});