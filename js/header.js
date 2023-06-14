/* -------------- lnb_menu -------------- */
document.addEventListener('DOMContentLoaded', () => {
  const ourStory = document.querySelector('.lnb_main .our_story')
  const support = document.querySelector('.lnb_main .support')
  const storyDetail = document.querySelector('.lnb_detail .story_detail_bg')
  const supportDetail = document.querySelector('.lnb_detail .support_detail_bg')

  ourStory.addEventListener('mouseover', function () {
    storyDetail.style.display = 'block';
  })

  ourStory.addEventListener('mouseout', function () {
    storyDetail.style.display = 'none';
  })

  storyDetail.addEventListener('mouseover', function () {
    storyDetail.style.display = 'block';
  })

  storyDetail.addEventListener('mouseout', function () {
    storyDetail.style.display = 'none';
  })


  support.addEventListener('mouseover', function () {
    supportDetail.style.display = 'block';
  })

  support.addEventListener('mouseout', function () {
    supportDetail.style.display = 'none';
  })

  supportDetail.addEventListener('mouseover', function () {
    supportDetail.style.display = 'block';
  })

  supportDetail.addEventListener('mouseout', function () {
    supportDetail.style.display = 'none';
  })
});


/* -------------- lnbShop_event --------------*/
$(function () {
  const shop = $('.lnb_main .shop')
  const shopDetail = $('.lnb_detail .shop_detail_bg')

  shop.mouseover(function () {
    shopDetail.stop().animate({
      left: 0
    }, 300);
  }); //lnbShop_mouseover_event

  shop.mouseout(function () {
    shopDetail.stop().animate({
      left: -869
    }, 300);
  }); //lnbShop_mouseout_event


  shopDetail.mouseover(function () {
    shopDetail.stop().animate({
      left: 0
    }, 300);
  }); //lnbShopDetail_mouseover_event

  shopDetail.mouseout(function () {
    shopDetail.stop().animate({
      left: -869
    }, 300);
  }); //lnbShopDetail_mouseout_event
});