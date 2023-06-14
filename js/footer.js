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
}); //business_click_event