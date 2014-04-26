$('a#signup').on('click', function (event) {
  event.preventDefault();
  $('form#ss-form').toggle();
});

var submitted = false;

$('form#ss-form').on('submit', function () {
  submitted = true;
});

$('iframe').on('load', function () {
  if(submitted === true) {
    $('div#message')
      .text('Signed up successfully')
      .fadeIn()
      .fadeOut(5000);
    $('form#ss-form').hide();
  }
});