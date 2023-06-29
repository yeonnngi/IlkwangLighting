/* -------------- lnb_menu -------------- */
document.addEventListener('DOMContentLoaded', () => {
  const ourStory = document.querySelector('.tabMenu_label .lnb_detail .our_story')
  const support = document.querySelector('.tabMenu_label .lnb_detail .support')
  const storyDetail = document.querySelector('.tabMenu_label .lnb_detail .story_detail_bg')
  const supportDetail = document.querySelector('.tabMenu_label .lnb_detail .support_detail_bg')

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
  const shop = $('.tabMenu_label .lnb_main .shop')
  const shopDetail = $('.tabMenu_label .lnb_main .shop_detail_bg')

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

/* -------------- product_info -------------- */
document.addEventListener('DOMContentLoaded', () => {
  const selectColor = document.querySelectorAll('.product_info .color div');

  selectColor.forEach((item, i) => {
    item.addEventListener('click', function () {
      selectColor.forEach((item) => {
        item.classList.remove('on');
        selectColor[i].classList.add('on');
      })
    })
  });


  const butter = document.querySelector('.color .butter');
  const pink = document.querySelector('.color .pink');
  const white = document.querySelector('.color .white');
  const txt = document.querySelector('.select_option h5');
  const slideImg = document.querySelector('.swiper-slide-active img');

  butter.addEventListener('click', () => {
    txt.innerHTML = '[필수] Butter';
    slideImg.src = './images/detail_AllButter_gray.jpg'

  });

  pink.addEventListener('click', () => {
    txt.innerHTML = '[필수] Peach & Deep Green';
    slideImg.src = './images/detail_PeachDeepGreen_gray.jpg'
  });

  white.addEventListener('click', () => {
    txt.innerHTML = '[필수] White & Ice Blue';
    slideImg.src = './images/detail_WhiteIceBlue_gray.jpg'
  });


  /* -------------- card_popup -------------- */
  const mark = document.querySelector('.card_benefit .more_mark');
  const cardPopup = document.querySelector('.card_popup');

  mark.addEventListener('mouseover', () => {
    cardPopup.style.display = 'block';
  });

  mark.addEventListener('mouseout', () => {
    cardPopup.style.display = 'none';
  });


  /* -------------- optionColor -------------- */
  const optionText = document.querySelectorAll('.option_txt .optionText');
  const optionImg = document.querySelectorAll('.option_switch .option_img');
  const optionColor = document.querySelectorAll('.option_color .color_chip');

  optionColor.forEach((item, i) => {
    item.addEventListener('click', function () {
      optionColor.forEach((item) => {
        item.classList.remove('on');
        optionColor[i].classList.add('on');
      })
      optionImg.forEach((item) => {
        item.classList.remove('on');
        optionImg[i].classList.add('on');
      })
      optionText.forEach((item) => {
        item.classList.remove('on');
        optionText[i].classList.add('on');
      })
    })
  });


  /* -------------- detailImg -------------- */
  const moreBtn = document.querySelector('.more_btn');
  let isOpen = false;

  moreBtn.addEventListener('click', function () {
    const detailBox = document.querySelector('.detail');

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


  /* -------------- side_notice -------------- */
  const refundTitle = document.getElementById('refundTitle');
  const refundHide = document.getElementById('refundHide');
  const refundOpen = document.getElementById('refundOpen');
  const refundClose = document.getElementById('refundClose');
  const shipmentTitle = document.getElementById('shipmentTitle');
  const shipmentHide = document.getElementById('shipmentHide');
  const shipmentOpen = document.getElementById('shipmentOpen');
  const shipmentClose = document.getElementById('shipmentClose');
  const csTitle = document.getElementById('csTitle');
  const csHide = document.getElementById('csHide');
  const csOpen = document.getElementById('csOpen');
  const csClose = document.getElementById('csClose');

  refundTitle.addEventListener('click', () => {
    refundHide.classList.toggle('show');
    refundOpen.classList.toggle('show');
    refundClose.classList.toggle('show');
  });

  shipmentTitle.addEventListener('click', () => {
    shipmentHide.classList.toggle('show');
    shipmentOpen.classList.toggle('show');
    shipmentClose.classList.toggle('show');
  });

  csTitle.addEventListener('click', () => {
    csHide.classList.toggle('show');
    csOpen.classList.toggle('show');
    csClose.classList.toggle('show');
  });


  /* -------------- allPrice -------------- */
  const countEle = document.getElementById("count");
  let countVal = countEle.value;
  const result = document.getElementById("result");
  let resultVal = result.value;
  const sellPrice = document.getElementById("sellPrice");
  let sellPriceVal = sellPrice.value;
  const finalCount = document.getElementById("finalCount");
  const increase = document.getElementById("plus");
  const decrease = document.getElementById("minus");

  increase.onclick = plus
  decrease.onclick = minus

  function plus() {
    countVal++;
    resultVal = countVal * sellPriceVal;
    countEle.value = countVal;
    finalCount.value = countVal;
    result.value = resultVal;
  };

  function minus() {
    if (countVal > 1) {
      countVal--;
      resultVal = countVal * sellPriceVal;
      countEle.value = countVal;
      finalCount.value = countVal;
      result.value = resultVal;
    } else {
      countVal = 1;
    }
    console.log(countVal, resultVal, sellPriceVal);
  };


  /* -------------- questionBox -------------- */
  const guestion = document.querySelector('.list_box ul li .short')
  const answer = document.querySelector('.list_box ul li .answer_area')
  const closeAnswer = document.querySelector('.answer_area .answer .closeAnswer')

  guestion.addEventListener('click', () => {
    answer.style.display = 'block';
  });

  closeAnswer.addEventListener('click', () => {
    answer.style.display = 'none';
  });


  /* -------------- scroll_event -------------- */
  const topBtn = document.querySelector('.top_btn')
  const header = document.getElementById('header')
  const tabMenu = document.querySelector('.tabMenu_wrap')
  const tabMenuHeader = document.querySelector('.tabMenu_header')
  const detailArea = document.getElementById('detail_content')

  detailArea.addEventListener('scroll', () => {
    if (detailArea.scrollTop < 400) {
      gsap.to(topBtn, 0.3, {
        opacity: 0
      })
    } else {
      gsap.to(topBtn, 0.3, {
        opacity: 1
      })
    }
  }); //topBtn_event

  topBtn.addEventListener('click', () => {
    gsap.to(detailArea, 0.5, {
      scrollTo: 0
    });
  });

  detailArea.addEventListener('scroll', () => {
    if (detailArea.scrollTop >= 900) {
      header.style.opacity = "0"
      tabMenu.style.opacity = "0"
      tabMenuHeader.style.opacity = "1"
    } else {
      header.style.opacity = "1"
      tabMenu.style.opacity = "1"
      tabMenuHeader.style.opacity = "0"
    }
  }); //tabMenu_event


  const tabDetailInfo = document.getElementById('detailInfo')
  const tabNotice = document.getElementById('notice')
  const tabReview = document.getElementById('review')
  const tabQuestion = document.getElementById('question')

  const headDetailInfo = document.getElementById('headDetailInfo')
  const headNotice = document.getElementById('headNotice')
  const headReview = document.getElementById('headReview')
  const headQuestion = document.getElementById('headQuestion')

  const detailBox = document.getElementById('detailBox')
  const noticeBox = document.getElementById('noticeBox')
  const reviewBox = document.getElementById('reviewBox')
  const questionBox = document.getElementById('questionBox')


  /* -------------- tabMenu -------------- */
  tabDetailInfo.addEventListener('click', () => {
    gsap.to(detailArea, 0.5, {
      scrollTo: detailBox
    });
  });

  tabNotice.addEventListener('click', () => {
    gsap.to(detailArea, 0.5, {
      scrollTo: noticeBox
    });
  });

  tabReview.addEventListener('click', () => {
    gsap.to(detailArea, 0.5, {
      scrollTo: reviewBox
    });
  });

  tabQuestion.addEventListener('click', () => {
    gsap.to(detailArea, 0.5, {
      scrollTo: questionBox
    });
  });


  /* -------------- tabMenu_header -------------- */
  headDetailInfo.addEventListener('click', () => {
    gsap.to(detailArea, 0.5, {
      scrollTo: detailBox
    });
  });

  headNotice.addEventListener('click', () => {
    gsap.to(detailArea, 0.5, {
      scrollTo: noticeBox
    });
  });

  headReview.addEventListener('click', () => {
    gsap.to(detailArea, 0.5, {
      scrollTo: reviewBox
    });
  });

  headQuestion.addEventListener('click', () => {
    gsap.to(detailArea, 0.5, {
      scrollTo: questionBox
    });
  });


  const tabLi = document.querySelectorAll('.tabMenu .menu_label li');
  const headTabLi = document.querySelectorAll('.tabMenu .headMenu_label li');

  tabLi.forEach((item, i) => {
    item.addEventListener('click', function () {
      headTabLi.forEach((item) => {
        item.classList.remove('on');
        headTabLi[i].classList.add('on');
      });

      tabLi.forEach((item) => {
        item.classList.remove('on');
        tabLi[i].classList.add('on');
      });
    });
  });

  headTabLi.forEach((item, i) => {
    item.addEventListener('click', function () {
      headTabLi.forEach((item) => {
        item.classList.remove('on');
        headTabLi[i].classList.add('on');
      });
    });
  });


  /* -------------- review_save -------------- */
  const saveBtn = document.getElementById('saveBtn');

  saveBtn.addEventListener('click', function () {
    const revName = document.getElementById('revName');
    const revTitle = document.getElementById('revTitle');
    const revCon = document.getElementById('revCon');
    const SNOWMAN22 = document.getElementById('SNOWMAN22');
    const inputImage = document.getElementById('inputImage');
    let file = inputImage.files[0];

    let date = new Date();
    let year = date.getFullYear();
    let month = date.getMonth() + 1;
    let day = date.getDate().toString().padStart(2, '0');
    let fullDateTime = year + '-' + month + '-' + day;

    const reviewList = document.getElementById('reviewList');
 
    const reviewLi = document.createElement('li');

    const userInfo = document.createElement('div')
    userInfo.setAttribute('class', 'user_info')

    const userIdP = document.createElement('p')
    const userIdPTxt = document.createTextNode(revName.value)
    userIdP.setAttribute('class', 'userId')
    userIdP.appendChild(userIdPTxt)
    userInfo.appendChild(userIdP)
    const revDateP = document.createElement('p')
    const revDatePTxt = document.createTextNode(fullDateTime)
    revDateP.setAttribute('class', 'revDate')
    revDateP.appendChild(revDatePTxt)
    userInfo.appendChild(revDateP)

    const purchaseOption = document.createElement('div')
    purchaseOption.setAttribute('class', 'purchaseOption')

    const revOptionP = document.createElement('p')
    const revOptionPTxt = document.createTextNode("옵션 :")
    revOptionP.setAttribute('class', 'revOption')
    revOptionP.appendChild(revOptionPTxt)
    purchaseOption.appendChild(revOptionP)

    const revOptionValP = document.createElement('p')
    const revOptionValTxt = document.createTextNode(SNOWMAN22.value)
    revOptionValP.setAttribute('class', 'revOptionVal')
    revOptionValP.appendChild(revOptionValTxt)
    purchaseOption.appendChild(revOptionValP)

    const reviewContent = document.createElement('div')
    reviewContent.setAttribute('class', 'reviewContent')

    const reviewTxtP = document.createElement('p')
    const reviewTxtTxt = document.createTextNode(revCon.value)
    reviewTxtP.setAttribute('class', 'reviewTxt')
    reviewTxtP.appendChild(reviewTxtTxt)
    reviewContent.appendChild(reviewTxtP)

    const contentImg = document.createElement('div')
    contentImg.setAttribute('class', 'contentImg')

    const reviewImg = document.createElement('img')
    reviewImg.setAttribute('src', URL.createObjectURL(file))
    contentImg.appendChild(reviewImg)
    reviewContent.appendChild(contentImg)

    reviewLi.appendChild(userInfo)
    reviewLi.appendChild(purchaseOption)
    reviewLi.appendChild(reviewContent)
    reviewList.prepend(reviewLi);

    revName.value = "";
    revTitle.value = "";
    revCon.value = "";
    SNOWMAN22.value = "상품옵션선택";
    inputImage.value = "";
  });


  /* -------------- QnA -------------- */

  const btnAddBtn = document.getElementById('btnAddBtn');

  btnAddBtn.addEventListener('click', function () {
    let date = new Date();
    let year = date.getFullYear();
    let month = date.getMonth() + 1;
    let day = date.getDate().toString().padStart(2, '0');
    let hour = date.getHours().toString().padStart(2, '0');;
    let minute = date.getMinutes().toString().padStart(2, '0');
    let fullDateTime = year + '-' + month + '-' + day + ' ' + hour + ':' + minute;

    const userName = document.getElementById('userName');
    const queTitle = document.getElementById('queTitle');
    const queContent = document.getElementById('queContent');

    const qnaList = document.getElementById('qnaList');
    const queLi = document.createElement('li');
    queLi.setAttribute('class', 'queLi')

    const qnaShort = document.createElement('div')
    qnaShort.setAttribute('class', 'short')

    const que = document.createElement('div')
    que.setAttribute('class', 'que')

    const qnaLongP = document.createElement('p')
    const qnaLongTxt = document.createTextNode(queContent.value)
    qnaLongP.setAttribute('class', 'qnaLong')
    qnaLongP.appendChild(qnaLongTxt)
    que.appendChild(qnaLongP)

    const queUser = document.createElement('div')
    queUser.setAttribute('class', 'queUser')

    const queUserP = document.createElement('p')
    const queUserPTxt = document.createTextNode(userName.value)
    queUserP.appendChild(queUserPTxt)
    queUser.appendChild(queUserP)

    const queDate = document.createElement('div')
    queDate.setAttribute('class', 'queDate')

    const queDateP = document.createElement('p')
    const queDatePTxt = document.createTextNode(fullDateTime)
    queDateP.appendChild(queDatePTxt)
    queDate.appendChild(queDateP)

    const queStatus = document.createElement('div')
    queStatus.setAttribute('class', 'queStatus')

    const queStatusP = document.createElement('p')
    const queStatusPTxt = document.createTextNode("no")
    queStatusP.appendChild(queStatusPTxt)
    queStatus.appendChild(queStatusP)

    qnaShort.appendChild(que)
    qnaShort.appendChild(queUser)
    qnaShort.appendChild(queDate)
    qnaShort.appendChild(queStatus)
    queLi.appendChild(qnaShort)
    qnaList.prepend(queLi);

    userName.value = null;
    queTitle.value = null;
    queContent.value = null;
  });


  /* -------------- shopping_history -------------- */
  const historyBtn = document.querySelector('.history_btn')
  const historyPopup = document.querySelector('.history_popup')
  const hideBtn = document.querySelector('.history_hide')
  const historyList = document.querySelector('.shopping_history .history_list')
  const deleteBtn = document.querySelector('.list_delete')
  const deleteAll = document.querySelector('.deleteAll')

  historyBtn.addEventListener('click', () => {
    historyPopup.style.display = 'block';
  });

  hideBtn.addEventListener('click', () => {
    historyPopup.style.display = 'none';
  });

  historyList.addEventListener('mouseover', () => {
    deleteBtn.style.display = 'block';
  });

  historyList.addEventListener('mouseout', () => {
    deleteBtn.style.display = 'none';
  });

  deleteBtn.addEventListener('mouseover', () => {
    deleteBtn.style.color = '#191919';
  });

  deleteBtn.addEventListener('mouseout', () => {
    deleteBtn.style.color = '#ccc';
  });

  deleteBtn.addEventListener('click', () => {
    historyList.style.display = 'none';
  });

  deleteAll.addEventListener('click', () => {
    historyList.style.display = 'none';
  });
});


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
}; //right 

$('.prev_btn').click(function () {
  left()
}); //prev_btn_click_events

$('.next_btn').click(function () {
  right()
}); //next_btn_click_event