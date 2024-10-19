//navbar action
document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.querySelector('.menu-toggle');
  const navLinks = document.querySelector('nav ul');

  menuToggle.addEventListener('click', function () {
      navLinks.classList.toggle('show');
      menuToggle.classList.toggle('open');
  });
});


//contact form
function sendEmail(event) {
  event.preventDefault(); // Prevent the form from submitting the default way

  // Retrieve form field values
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const phone = document.getElementById('phone').value;
  const message = document.getElementById('message').value;

  // Create the mailto link with the form data
  const subject = encodeURIComponent('New Message from Portfolio Contact Form');
  const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\n\nMessage:\n${message}`
  );
  const mailtoLink = `mailto:adityakumar22122004@gmail.com?subject=${subject}&body=${body}`;

  // Open the mailto link to trigger the email client
  window.location.href = mailtoLink;
}

