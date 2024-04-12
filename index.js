function toggleMenu() {
    var menu = document.getElementById("menu");
    menu.classList.toggle("active");
}


document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('contactForm');
    const submitBtn = document.getElementById('submitBtn');
  
    submitBtn.addEventListener('click', function () {
      // Get form inputs
      const name = document.getElementById('name').value.trim();
      const email = document.getElementById('email').value.trim();
      const phone = document.getElementById('phone').value.trim();
      const message = document.getElementById('message').value.trim();
  
      // Validation
      if (name === '' || email === '' || phone === '' || message === '') {
        alert('Please fill in all fields.');
        return;
      }
  
      // Email validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        alert('Please enter a valid email address.');
        return;
      }
  
      // Phone number validation
      const phoneRegex = /^\d{10}$/;
      if (!phoneRegex.test(phone)) {
        alert('Please enter a valid 10-digit phone number.');
        return;
      }
  
      // Log form data
      const formData = {
        Name: name,
        Email: email,
        Phone: phone,
        Message: message
      };

      const formDataString = Object.keys(formData).map(key => key + ': ' + formData[key]).join('\n');
  
      alert('Form Data:\n' + formDataString);
  
      // Optionally, you can reset the form after successful submission
      form.reset();
    });
  });




