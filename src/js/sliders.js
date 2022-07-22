// import Swiper bundle with all modules installed
import Swiper from 'swiper/bundle';

// import styles bundle
import 'swiper/css/bundle';


const blogSwiper = new Swiper(".js-blog-swiper", {
    slidesPerView: 1,
    spaceBetween: 40,
    pagination: {
        el: ".js-blog-swiper .swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        // when window width is >= 480px
        480: {
            slidesPerView: 2,
            spaceBetween: 30
        }
    }
});
