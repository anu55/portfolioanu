document.getElementById('contact-form').addEventListener('submit', function (e) {
  e.preventDefault(); // Prevents the default form submission behavior

  // Get form values
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.querySelector('textarea[name="message"]').value;

  // Confirmation message with form data
  const confirmationMessage = `Are you sure you want to submit?\n\nName: ${name}\nEmail: ${email}\nMessage: ${message}`;

  // Show a confirmation pop-up with form data
  if (confirm(confirmationMessage)) {
    // If the user confirms, show a success message
    alert("Message sent successfully!");
    window.location.reload();
    
  }
});