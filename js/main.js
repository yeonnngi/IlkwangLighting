document.addEventListener('DOMContentLoaded', () => {
  /* -------------- lnb_menu -------------- */
  const shop = $('.lnb_main .shop')
  const ourStory = $('.lnb_main .our_story')
  const support = $('.lnb_main .support')
  const shopDetail = $('.lnb_detail .shop_detail_bg')
  const storyDetail = $('.lnb_detail .story_detail_bg')
  const supportDetail = $('.lnb_detail .support_detail_bg')

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


  ourStory.mouseover(function () {
    storyDetail.css("display", "block");
  }); //lnbOurStory_mouseover_event

  ourStory.mouseout(function () {
    storyDetail.css("display", "none")
  }); //lnbOurStory_mouseout_event

  storyDetail.mouseover(function () {
    storyDetail.css("display", "block");
  }); //lnbstoryDetail_mouseover_event

  storyDetail.mouseout(function () {
    storyDetail.css("display", "none")
  }); //lnbstoryDetail_mouseout_event


  support.mouseover(function () {
    supportDetail.css("display", "block");
  }); //lnbSupport\_mouseover_event

  support.mouseout(function () {
    supportDetail.css("display", "none")
  }); //lnbSupport_mouseout_event

  supportDetail.mouseover(function () {
    supportDetail.css("display", "block");
  }); //lnbSupportDetail_mouseover_event

  supportDetail.mouseout(function () {
    supportDetail.css("display", "none")
  }); //lnbSupportDetail_mouseout_event
  //lnb_menu



  /* -------------- issue_contents -------------- */
  const tabLi = $('.space_wrap .space_label li')
  const interior = $('.space_box .img_left .interior')
  const interiorLi = $('.space_box .img_left .interior li')
  const product = $('.space_box .img_right .product')
  const beddingLi = $('.space_box .img_left .bedding li')
  const beddingRi = $('.space_box .img_right .bedding li')
  const livingLi = $('.space_box .img_left .living li')
  const livingRi = $('.space_box .img_right .living li')
  const diningLi = $('.space_box .img_left .dining li')
  const diningRi = $('.space_box .img_right .dining li')
  const kitchenLi = $('.space_box .img_left .kitchen li')
  const kitchenRi = $('.space_box .img_right .kitchen li')
  const deskLi = $('.space_box .img_left .desk li')
  const deskRi = $('.space_box .img_right .desk li')
  let index = 0

  tabLi.click(function () {
    tabLi.removeClass('on')
    $(this).addClass('on')

    index = $(this).index()

    interior.removeClass('ul_on');
    interior.eq(index).addClass('ul_on');
    product.removeClass('right_on');
    product.eq(index).addClass('right_on');
  });

  beddingRi.mouseover(function () {
    index = $(this).index()

    beddingLi.removeClass('li_on')
    beddingLi.eq(index).addClass('li_on')
  });

  livingRi.mouseover(function () {
    index = $(this).index()

    livingLi.removeClass('li_on')
    livingLi.eq(index).addClass('li_on')
  });

  diningRi.mouseover(function () {
    index = $(this).index()

    diningLi.removeClass('li_on')
    diningLi.eq(index).addClass('li_on')
  });

  kitchenRi.mouseover(function () {
    index = $(this).index()

    kitchenLi.removeClass('li_on')
    kitchenLi.eq(index).addClass('li_on')
  });

  deskRi.mouseover(function () {
    index = $(this).index()

    deskLi.removeClass('li_on')
    deskLi.eq(index).addClass('li_on')
  });
  //issue_contents
});



/* -------------- business -------------- */
$('#busiOpen').on('click', function () {
  $('.business_txt .business_info').slideDown(300)
  $(this).hide()
  $('#busiClose').show()
});

$('#busiClose').on('click', function () {
  $('.business_txt .business_info').slideUp(300)
  $(this).hide()
  $('#busiOpen').show()
});//business_click_event



/* -------------- top_btn -------------- */
const topBtn = document.querySelector('.top_btn')
const historyBtn = document.querySelector('.history_btn')

window.addEventListener('scroll', () => {
  if(window.scrollY > 300) {
    gsap.to(topBtn, 0.3, { 
      opacity: 1
    })
  } else { 
    gsap.to(topBtn, 0.3, {
      opacity: 0
    })
  }
}) //topBtn_event


topBtn.addEventListener('click', () => {
  gsap.to(window, 0.5, { 
    scrollTo: 0
  })
})

window.addEventListener('scroll', () => {
  if(window.scrollY > 300) {
    gsap.to(historyBtn, 0.3, { 
      opacity: 1
    })
  } else { 
    gsap.to(historyBtn, 0.3, {
      opacity: 0
    })
  }
}) //historyBtn_event

