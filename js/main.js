/* -------------- issue_contents -------------- */
document.addEventListener('DOMContentLoaded', () => {

  const tabLi = document.querySelectorAll('.space_wrap .space_label li');
  const product = document.querySelectorAll('.space_box .img_right .product');
  const pBeddingLi = document.querySelectorAll('.space_box .img_right .bedding li');
  const pLivingLi = document.querySelectorAll('.space_box .img_right .living li');
  const pDiningLi = document.querySelectorAll('.space_box .img_right .dining li');
  const pKitchenLi = document.querySelectorAll('.space_box .img_right .kitchen li');
  const pDeskLi = document.querySelectorAll('.space_box .img_right .desk li');
  const interior = document.querySelectorAll('.space_box .img_left .interior');
  const interiorLi = document.querySelectorAll('.space_box .img_left .interior li');
  const iBeddingLi = document.querySelectorAll('.space_box .img_left .bedding li');
  const iLivingLi = document.querySelectorAll('.space_box .img_left .living li');
  const iDiningLi = document.querySelectorAll('.space_box .img_left .dining li');
  const iKitchenLi = document.querySelectorAll('.space_box .img_left .kitchen li');
  const iDeskLi = document.querySelectorAll('.space_box .img_left .desk li');


  tabLi.forEach((tab, i) => {
    tab.addEventListener('click', function () {
      product.forEach((item) => {
        item.classList.remove('right_on');
        product[i].classList.add('right_on');
      })

      interior.forEach((item) => {
        item.classList.remove('ul_on');
        interior[i].classList.add('ul_on');
      })

      tabLi.forEach((item) => {
        item.classList.remove('on');
        tabLi[i].classList.add('on')
      })
    });
  });

  pBeddingLi.forEach((item, i) => {
    item.addEventListener('mouseover', function () {
      iBeddingLi.forEach((item) => {
        item.classList.remove('li_on');
        iBeddingLi[i].classList.add('li_on');
      })
    });
  });

  pLivingLi.forEach((item, i) => {
    item.addEventListener('mouseover', function () {
      iLivingLi.forEach((item) => {
        item.classList.remove('li_on');
        iLivingLi[i].classList.add('li_on');
      })
    });
  });

  pDiningLi.forEach((item, i) => {
    item.addEventListener('mouseover', function () {
      iDiningLi.forEach((item) => {
        item.classList.remove('li_on');
        iDiningLi[i].classList.add('li_on');
      })
    });
  });

  pKitchenLi.forEach((item, i) => {
    item.addEventListener('mouseover', function () {
      iKitchenLi.forEach((item) => {
        item.classList.remove('li_on');
        iKitchenLi[i].classList.add('li_on');
      })
    });
  });

  pDeskLi.forEach((item, i) => {
    item.addEventListener('mouseover', function () {
      iDeskLi.forEach((item) => {
        item.classList.remove('li_on');
        iDeskLi[i].classList.add('li_on');
      })
    });
  });



  /* -------------- top_btn -------------- */
  const topBtn = document.querySelector('.top_btn')

  window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
      gsap.to(topBtn, 0.3, {
        opacity: 1
      })
    } else {
      gsap.to(topBtn, 0.3, {
        opacity: 0
      })
    }
  }); //topBtn_event


  topBtn.addEventListener('click', () => {
    gsap.to(window, 0.5, {
      scrollTo: 0
    });
  });



  /* -------------- shopping_history -------------- */
  const historyBtn = document.querySelector('.history_btn')
  const historyPopup = document.querySelector('.history_popup')
  const hideBtn = document.querySelector('.history_hide')
  const historyList = document.querySelector('.shopping_history .history_list')
  const deleteBtn = document.querySelector('.list_delete')
  const deleteAll = document.querySelector('.deleteAll')

  window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
      gsap.to(historyBtn, 0.3, {
        opacity: 1
      })
    } else {
      gsap.to(historyBtn, 0.3, {
        opacity: 0
      })
    }
  }); //historyBtn_event

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