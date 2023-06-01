$(function () {

  const eleWidth = $('.insta_box .frame li').innerWidth()
  let state = false
  let playOn = false
  let direction = 'left' //true/false가 아니라
  let bannerAuto //setInterval(무한반복) 함수를 멈추게 하기 위해 상태 변수 사용

  function play() {
    if (!playOn) {
      //playOn은 트루이기 때문에 !찍어주면 false가 됨
      //초기값 선언한것과는 별개, 기본 모든 변수는 true, 가베지 값을 받기 때문
      playOn = true //멈춰져있다 하면 true로 바꿔주고
      bannerAuto = setInterval(function () {
        if (direction === 'left') {
          $('.prev').click() //direction이 왼쪽이 되면 prev버튼이 실행된것처럼 되어라, prev버튼을 누른것처럼 실행되도록 만들어주는 것
        } else {
          $('.next').click()
        }
      }, 2000)
    }

    //플레이 되고 있는동안 mouseover가 일어나는거라 play에 걸어주기
    if (playOn) {
      $('.frame li a').mouseover(function () {
        stop()
      })
    }
  } //play()

  function stop() {
    if (playOn) {
      playOn = false
      clearInterval(bannerAuto) //괄호안에 값이 없으면 내가가진 모든 setInterval에 적용됨 -> 적용하고 싶은 함수의 변수를 만들어야 내가 지정한 setInterval함수만 제어 가능
    }
    $('.frame li a').mouseout(function () {
      play()
    })
    $('.frame li a').click(function () {
      location.href
    })
  } //stop()

  //실행중인 애니메이션 중단하고, 왼쪽 버튼 실행시 반응
  function left() {
    stop()
    direction = 'left' //상태변수를 먼저 바꿔주기
    $('.insta_box .frame').animate({
      left: eleWidth * -1
    }, 500, function () {
      //js코드 안에서는 기호나 단위를 쓸 수 없다, -라는 기호를 쓸수없어서 -220을 표현할 수 없어서 220*-1로 사용한것
      $(this).children('li:first').insertAfter($(this).children('li:last'))
      $(this).css('left', 0)
      state = false //상태가 끝났다
      play() //다시 플레이
    })
  } //left()

  function right() {
    stop()
    direction = 'right' //right 눌렀으니 디렉션값을 바꿔준것
    $('.insta_box .frame li:last').insertBefore($('.frame ul li:first'))
    $('.insta_box .frame').css('left', eleWidth * -1)
    $('.insta_box .frame').animate({
      left: 0
    }, 500, function () {
      state = false
      play()
    })
  } //right

  $('.prev').click(function () {
    if (!state) {
      state = true //state가 false라면 true로 바꿔주고 left버튼을 눌러주기
      left()
    }
  }) //prev_btn_click_events

  $('.next').click(function () {
    if (!state) {
      state = true
      right()
    }
  }) //next_btn_click_event

  $('.stop').click(function () {
    stop()
  }) //stop_btn_click_event

  $('.play').click(function () {
    play(0)
  }) //play_btn_click_event

  $('.play').click() //초기 강제 자동실행(이벤트실행)

}) //jquery_function