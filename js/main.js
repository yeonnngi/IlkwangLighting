/* -------------- issue_contents -------------- */
/* 
const interior = document.querySelector('.space_box .img_left .interior')
const interiorLi = document.querySelector('.space_box .img_left .interior li')
const product = document.querySelector('.space_box .img_right .product')
const beddingLi = document.querySelector('.space_box .img_left .bedding li')
const beddingRi = document.querySelector('.space_box .img_right .bedding li')
const livingLi = document.querySelector('.space_box .img_left .living li')
const livingRi = document.querySelector('.space_box .img_right .living li')
const diningLi = document.querySelector('.space_box .img_left .dining li')
const diningRi = document.querySelector('.space_box .img_right .dining li')
const kitchenLi = document.querySelector('.space_box .img_left .kitchen li')
const kitchenRi = document.querySelector('.space_box .img_right .kitchen li')
const deskLi = document.querySelector('.space_box .img_left .desk li')
const deskRi = document.querySelector('.space_box .img_right .desk li')
 */



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

const tabLi = $('.space_wrap .space_label li')
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

/* -------------- top_btn -------------- */

$('.top_btn').click(function (e) {
  e.preventDefault()
  $('html, body').stop().animate({
    scrollTop: 0
  }, 500)
}); //btn_top_click_event



/* -------------- shopping_history -------------- */
const historyPopup = $('.history_popup')
const historyBtn = $('.history_btn')
const hideBtn = $('.history_hide')
const shoppingHistory = $('.shopping_history')
const historyList = $('.shopping_history .history_list')
const deleteBtn = $('.list_delete')
const deleteAll = $('.deleteAll')

historyBtn.click(function () {
  historyPopup.stop().animate({
    right: 0
  }, 100);
}); //historyBtn_click_event

hideBtn.click(function () {
  historyPopup.stop().animate({
    right: -480
  }, 100);
}); //historyBtn_click_event

historyList.mouseover(function () {
  deleteBtn.css('display', 'block');
}); //historyBtn_click_event

historyList.mouseout(function () {
  deleteBtn.css('display', 'none');
}); //historyBtn_click_event

deleteBtn.mouseover(function () {
  deleteBtn.css('color', '#191919');
}); //historyBtn_click_event

deleteBtn.mouseout(function () {
  deleteBtn.css('color', '#ccc');
}); //historyBtn_click_event

deleteBtn.click(function () {
  historyList.css('display', 'none');
}); //historyBtn_click_event

deleteAll.click(function () {
  historyList.css('display', 'none');
}); //historyBtn_click_event