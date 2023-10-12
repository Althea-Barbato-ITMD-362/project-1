// jQuery 3.x-style ready event and locally scoped $
jQuery(function($) {
  $('html').removeClass('nojs');
  $('html').addClass('hasjs');
});
function formConfirmation() {
  alert("Thank you for signing up! \n\nEnjoy!");
}