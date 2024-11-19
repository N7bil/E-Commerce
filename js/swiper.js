// swiper slide for side-bar
var swiper = new Swiper(".slider-swp", {
    pagination: {
        el: ".swiper-pagination",
        dynamucBullests: true,
        clickable: true
    },
    spaceBetween:30,
    autoplay:{
        delay:2500,
    },
    loop:true,
    });

    // swiper slide for sale-slide
var swiper = new Swiper(".sale-sec", {
 
    slidesPerView:5,
    spaceBetween:30,
    scale: 1.1,
    autoplay:{
        delay:2500,
    },
    navigation:{
        nextEl:".swiper-button-next",
        prevEl:".swiper-button-prev"
    },
    loop:true,
    breakpoints:{
        1600:{
            slidesPerView:5,
        },
        1200:{
            slidesPerView:4,
        }, 
        700:{
            slidesPerView:3,
            spaceBetween:15,
        },
        0:{
            slidesPerView:2,
            spaceBetween:10,
        },
    }
    });

        // swiper slide for slide-product
var swiper = new Swiper(".product-swip", {
    slidesPerView:4,
    spaceBetween:30,
    scale: 1.1,
    autoplay:{
        delay:2500,
        reverseDirection: true,

    },
    navigation:{
        nextEl:".swiper-button-next",
        prevEl:".swiper-button-prev"
    },
    loop:true,
    breakpoints:{
        1500:{
            slidesPerView:4,
        },
        1200:{
            slidesPerView:3,
        },
        900:{
            slidesPerView:2,
        }, 
        700:{
            slidesPerView:3,
            spaceBetween:15,
        },
        0:{
            slidesPerView:2,
            spaceBetween:10,
        },
    }
    });


      // swiper slide for slide-product
var swiper = new Swiper(".product_swip", {
    slidesPerView:4,
    spaceBetween:30,
    scale: 1.1,
    autoplay:{
        delay:2500,
    },
    navigation:{
        nextEl:".swiper-button-next",
        prevEl:".swiper-button-prev"
    },
    loop:true,
    breakpoints:{
        1500:{
            slidesPerView:4,
        },
        1200:{
            slidesPerView:3,
        },
        900:{
            slidesPerView:2,
        }, 
        700:{
            slidesPerView:3,
            spaceBetween:15,
        },
        0:{
            slidesPerView:2,
            spaceBetween:10,
        },
    }
    });