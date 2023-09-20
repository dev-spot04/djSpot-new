// mobile sidemenu toggle script
$(document).ready(function() {

    // JavaScript to handle the button clicks
const monthlyButton = document.querySelector('[data-plan="monthly"]');
const yearlyButton = document.querySelector('[data-plan="yearly"]');
const monthlyCard = document.querySelector('.monthly-card');
const yearlyCard = document.querySelector('.yearly-card');

monthlyButton.addEventListener('click', (event) => {
   // Prevent the default anchor link behavior
   event.preventDefault();

   // Show the Monthly Pricing Card and hide the Yearly Pricing Card
   monthlyCard.style.display = 'block';
   yearlyCard.style.display = 'none';

   // Update the button styles
   monthlyButton.classList.add('is-active');
   yearlyButton.classList.remove('is-active');
});

yearlyButton.addEventListener('click', (event) => {
   // Prevent the default anchor link behavior
   event.preventDefault();

   // Show the Yearly Pricing Card and hide the Monthly Pricing Card
   yearlyCard.style.display = 'block';
   monthlyCard.style.display = 'none';

   // Update the button styles
   yearlyButton.classList.add('is-active');
   monthlyButton.classList.remove('is-active');
});

// Initially, display the Monthly Pricing Card (you can set the default)
monthlyCard.style.display = 'block';
yearlyCard.style.display = 'none';

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
                    slidesToShow: 2,
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