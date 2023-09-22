// mobile sidemenu toggle script
$(document).ready(function() {

    // Function to handle smooth scrolling
function smoothScroll(targetId) {
    const target = document.getElementById(targetId);
    if (target) {
        window.scrollTo({
            top: target.offsetTop,
            behavior: 'smooth'
        });
    }
}

// Add event listeners to the navigation links
document.addEventListener('DOMContentLoaded', function () {
    const links = document.querySelectorAll('.nav-link');
    links.forEach(function (link) {
        link.addEventListener('click', function (e) {
            e.preventDefault(); // Prevent the default behavior of the link
            const targetId = link.getAttribute('href').substring(1); // Get the target ID
            smoothScroll(targetId); // Scroll to the target element
        });
    });
});


    // JavaScript to handle the button clicks
    const monthlyButton = document.querySelector('[data-plan="monthly"]');
    const yearlyButton = document.querySelector('[data-plan="yearly"]');
    const monthlyCards = document.querySelectorAll('.monthly-card');
    const yearlyCards = document.querySelectorAll('.yearly-card');
    
    monthlyButton.addEventListener('click', (event) => {
        // Prevent the default anchor link behavior
        event.preventDefault();
    
        // Show the Monthly Pricing Cards and hide the Yearly Pricing Cards
        monthlyCards.forEach((card) => {
            card.style.display = 'block';
        });
        yearlyCards.forEach((card) => {
            card.style.display = 'none';
        });
    
        // Update the button styles
        monthlyButton.classList.add('is-active');
        yearlyButton.classList.remove('is-active');
    });
    
    yearlyButton.addEventListener('click', (event) => {
        // Prevent the default anchor link behavior
        event.preventDefault();
    
        // Show the Yearly Pricing Cards and hide the Monthly Pricing Cards
        yearlyCards.forEach((card) => {
            card.style.display = 'block';
        });
        monthlyCards.forEach((card) => {
            card.style.display = 'none';
        });
    
        // Update the button styles
        yearlyButton.classList.add('is-active');
        monthlyButton.classList.remove('is-active');
    });
    
    // Initially, display the Monthly Pricing Cards and hide the Yearly Pricing Cards
    monthlyCards.forEach((card) => {
        card.style.display = 'block';
    });
    yearlyCards.forEach((card) => {
        card.style.display = 'none';
    });

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