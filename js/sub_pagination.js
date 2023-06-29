/* -------------- productList -------------- */
import products from "./data.js";

// default
/* for (let i = 0; i < products.length; i++) {
  const productDiv = document.createElement('div')
  productDiv.setAttribute('class', 'productDiv')

  const productImgDiv = document.createElement('div')
  productImgDiv.setAttribute('class', 'product_img')
  productDiv.appendChild(productImgDiv)

  const productImgA = document.createElement('a')
  productImgA.setAttribute('href', './detail.html')
  productImgDiv.appendChild(productImgA)

  const productImg = document.createElement('img')
  productImg.setAttribute('src', products[i].src)
  productImgA.appendChild(productImg)

  const productTxtDiv = document.createElement('div')
  productTxtDiv.setAttribute('class', 'product_txt kor')
  productDiv.appendChild(productTxtDiv)

  const productName = document.createElement('p')
  const productNameTxt = document.createTextNode(products[i].name)
  productName.appendChild(productNameTxt)
  productName.setAttribute('class', 'title')
  productTxtDiv.appendChild(productName)

  const productPrice = document.createElement('span')
  const productPriceText = document.createTextNode(products[i].price + " 원")
  productPrice.appendChild(productPriceText)
  productPrice.setAttribute('class', 'price')
  productTxtDiv.appendChild(productPrice)

  productList.appendChild(productDiv)
} */

/* -------------- sort -------------- */
const productList = document.querySelector('.product_list'); // 게시물을 담을list
const countPerPage = 16; // 페이지 당 보여줄 게시물 수
const numBtnWrapper = document.querySelector('.numBtnWrapper'); // 페이지네이션 버튼 wrapper
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
let pageNumBtns;
let currentPage = 1; // 초기 페이지 번호


//필요한 페이지 번호 개수 구하기 returns {number} - 필요한 페이지 번호 개수
const getTotalPageCount = () => {
  return Math.ceil(products.length / countPerPage);
};


//필요한 페이지 번호 수에 맞게 페이지 버튼 구성하기
const setPageButtons = () => {
  numBtnWrapper.innerHTML = '';

  for (let i = 1; i <= getTotalPageCount(); i++) {
    numBtnWrapper.innerHTML += `<span class="num_button"> ${i} </span`;
  }

  numBtnWrapper.firstChild.classList.add('selected');
  pageNumBtns = document.querySelectorAll('.num_button');
};


//페이지에 해당하는 게시물 ul에 넣어주기
const setPageOf = (pageNumber) => {
  productList.innerHTML = '';

  for (
    let i = countPerPage * (pageNumber - 1) + 1; i <= countPerPage * (pageNumber - 1) + 16 && i <= products.length; i++
  ) {
    const productLi = document.createElement('li');
    productLi.setAttribute('class', 'productLi')
    const productDiv = document.createElement('div')
    productDiv.setAttribute('class', 'productDiv')

    const productImgDiv = document.createElement('div')
    productImgDiv.setAttribute('class', 'product_img')
    productDiv.appendChild(productImgDiv)

    const productImgA = document.createElement('a')
    productImgA.setAttribute('href', './detail.html')
    productImgDiv.appendChild(productImgA)

    const productImg = document.createElement('img')
    productImg.setAttribute('src', products[i].src)
    productImgA.appendChild(productImg)

    const productTxtDiv = document.createElement('div')
    productTxtDiv.setAttribute('class', 'product_txt kor')
    productDiv.appendChild(productTxtDiv)

    const productName = document.createElement('p')
    const productNameTxt = document.createTextNode(products[i].name)
    productName.appendChild(productNameTxt)
    productName.setAttribute('class', 'title')
    productTxtDiv.appendChild(productName)

    const productPrice = document.createElement('span')
    const productPriceText = document.createTextNode(products[i].price + " 원")
    productPrice.appendChild(productPriceText)
    productPrice.setAttribute('class', 'price')
    productTxtDiv.appendChild(productPrice)

    productLi.appendChild(productDiv)
    productList.appendChild(productLi)
  }
}


//페이지 이동에 따른 css 적용
const movePageHighlight = () => {
  const pageNumBtns = document.querySelectorAll('.num_button'); // 페이지 버튼들

  pageNumBtns.forEach((numberButton) => {
    if (numberButton.classList.contains('selected')) {
      numberButton.classList.remove('selected');
    }
  });

  pageNumBtns[currentPage - 1].classList.add('selected');
};

setPageButtons();
setPageOf(currentPage);


//페이지 번호 버튼 클릭 리스너
pageNumBtns.forEach((numberButton) => {
  numberButton.addEventListener('click', (e) => {
    currentPage = +e.target.innerHTML;
    setPageOf(currentPage);
    movePageHighlight();
  });
});


//이전 버튼 클릭 리스너
prevBtn.addEventListener('click', () => {
  if (currentPage > 1) {
    currentPage -= 1;
    setPageOf(currentPage);
    movePageHighlight();
  }
});

//이후 버튼 클릭 리스너
nextBtn.addEventListener('click', () => {
  if (currentPage < getTotalPageCount()) {
    currentPage += 1;
    setPageOf(currentPage);
    movePageHighlight();
  }
});


