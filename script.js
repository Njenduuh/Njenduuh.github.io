window.addEventListener('load', () => {
    // Fade in the profile card
    document.body.classList.add('loaded');
  
    // Add scroll effect for social links
    const socialLinks = document.querySelector('.social-links');
    window.addEventListener('scroll', () => {
      if (window.scrollY > 100) {
        socialLinks.classList.add('visible');
      }
    });
  
    // Avatar zoom effect on hover
    const avatar = document.querySelector('.avatar');
    avatar.addEventListener('mouseenter', () => {
      avatar.style.transform = 'scale(1.1)';
    });
    avatar.addEventListener('mouseleave', () => {
      avatar.style.transform = 'scale(1)';
    });
  });
  