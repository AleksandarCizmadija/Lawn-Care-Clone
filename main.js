const menuBtn = document.querySelector('.nav-hamburger');
const menuLinks = document.querySelector('.menu');


menuBtn.addEventListener('click', function () {
    if (menuLinks.style.maxHeight) {
        menuLinks.style.maxHeight = null;
    } else {
        menuLinks.style.maxHeight = menuLinks.scrollHeight + 'px'
    }
});


//owl carousel
$('.owl-carousel').owlCarousel({
    loop: true,
    // autoplay: true,
    nav: false,
    center: true,
    items: 1,
    margin: 30,
    stagePadding: 0,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 2
        },
        1000: {
            items: 3
        }
    }
});


// video popup
$(document).ready(function () {
    $('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
        // disableOn: 700,
        type: 'iframe',
        mainClass: 'mfp-fade',
        removalDelay: 160,
        preloader: false,

        fixedContentPos: false
    });
});

//loader
const loader = document.querySelector('.loader');

window.addEventListener('load', function () {
    loader.classList.add('hidden');
});