//new --------------------------------------------------------------------
function productNew() {
  while (productList.hasChildNodes()) {
    productList.removeChild(productList.firstChild);
  }
  const Newproducts = products.filter(function (a) {
    return a.new == "new"
  });

  for (let i = 0; i < Newproducts.length; i++) {
    const productDiv = document.createElement('div')
    productDiv.setAttribute('class', 'productDiv')

    const productImgDiv = document.createElement('div')
    productImgDiv.setAttribute('class', 'product_img')
    productDiv.appendChild(productImgDiv)

    const productImgA = document.createElement('a')
    productImgA.setAttribute('href', './detail.html')
    productImgDiv.appendChild(productImgA)

    const productImg = document.createElement('img')
    productImg.setAttribute('src', Newproducts[i].src)
    productImgA.appendChild(productImg)

    const productTxtDiv = document.createElement('div')
    productTxtDiv.setAttribute('class', 'product_txt kor')
    productDiv.appendChild(productTxtDiv)

    const productName = document.createElement('p')
    const productNameTxt = document.createTextNode(Newproducts[i].name)
    productName.appendChild(productNameTxt)
    productName.setAttribute('class', 'title')
    productTxtDiv.appendChild(productName)

    const productPrice = document.createElement('span')
    const productPriceText = document.createTextNode(Newproducts[i].price + " 원")
    productPrice.appendChild(productPriceText)
    productPrice.setAttribute('class', 'price')
    productTxtDiv.appendChild(productPrice)

    productList.appendChild(productDiv)
  }
};


//best
function productBest() {
  while (productList.hasChildNodes()) {
    productList.removeChild(productList.firstChild);
  }
  const Newproducts = products.filter(function (a) {
    return a.best == "best"
  });

  for (let i = 0; i < Newproducts.length; i++) {
    const productDiv = document.createElement('div')
    productDiv.setAttribute('class', 'productDiv')

    const productImgDiv = document.createElement('div')
    productImgDiv.setAttribute('class', 'product_img')
    productDiv.appendChild(productImgDiv)

    const productImgA = document.createElement('a')
    productImgA.setAttribute('href', './detail.html')
    productImgDiv.appendChild(productImgA)

    const productImg = document.createElement('img')
    productImg.setAttribute('src', Newproducts[i].src)
    productImgA.appendChild(productImg)

    const productTxtDiv = document.createElement('div')
    productTxtDiv.setAttribute('class', 'product_txt kor')
    productDiv.appendChild(productTxtDiv)

    const productName = document.createElement('p')
    const productNameTxt = document.createTextNode(Newproducts[i].name)
    productName.appendChild(productNameTxt)
    productName.setAttribute('class', 'title')
    productTxtDiv.appendChild(productName)

    const productPrice = document.createElement('span')
    const productPriceText = document.createTextNode(Newproducts[i].price + " 원")
    productPrice.appendChild(productPriceText)
    productPrice.setAttribute('class', 'price')
    productTxtDiv.appendChild(productPrice)

    productList.appendChild(productDiv)
  }
};


//가나다순
function productABC() {
  while (productList.hasChildNodes()) {
    productList.removeChild(productList.firstChild);
  }

  const NewProducts = [...products];
  NewProducts.sort((a, b) => {
    if (a.name < b.name) {
      return -1
    } else {
      return 1
    }
  });

  for (let i = 0; i < products.length; i++) {
    const productDiv = document.createElement('div')
    productDiv.setAttribute('class', 'productDiv')

    const productImgDiv = document.createElement('div')
    productImgDiv.setAttribute('class', 'product_img')
    productDiv.appendChild(productImgDiv)

    const productImgA = document.createElement('a')
    productImgA.setAttribute('href', './detail.html')
    productImgDiv.appendChild(productImgA)

    const productImg = document.createElement('img')
    productImg.setAttribute('src', NewProducts[i].src)
    productImgA.appendChild(productImg)

    const productTxtDiv = document.createElement('div')
    productTxtDiv.setAttribute('class', 'product_txt kor')
    productDiv.appendChild(productTxtDiv)

    const productName = document.createElement('p')
    const productNameTxt = document.createTextNode(NewProducts[i].name)
    productName.appendChild(productNameTxt)
    productName.setAttribute('class', 'title')
    productTxtDiv.appendChild(productName)

    const productPrice = document.createElement('span')
    const productPriceText = document.createTextNode(NewProducts[i].price + " 원")
    productPrice.appendChild(productPriceText)
    productPrice.setAttribute('class', 'price')
    productTxtDiv.appendChild(productPrice)

    productList.appendChild(productDiv)
  }
}


