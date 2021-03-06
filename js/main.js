$(document).ready(function () {


    let $btns = $('.project-area .button-group button');


    $btns.click(function (e) {

        $('.project-area .button-group button').removeClass('active');
        e.target.classList.add('active');

        let selector = $(e.target).attr('data-filter');
        $('.project-area .grid').isotope({
            filter: selector
        });

        return false;
    })

    $('.project-area .button-group #btn1').trigger('click');

    $('.project-area .grid .test-popup-link').magnificPopup({
        type: 'image',
        gallery: { enabled: true }
    });


    // Owl-carousel

    $('.site-main .about-area .owl-carousel').owlCarousel({
        loop: true,
        autoplay: true,
        dots: true,
        responsive: {
            0: {
                items: 1
            },
            560: {
                items: 2
            }
        }
    })

    // sticky navigation menu

    let nav_offset_top = $('.header_area').height() + 50;

    function navbarFixed() {
        if ($('.header_area').length) {
            $(window).scroll(function () {
                let scroll = $(window).scrollTop();
                if (scroll >= nav_offset_top) {
                    $('.header_area .main-menu').addClass('navbar_fixed');
                } else {
                    $('.header_area .main-menu').removeClass('navbar_fixed');
                }
            })
        }
    }

    navbarFixed();

    // Sroll cho website

    $('.nav-link').click(function(){
      var targetElement = $(this).attr('href');
      $('html, body').animate({ scrollTop: $(targetElement).offset().top}, 1000);
    });

});

// Action for button CV view, CV download

document.getElementById("cv__view").addEventListener("click", cv);
document.getElementById("cv__download").addEventListener("click", cv);
function cv() {
    window.open("https://duongnamtruong.com/Frontend_Web_Developer_DuongNamTruong_CV.pdf");
}

// Action for button hire me

document.getElementById("hireme").addEventListener("click", hire);
function hire() {
window.open("https://m.me/truongduongg99");
}

