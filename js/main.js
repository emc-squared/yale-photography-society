// Mobile nav toggle
document.addEventListener('DOMContentLoaded', function () {
  var toggle = document.querySelector('.nav-toggle');
  var links = document.querySelector('.nav-links');

  if (toggle && links) {
    toggle.addEventListener('click', function () {
      links.classList.toggle('open');
    });
  }

  // Mailing list form (front-end only for now — see README for wiring
  // this up to Mailchimp / Google Forms / a real backend)
  var form = document.querySelector('.mailing-list-form');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var input = form.querySelector('input[type="email"]');
      var note = form.parentElement.querySelector('.mailing-list-note');
      if (!input.value || !input.checkValidity()) {
        input.focus();
        return;
      }
      // TODO: replace with a real submission (see README)
      if (note) {
        note.textContent = 'Thanks — you\'re on the list.';
      }
      input.value = '';
    });
  }
});
