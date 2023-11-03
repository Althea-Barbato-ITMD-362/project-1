// jQuery 3.x-style ready event and locally scoped $
jQuery(function($) {
  $('html').removeClass('nojs');
  $('html').addClass('hasjs');

  // Add an event listener for the form submission
  $('#signup-form').on('submit', function(event) {
    // Prevent the form from submitting by default
    event.preventDefault();

    // Get the user's email input value
    var userEmail = $('#user_email').val();

    // Define a regular expression for email validation
    var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    // Check if the email input matches the pattern
    if (!emailPattern.test(userEmail)) {
      // Display an error message
      $('#email-error').text('Please enter a valid email address');
    } else {
      // Clear any previous error message
      $('#email-error').text('');

      // Submit the form if email is valid (you can add further logic here)
      // For this example, I'm just alerting a success message
      alert('Form submitted successfully!');
    }
  });
});
