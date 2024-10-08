$(document).ready(function() {

  var guestAmount = $('#guestNo');

  $('#cnt-up').click(function() {
    guestAmount.val(Math.min(parseInt($('#guestNo').val()) + 1, 20));
  });
  $('#cnt-down').click(function() {
    guestAmount.val(Math.max(parseInt($('#guestNo').val()) - 1, 1));
  });

  $('.btn').click(function() {

    var $btn = $('.btn');

    $btn.toggleClass('booked');
    $('form').slideToggle(300);

    if ($btn.text() === "BOOK NOW") {
      $btn.text("BOOKED!");
    } else {
      $btn.text("BOOK NOW");
    }
  });
});