// 낮은 가격(내림차순)
function priceUp() {
  while (productList.hasChildNodes()) {
    productList.removeChild(productList.firstChild);
  }

  products.sort(function (a, b) {
    return a.price - b.price;
  });

  for (let i = 0; i < products.length; i++) {
    const productDiv = document.createElement('div')
    productDiv.setAttribute('class', 'productDiv')

    const productImgDiv = document.createElement('div')
    productImgDiv.setAttribute('class', 'product_img')
    productDiv.appendChild(productImgDiv)

    const productImgA = document.createElement('a')
    productImgA.setAttribute('href', './detail.html')
    productImgDiv.appendChild(productImgA)

    const productImg = document.createElement('img')
    productImg.setAttribute('src', products[i].src)
    productImgA.appendChild(productImg)

    const productTxtDiv = document.createElement('div')
    productTxtDiv.setAttribute('class', 'product_txt kor')
    productDiv.appendChild(productTxtDiv)

    const productName = document.createElement('p')
    const productNameTxt = document.createTextNode(products[i].name)
    productName.appendChild(productNameTxt)
    productName.setAttribute('class', 'title')
    productTxtDiv.appendChild(productName)

    const productPrice = document.createElement('span')
    const productPriceText = document.createTextNode(products[i].price + " 원")
    productPrice.appendChild(productPriceText)
    productPrice.setAttribute('class', 'price')
    productTxtDiv.appendChild(productPrice)

    productList.appendChild(productDiv)
  }
}


// 높은 가격(오름차순)
function priceDown() {
  while (productList.hasChildNodes()) {
    productList.removeChild(productList.firstChild);
  }

  products.sort(function (a, b) {
    return b.price - a.price;
  });

  for (let i = 0; i < products.length; i++) {
    const productDiv = document.createElement('div')
    productDiv.setAttribute('class', 'productDiv')

    const productImgDiv = document.createElement('div')
    productImgDiv.setAttribute('class', 'product_img')
    productDiv.appendChild(productImgDiv)

    const productImgA = document.createElement('a')
    productImgA.setAttribute('href', './detail.html')
    productImgDiv.appendChild(productImgA)

    const productImg = document.createElement('img')
    productImg.setAttribute('src', products[i].src)
    productImgA.appendChild(productImg)

    const productTxtDiv = document.createElement('div')
    productTxtDiv.setAttribute('class', 'product_txt kor')
    productDiv.appendChild(productTxtDiv)

    const productName = document.createElement('p')
    const productNameTxt = document.createTextNode(products[i].name)
    productName.appendChild(productNameTxt)
    productName.setAttribute('class', 'title')
    productTxtDiv.appendChild(productName)

    const productPrice = document.createElement('span')
    const productPriceText = document.createTextNode(products[i].price + " 원")
    productPrice.appendChild(productPriceText)
    productPrice.setAttribute('class', 'price')
    productTxtDiv.appendChild(productPrice)

    productList.appendChild(productDiv)
  }
}



// default function
function productBasic() {
  while (productList.hasChildNodes()) {
    productList.removeChild(productList.firstChild);
  }
  for (let i = 0; i < products.length; i++) {
    const productDiv = document.createElement('div')
    productDiv.setAttribute('class', 'productDiv')

    const productImgDiv = document.createElement('div')
    productImgDiv.setAttribute('class', 'product_img')
    productDiv.appendChild(productImgDiv)

    const productImgA = document.createElement('a')
    productImgA.setAttribute('href', './detail.html')
    productImgDiv.appendChild(productImgA)

    const productImg = document.createElement('img')
    productImg.setAttribute('src', products[i].src)
    productImgA.appendChild(productImg)

    const productTxtDiv = document.createElement('div')
    productTxtDiv.setAttribute('class', 'product_txt kor')
    productDiv.appendChild(productTxtDiv)

    const productName = document.createElement('p')
    const productNameTxt = document.createTextNode(products[i].name)
    productName.appendChild(productNameTxt)
    productName.setAttribute('class', 'title')
    productTxtDiv.appendChild(productName)

    const productPrice = document.createElement('span')
    const productPriceText = document.createTextNode(products[i].price + " 원")
    productPrice.appendChild(productPriceText)
    productPrice.setAttribute('class', 'price')
    productTxtDiv.appendChild(productPrice)

    productList.appendChild(productDiv)
  }
}


// button
const btnContainer = document.querySelector(".btnContainer");
const basicBtn = document.querySelector(".basicBtn");
const newBtn = document.querySelector(".newBtn");
const bestBtn = document.querySelector(".bestBtn");
const abcBtn = document.querySelector(".abcBtn");
const lowPriceBtn = document.querySelector(".lowPriceBtn");
const highPriceBtn = document.querySelector(".highPriceBtn");

btnContainer.addEventListener("click", (e) => {
  if (e.target == basicBtn) {
    productBasic();
  } else if (e.target == newBtn) {
    productNew();
  } else if (e.target == bestBtn) {
    productBest();
  } else if (e.target == abcBtn) {
    productABC();
  } else if (e.target == lowPriceBtn) {
    priceUp();
  } else if (e.target == highPriceBtn) {
    priceDown();
  } else {
    return;
  }
});


const selectBtn = document.querySelectorAll('.btnContainer button');

selectBtn.forEach((item, i) => {
  item.addEventListener('click', function () {
    selectBtn.forEach((item) => {
      item.classList.remove('on');
      selectBtn[i].classList.add('on');
    })
  })
});



/* -------------- top_btn -------------- */
document.addEventListener('DOMContentLoaded', () => {
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