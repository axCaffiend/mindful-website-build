$(".card-carousel__items").slick({
    dots: true,
    infinite: true,
    arrows: true,
    prevArrow: $(".card-carousel__prev"),
    nextArrow: $(".card-carousel__next"),
    appendDots: $(".card-carousel__buttons"),

    // RESPONSIVE?? 
    
    // slidesToShow: 4,
    // slidesToScroll: 4,
    // responsive: [
    //     {
    //         breakpoint: 480,
    //         settings: {
    //             slidesToShow: 1,
    //             slidesToScroll: 1
    //         }
    //     },
    //     {
    //         breakpoint: 768,
    //         settings: {
    //             slidesToShow: 2,
    //             slidesToScroll: 2
    //         }
    //     }
    // ]
}
);