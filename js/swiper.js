const swiper = new Swiper('.swiper_main', {
  autoplay: {
    delay: 3000,
  },
  centeredSlides: true,
  loop: true,

  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  navigation: {
    nextEl: '.swiperBtn_next',
    prevEl: '.swiperBtn_prev',
  }
}); //swiperMain


const swiperNew = new Swiper('.swiper_new', {
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  slidesPerView: 3,
  spaceBetween: 30,
  slidesOffsetBefore: 10,
  slidesOffsetAfter: 10,
  slidesPerGroup: 3,
  loop: true,

  navigation: {
    nextEl: '.newBtn_next',
    prevEl: '.newBtn_prev',
  },

  scrollbar: {
    el: '.swiper-scrollbar',
    draggable: true,
  },
}); //swiperNew


const swiperBest = new Swiper(".swiper_best", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  centeredSlidesBounds: true,
  centerInsufficientSlides: true,
  slidesPerView: "auto",

  coverflowEffect: {
    rotate: 0,
    stretch: 50,
    depth: 100,
    modifier: 1.5,

    /* 
        rotate: 2,
        stretch: 0,
        depth: 10,
        modifier: 10, */
    slideShadows: true,
  },
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  loop: true,
  navigation: {
    nextEl: '.bestBtn_next',
    prevEl: '.bestBtn_prev',
  },
});




const swiperDetail = new Swiper('.swiper_detail', {
  centeredSlides: true,
  loop: true,

  pagination: {
    el: '.detail_pagination',
    clickable: true,
  },

  navigation: {
    nextEl: '.swiper-button-prev',
    prevEl: '.swiper-button-next',
  }
}); //swiperMain


const swiperOption = new Swiper('.swiper_option', {
  centeredSlides: true,

  loop: true,

  navigation: {
    nextEl: '.swiper-button-prev',
    prevEl: '.swiper-button-next',
  }
}); //swiperMain