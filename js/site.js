// jQuery 3.x-style ready event and locally scoped $
jQuery(function($) {
  $('html').removeClass('nojs');
  $('html').addClass('hasjs');

  $('#signup-form').on('submit', function(event) {
    event.preventDefault();

    var userEmail = $('#user_email').val();

    var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    if (!emailPattern.test(userEmail)) {
      $('#email-error').text('Please enter a valid email address');
    } else {
      $('#email-error').text('');

      alert('Form submitted successfully!');
    }
  });
});
