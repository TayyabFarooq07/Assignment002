document.addEventListener('DOMContentLoaded', function() {
  var form = document.getElementById('contact-form');
  if (!form) return;

  form.addEventListener('submit', function(event) {
    event.preventDefault();
    document.getElementById('form-feedback').textContent =
      'Your entries are valid. This demo does not send messages.';
  });
});
