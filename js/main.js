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

  // Featured page slideshow — auto-advances every 5s, plus manual arrows/dots
  var slideshow = document.querySelector('[data-slideshow]');
  if (slideshow) {
    var track = slideshow.querySelector('.slideshow-track');
    var slides = slideshow.querySelectorAll('.slide');
    var dotsContainer = slideshow.querySelector('.slide-dots');
    var prevBtn = slideshow.querySelector('.slide-arrow.prev');
    var nextBtn = slideshow.querySelector('.slide-arrow.next');
    var index = 0;
    var total = slides.length;
    var interval;

    slides.forEach(function (_, i) {
      var dot = document.createElement('button');
      dot.className = 'slide-dot' + (i === 0 ? ' active' : '');
      dot.setAttribute('aria-label', 'Go to photo ' + (i + 1));
      dot.addEventListener('click', function () {
        goTo(i);
        resetInterval();
      });
      dotsContainer.appendChild(dot);
    });
    var dots = dotsContainer.querySelectorAll('.slide-dot');

    function update() {
      track.style.transform = 'translateX(-' + index * 100 + '%)';
      dots.forEach(function (d, i) {
        d.classList.toggle('active', i === index);
      });
    }

    function goTo(i) {
      index = (i + total) % total;
      update();
    }

    function next() { goTo(index + 1); }
    function prev() { goTo(index - 1); }

    function resetInterval() {
      clearInterval(interval);
      interval = setInterval(next, 5000);
    }

    nextBtn.addEventListener('click', function () { next(); resetInterval(); });
    prevBtn.addEventListener('click', function () { prev(); resetInterval(); });

    resetInterval();
  }
});
