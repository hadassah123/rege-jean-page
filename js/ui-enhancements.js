/**
 * UI Enhancements
 * Smooth scrolling, animations, and interactive elements
 */

export class UIEnhancements {
  constructor() {
    this.init();
  }

  init() {
    this.enhanceImages();
    this.addLazyLoading();
    this.enhanceLinks();
  }

  enhanceImages() {
    const images = document.querySelectorAll('img');
    images.forEach(img => {
      img.style.transition = 'transform 0.3s ease';
      img.addEventListener('mouseover', () => {
        img.style.transform = 'scale(1.02)';
      });
      img.addEventListener('mouseout', () => {
        img.style.transform = 'scale(1)';
      });
    });
  }

  addLazyLoading() {
    if ('IntersectionObserver' in window) {
      const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const img = entry.target;
            img.src = img.dataset.src || img.src;
            img.classList.add('loaded');
            observer.unobserve(img);
          }
        });
      });

      document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
      });
    }
  }

  enhanceLinks() {
    // Add smooth scroll behavior to anchor links
    document.querySelectorAll('a[href^="#"]').forEach(link => {
      link.addEventListener('click', (e) => {
        const target = document.querySelector(link.getAttribute('href'));
        if (target) {
          e.preventDefault();
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      });
    });

    // Add external link indicator
    document.querySelectorAll('a[href^="http"]').forEach(link => {
      link.setAttribute('target', '_blank');
      link.setAttribute('rel', 'noopener noreferrer');
      link.title = 'Opens in a new window';
    });
  }
}
