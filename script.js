document.addEventListener('DOMContentLoaded', function () {
  const menuToggleButton = document.querySelector('.menu-toggle');
  const navLinks = document.querySelector('.nav-links');
  const toggleIcon = menuToggleButton ? menuToggleButton.querySelector('i') : null;

  if (menuToggleButton && navLinks) {
    menuToggleButton.addEventListener('click', function () {
      const isOpen = navLinks.classList.toggle('open');
      menuToggleButton.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
      if (toggleIcon) {
        toggleIcon.classList.toggle('fa-bars', !isOpen);
        toggleIcon.classList.toggle('fa-xmark', isOpen);
      }
      menuToggleButton.classList.toggle('active', isOpen);
      menuToggleButton.setAttribute('aria-label', isOpen ? 'Close navigation' : 'Open navigation');
    });

    navLinks.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        if (navLinks.classList.contains('open')) {
          navLinks.classList.remove('open');
          menuToggleButton.setAttribute('aria-expanded', 'false');
          menuToggleButton.classList.remove('active');
          if (toggleIcon) {
            toggleIcon.classList.add('fa-bars');
            toggleIcon.classList.remove('fa-xmark');
          }
          menuToggleButton.setAttribute('aria-label', 'Open navigation');
        }
      });
    });
  }

  const aboutContainer = document.querySelector('.about_container');
  if (aboutContainer) {
    const onScroll = function () {
      const aboutTop = aboutContainer.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
      if (aboutTop < windowHeight - 100) {
        aboutContainer.classList.add('show');
        window.removeEventListener('scroll', onScroll);
      }
    };
    window.addEventListener('scroll', onScroll);
    onScroll();
  }
});
