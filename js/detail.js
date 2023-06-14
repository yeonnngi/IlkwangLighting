/* -------------- product_info -------------- */
$(function () {
  const selectColor = $('.product_info .color div');

  selectColor.click(function () {
    selectColor.removeClass('on')
    $(this).addClass('on')
  }) /* selectColor_click_event */



  /* -------------- optionColor -------------- */
  const optionText = $('.option_txt .optionText');
  const optionImg = $('.option_switch .option_img');
  const optionColor = $('.option_color .color_chip');

  let index = 0

  optionColor.click(function () {
    optionColor.removeClass('on')
    $(this).addClass('on')

    index = $(this).index()

    optionText.removeClass('on')
    optionImg.removeClass('on')
    optionText.eq(index).addClass('on')
    optionImg.eq(index).addClass('on')
  }) /* optionColor_click_event */



  /* -------------- card_popup -------------- */
  const mark = $('.card_benefit .more_mark')
  const cardPopup = $('.card_popup')

  mark.mouseover(function () {
    cardPopup.css('display', 'block');
  });

  mark.mouseout(function () {
    cardPopup.css('display', 'none');
  }); //cardPopup_hover_event



  /* -------------- side_notice -------------- */
  $('#refundOpen').on('click', function () {
    $('#refundHide').slideDown(320)
    $(this).hide()
    $('#refundClose').show()
  });

  $('#refundClose').on('click', function () {
    $('#refundHide').slideUp(320)
    $(this).hide()
    $('#refundOpen').show()
  }); //refundInfo_click_event.


  $('#shipmentOpen').on('click', function () {
    $('#shipmentHide').slideDown(320)
    $(this).hide()
    $('#shipmentClose').show()
  });

  $('#shipmentClose').on('click', function () {
    $('#shipmentHide').slideUp(320)
    $(this).hide()
    $('#shipmentOpen').show()
  }); //shipmentInfo_click_event


  $('#csOpen').on('click', function () {
    $('#csHide').slideDown(176)
    $(this).hide()
    $('#csClose').show()
  });

  $('#csClose').on('click', function () {
    $('#csHide').slideUp(176)
    $(this).hide()
    $('#csOpen').show()
  }); //csInfo_click_event



  /* -------------- tabMenu -------------- */
  const tabLi = $('.menu_label li')

  tabLi.click(function () {
    tabLi.removeClass('on')
    $(this).addClass('on')
  });


  /*   let position1 = $('#questionBox').offset().top;
    console.log(position1);
   */
  $('#detailInfo').click(function (e) {
    e.preventDefault()
    //let top = $('#detailBox').offset().top
    $('.detail_content').stop().animate({
      scrollTop: 875
    }, 500)
  }); //btn_top_click_event

  $('#notice').click(function (e) {
    e.preventDefault()
    //let top = $('#noticeBox').offset().top
    $('.detail_content').stop().animate({
      scrollTop: 2200
    }, 500)
  }); //btn_top_click_event

  $('#review').click(function (e) {
    e.preventDefault()
    //let top = $('#reviewBox').offset().top
    $('.detail_content').stop().animate({
      scrollTop: 3200
    }, 500)
  }); //btn_top_click_event

  $('#question').click(function (e) {
    e.preventDefault()
    //let top = $('#questionBox').offset().top
    $('.detail_content').stop().animate({
      scrollTop: 5300
    }, 500)
  }); //btn_top_click_event



  /* -------------- review_img -------------- */
  const eleWidth = $('.review_img .frame li').innerWidth()

  $('.frame li a').click(function () {
    review_popup.style.display = 'block';
  });

  function left() {
    $('.review_img .frame').animate({
      left: eleWidth * -1
    }, 300, function () {
      $(this).children('li:first').insertAfter($(this).children('li:last'))
      $(this).css('left', 0)
    })
  } //left()

  function right() {
    $('.review_img .frame li:last').insertBefore($('.frame li:first'))
    $('.review_img .frame').css('left', eleWidth * -1)
    $('.review_img .frame').animate({
      left: 0
    }, 300, )
  } //right 

  $('.prev_btn').click(function () {
    left()
  }) //prev_btn_click_events

  $('.next_btn').click(function () {
    right()
  }) //next_btn_click_event



  /* -------------- questionBox -------------- */
  const guestion = $('.inquire_list ul li .short')
  const answer = $('.inquire_list ul li .answer_area')
  const closeAnswer = $('.inquire_list ul li .answer_area .answer .closeAnswer')

  guestion.on('click', function () {
    answer.slideDown(240)
  });

  closeAnswer.on('click', function () {
    answer.slideUp(240)
  }); //questionBox_click_event



  /* -------------- top_btn -------------- */
  $('.top_btn').click(function (e) {
    e.preventDefault()
    $('.detail_content').stop().animate({
      scrollTop: 0
    }, 500)
  }); //btn_top_click_event



  /* -------------- shopping_history -------------- */
  const historyPopup = $('.history_popup')
  const historyBtn = $('.history_btn')
  const hideBtn = $('.history_hide')
  const historyList = $('.shopping_history .history_list')
  const deleteBtn = $('.list_delete')
  const deleteAll = $('.deleteAll')

  historyBtn.click(function () {
    historyPopup.stop().animate({
      right: 0
    }, 100);
  });

  hideBtn.click(function () {
    historyPopup.stop().animate({
      right: -480
    }, 100);
  }); //historyBtn_click_event

  historyList.mouseover(function () {
    deleteBtn.css('display', 'block');
  });

  historyList.mouseout(function () {
    deleteBtn.css('display', 'none');
  }); //historyBtn_mouseover_event

  deleteBtn.mouseover(function () {
    deleteBtn.css('color', '#191919');
  });

  deleteBtn.mouseout(function () {
    deleteBtn.css('color', '#ccc');
  }); //deleteBtn_mouseover_event

  deleteBtn.click(function () {
    historyList.css('display', 'none');
  });

  deleteAll.click(function () {
    historyList.css('display', 'none');
  }); //deleteBtn_click_event
});



