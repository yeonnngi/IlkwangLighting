$(function () {
  const eleWidth = $('.insta_box .frame li').innerWidth()

  let state = false
  let playOn = false
  let direction = 'left' //true/false가 아니라
  let bannerAuto //setInterval(무한반복) 함수를 멈추게 하기 위해 상태 변수 사용

  function play() {
    if (!playOn) {
      playOn = true //멈춰져있다 하면 true로 바꿔주고
      bannerAuto = setInterval(function () {
        if (direction === 'left') {
          $('.prev').click()
        } else {
          $('.next').click()
        }
      }, 2000)
    }

    if (playOn) {
      $('.frame li a').mouseover(function () {
        stop()
      })
    }
  } //play()

  function stop() {
    if (playOn) {
      playOn = false
      clearInterval(bannerAuto)
    }
    $('.frame li a').mouseout(function () {
      play()
    })
    $('.frame li a').click(function () {
      location.href
    })
  } //stop()


  function left() {
    stop()
    direction = 'left' 
    $('.insta_box .frame').animate({
      left: eleWidth * -1
    }, 500, function () {
      $(this).children('li:first').insertAfter($(this).children('li:last'))
      $(this).css('left', 0)
      state = false //상태가 끝났다
      play() //다시 플레이
    })
  } //left()

  function right() {
    stop()
    direction = 'right'
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

  $('.play').click() //초기 강제 자동실행

}) //jquery_function