$(document).ready(function () {
    const slider = $(".products");
    slider.slick({
        speed: 233,
        autoplay: true,
        autoplaySpeed: 1600,
        // slidesToShow: 1,
        infinite: false,
        // slidesToShow: 2,
        // autoSlidesToShow: true,
        // centerMode: true,
        // variableWidth: true,
        // dots: true,
        // arrows: false,
        // draggable: true,
        // appendArrows: $(".slick-dots"),

        // prevArrow: $(".prev"),
        // nextArrow: $(".next"),
        // zIndex: 1,
        focusOnSelect: true,
        slidesToShow: 3.6, // default desktop values
        slidesToScroll: 3,
        // rows: 1,
        centerMode: true,
        // centerPadding: "0px",
        // dots: true,
        arrows: true,
        accessibility: true,
        // appendDots: $(".slide-m-dots"),
        prevArrow: $(".slide-m-prev"),
        nextArrow: $(".slide-m-next"),
        swipeToSlide: true,
        responsive: [
            {
                breakpoint: 1800,
                settings: {
                    slidesToShow: 2.6,
                    slidesToScroll: 2,
                },
            },
            {
                breakpoint: 1300,
                settings: {
                    slidesToShow: 1.9,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 1000,
                settings: {
                    slidesToShow: 1.6,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 900,
                settings: {
                    slidesToShow: 3.2,
                    slidesToScroll: 2,
                },
            },
            {
                breakpoint: 850,
                settings: {
                    slidesToShow: 2.6,
                    slidesToScroll: 2,
                },
            },
            {
                breakpoint: 700,
                settings: {
                    slidesToShow: 1.8,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 500,
                settings: {
                    slidesToShow: 1.5,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 440,
                settings: {
                    slidesToShow: 1.3,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 400,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerMode: true,
                    centerPadding: "0px",
                    // centerMode: true,
                },
            },
        ],
    });
    const noOfotalProducts = $(".product").length;
    slider.on("wheel", function (e) {
        // e.preventDefault();
        // console.log($(".slick-current").attr("data-slick-index"));
        if (e.originalEvent.deltaY > 0) {
            if (
                $(".slick-current").attr("data-slick-index") !=
                noOfotalProducts - 1
            ) {
                e.preventDefault();
                $(this).slick("slickNext");
            }
        } else {
            if ($(".slick-current").attr("data-slick-index") != 0) {
                e.preventDefault();
                $(this).slick("slickPrev");
            }
        }
    });
    // var hoverOrClickShowcase = function () {
    //     window.scrollTo({
    //         top: $(this)[0].offsetTop - $(".navbar").height(),
    //         left: 0,
    //         behavior: "smooth",
    //     });
    //     setTimeout(function () {
    //         if (
    //             window.scrollY ==
    //             $(this)[0].offsetTop - $(".navbar").height()
    //         ) {
    //             $(".slick-current").focus();
    //         }
    //     }, 2600);
    //     // window.scrollTo(0, $(this)[0].offsetTop - $(".navbar").height());
    //     // $(".slick-current").focus();
    //     // slider.slick("slickPause");
    // };
    // var hoverOrClickRightPost = function () {
    //     window.scrollTo({
    //         top: $(this)[0].offsetTop - $(".navbar").height(),
    //         left: 0,
    //         behavior: "smooth",
    //     });
    // };
    // $(".showcase-div")
    //     .click(hoverOrClickShowcase)
    //     .hover(hoverOrClickShowcase, function () {
    //         $(".slide-m-next").focus();
    //         // slider.slick("slickPause");
    //     });
    // $(".posts-div").hover(hoverOrClickRightPost).click(hoverOrClickRightPost);

    // pxlist = [".center-div", ".right-div", ".left-div"];
    pxlist = [".left-div"];
    for (i = 0; i < pxlist.length; ++i) {
        $(pxlist[i]).paroller();
    }

    $(".trashmate-div").css("top", $(".navbar").height());
});

var a;
var animateButton = function (e) {
    e.preventDefault;
    //reset animation
    e.target.classList.remove("animate");
    e.target.classList.add("animate");
    setTimeout(function () {
        e.target.classList.remove("animate");
    }, 700);
};

var bubblyButtons = document.getElementsByClassName("bubbly-button");

for (var i = 0; i < bubblyButtons.length; i++) {
    bubblyButtons[i].addEventListener("click", animateButton, false);
}