/* -------------- option -------------- */
document.addEventListener('DOMContentLoaded', () => {
  const butter = document.querySelector('.color .butter');
  const pink = document.querySelector('.color .pink');
  const white = document.querySelector('.color .white');
  const txt = document.querySelector('.select_option h5');
  const slideImg = document.querySelector('.swiper-slide.swiper-slide-active img');

  butter.onclick = butterClick
  pink.onclick = pinkClick
  white.onclick = whiteClick

  function butterClick() {
    txt.innerHTML = '[필수] Butter',
      slideImg.src = './images/detail_AllButter_gray.jpg'
  }

  function pinkClick() {
    txt.innerHTML = '[필수] Peach & Deep Green',
      slideImg.src = './images/detail_PeachDeepGreen_gray.jpg'
  }

  function whiteClick() {
    txt.innerHTML = '[필수] White & Ice Blue',
      slideImg.src = './images/detail_WhiteIceBlue_gray.jpg'
  }


  /* -------------- allPrice -------------- */
  const countElement = document.getElementById("count");
  let countVal = countElement.value;
  const result = document.getElementById("result");
  let resultVal = result.value;
  const sellPrice = document.getElementById("sellPrice");
  let sellPriceVal = sellPrice.value;
  const finalCount = document.getElementById("finalCount");
  const increase = document.getElementById("add");
  const decrease = document.getElementById("minus");

  increase.onclick = add;
  decrease.onclick = minus;

  function add() {
    countVal++;
    resultVal = countVal * sellPriceVal;
    countElement.value = countVal;
    finalCount.value = countVal;
    result.value = resultVal;
  };

  function minus() {
    if (countVal > 1) {
      countVal--;
      resultVal = countVal * sellPriceVal;
      countElement.value = countVal;
      finalCount.value = countVal;
      result.value = resultVal;
      console.log(countVal, resultVal, sellPriceVal);
    } else {
      countVal = 1;
    }
  };


  /* -------------- detailImg -------------- */
  const moreBtn = document.querySelector('.more_btn');
  const detailBox = document.querySelector('.detail');
  let isOpen = false;
  //변수에 is가 붙으면 false나 true 값을 가지는 변수라는 것
  //status 움직이는 동적 컨텐츠 만들때 많이 사용

  moreBtn.addEventListener('click', function () {

    if (isOpen === false) {
      detailBox.style.display = 'block'
      moreBtn.innerHTML = '상품설명닫기 <i class="fas fa-chevron-up"></i>'
      isOpen = true
    } else {
      detailBox.style.display = 'none'
      moreBtn.innerHTML = '상품설명 더보기 <i class="fas fa-chevron-down"></i>'
      isOpen = false
    }
  }) //moreBtn_click_event

});