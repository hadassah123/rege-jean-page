/**
 * Navigation and Menu Handler
 * Handles sidebar toggle and active link management
 */

export class NavigationHandler {
  constructor() {
    this.menuBtn = document.getElementById('menuBtn');
    this.sidebar = document.getElementById('sidebar');
    this.navLinks = document.querySelectorAll('.nav a');
    
    this.init();
  }

  init() {
    // Toggle sidebar on menu button click
    if (this.menuBtn) {
      this.menuBtn.addEventListener('click', () => this.toggleSidebar());
    }

    // Close sidebar when clicking on nav links
    this.navLinks.forEach(link => {
      link.addEventListener('click', () => this.closeSidebar());
      link.addEventListener('click', (e) => this.setActiveLink(e.target.closest('a')));
    });

    // Close sidebar on outside click
    document.addEventListener('click', (e) => {
      if (!this.sidebar?.contains(e.target) && !this.menuBtn?.contains(e.target)) {
        this.closeSidebar();
      }
    });

    // Set initial active link based on hash
    this.setInitialActiveLink();

    // Update active link on scroll
    window.addEventListener('scroll', () => this.updateActiveLinkOnScroll());
  }

  toggleSidebar() {
    this.sidebar?.classList.toggle('open');
  }

  closeSidebar() {
    this.sidebar?.classList.remove('open');
  }

  setActiveLink(link) {
    // Remove active class from all links
    this.navLinks.forEach(l => l.classList.remove('active'));
    // Add active class to clicked link
    link.classList.add('active');
  }

  setInitialActiveLink() {
    const hash = window.location.hash || '#home';
    const activeLink = Array.from(this.navLinks).find(link => link.getAttribute('href') === hash);
    if (activeLink) {
      this.setActiveLink(activeLink);
    }
  }

  updateActiveLinkOnScroll() {
    const sections = document.querySelectorAll('section[id]');
    const scrollPosition = window.scrollY + 100;

    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;

      if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
        const link = document.querySelector(`.nav a[href="#${section.id}"]`);
        if (link) {
          this.setActiveLink(link);
        }
      }
    });
  }
}
