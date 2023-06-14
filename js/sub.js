/* -------------- productList -------------- */
import shoppingList from "./data.js";
//export로 내보낸 변수를 가져와 쓰는것

const productList = document.querySelector('.product_list')

for (let i = 0; i < shoppingList.length; i++) {
  //for (let i = 0; i < 16; i++) {

  const productLi = document.createElement('li')
  //productLi.setAttribute('class', 'productLi')

  const productImgDiv = document.createElement('div')
  productImgDiv.setAttribute('class', 'product_img')
  productLi.appendChild(productImgDiv)

  const productImgA = document.createElement('a')
  productImgA.setAttribute('href', './detail.html')
  productImgDiv.appendChild(productImgA)

  const productImg = document.createElement('img')
  productImg.setAttribute('src', shoppingList[i].src)
  productImgA.appendChild(productImg)

  const productTxtDiv = document.createElement('div')
  productTxtDiv.setAttribute('class', 'product_txt kor')
  productLi.appendChild(productTxtDiv)

  const productName = document.createElement('p')
  const productNameTxt = document.createTextNode(shoppingList[i].name)
  productName.appendChild(productNameTxt)
  productName.setAttribute('class', 'title')
  productTxtDiv.appendChild(productName)

  const productPrice = document.createElement('span')
  const productPriceText = document.createTextNode(shoppingList[i].price)
  productPrice.appendChild(productPriceText)
  productPrice.setAttribute('class', 'price')
  productTxtDiv.appendChild(productPrice)

  productList.appendChild(productLi)
}



/* -------------- pagination -------------- */
$(document).on('click', '.paging .pages>span', function () {
  if (!$(this).hasClass('active')) {
    $(this).parent().find('span.active').removeClass('active');
    $(this).addClass('active');
  }
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