document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('.contact-form');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = form.querySelector('#name').value;
      const email = form.querySelector('#email').value;
      const message = form.querySelector('#message').value;
      const subscribe = form.querySelector('#subscribe').checked;
      // Show success message
      let successMsg = `Thank you, ${name}! Your message has been sent.`;
      if (subscribe) {
        successMsg += ` You've been subscribed to our newsletter at ${email}.`;
      }
      alert(successMsg);
      // Reset form
      form.reset();
    });
  }
});
console.log('✨ Form handler loaded successfully!');