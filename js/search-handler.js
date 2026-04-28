// Search Modal Handler
class SearchHandler {
  constructor() {
    this.searchModal = document.getElementById('searchModal');
    this.searchBtn = document.getElementById('searchBtn');
    this.searchClose = document.getElementById('searchClose');
    this.searchInput = document.getElementById('searchInput');
    this.searchResults = document.getElementById('searchResults');
    
    this.searchableContent = this.buildSearchableContent();
    this.init();
  }

  init() {
    // Open modal on search button click
    this.searchBtn.addEventListener('click', () => this.openSearch());
    
    // Close modal on close button click
    this.searchClose.addEventListener('click', () => this.closeSearch());
    
    // Close modal on outside click
    this.searchModal.addEventListener('click', (e) => {
      if (e.target === this.searchModal) {
        this.closeSearch();
      }
    });
    
    // Search on input
    this.searchInput.addEventListener('input', (e) => this.performSearch(e.target.value));
    
    // Close modal on Escape key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && this.searchModal.classList.contains('active')) {
        this.closeSearch();
      }
    });
  }

  buildSearchableContent() {
    const content = [];

    // Search articles
    document.querySelectorAll('.article-card').forEach((article) => {
      const title = article.querySelector('h3')?.textContent || '';
      const description = article.querySelector('.card-body p:not(.tag, .date)')?.textContent || '';
      const tag = article.querySelector('.tag')?.textContent || 'Article';
      
      if (title) {
        content.push({
          title: title.trim(),
          description: description.trim(),
          type: tag.trim(),
          section: '#publications',
          excerpt: description.substring(0, 100) + (description.length > 100 ? '...' : '')
        });
      }
    });

    // Search events
    document.querySelectorAll('.event-card').forEach((event) => {
      const title = event.querySelector('h3')?.textContent || '';
      const description = event.querySelector('.card-body p:not(.tag)')?.textContent || '';
      const tag = event.querySelector('.tag')?.textContent || 'Event';
      
      if (title) {
        content.push({
          title: title.trim(),
          description: description.trim(),
          type: tag.trim(),
          section: '#events',
          excerpt: description.substring(0, 100) + (description.length > 100 ? '...' : '')
        });
      }
    });

    // Search membership benefits
    document.querySelectorAll('.membership-benefits li span').forEach((benefit) => {
      const text = benefit.textContent.trim();
      if (text) {
        content.push({
          title: text,
          description: 'Premium membership benefit',
          type: 'Membership',
          section: '#membership',
          excerpt: text
        });
      }
    });

    // Search meet & greet
    document.querySelectorAll('.card-benefits li span').forEach((benefit) => {
      const text = benefit.textContent.trim();
      if (text) {
        content.push({
          title: text,
          description: 'Meet & Greet experience',
          type: 'Experience',
          section: '#membership',
          excerpt: text
        });
      }
    });

    // Search donation items
    document.querySelectorAll('.donation-item').forEach((item) => {
      const title = item.querySelector('h3')?.textContent || '';
      const description = item.querySelector('p:not(.donation-stats)')?.textContent || '';
      
      if (title) {
        content.push({
          title: title.trim(),
          description: description.trim(),
          type: 'Donation',
          section: '#donate',
          excerpt: description.substring(0, 100) + (description.length > 100 ? '...' : '')
        });
      }
    });

    // Add key sections
    content.push(
      {
        title: 'About Regé-Jean Page',
        description: 'Learn about the acclaimed British actor',
        type: 'Section',
        section: '#about',
        excerpt: 'Acclaimed British actor known for leading roles in television and film'
      },
      {
        title: 'Premium Membership',
        description: 'Exclusive annual membership with signed merchandise and Telegram access',
        type: 'Membership',
        section: '#membership',
        excerpt: 'Unlock exclusive access with signed merchandise, Telegram chat, and more'
      },
      {
        title: 'Make a Donation',
        description: 'Support education, healthcare, and community development in Africa',
        type: 'Donate',
        section: '#donate',
        excerpt: 'Support education and healthcare for disadvantaged children across Africa'
      },
      {
        title: 'Contact Management',
        description: 'Get in touch with professional representation',
        type: 'Contact',
        section: '#contact',
        excerpt: 'For inquiries, media requests, and professional opportunities'
      }
    );

    return content;
  }

  performSearch(query) {
    const trimmedQuery = query.toLowerCase().trim();
    
    if (!trimmedQuery) {
      this.searchResults.innerHTML = '';
      return;
    }

    const results = this.searchableContent.filter(item => 
      item.title.toLowerCase().includes(trimmedQuery) ||
      item.description.toLowerCase().includes(trimmedQuery) ||
      item.type.toLowerCase().includes(trimmedQuery)
    ).slice(0, 10); // Limit to 10 results

    this.displayResults(results, trimmedQuery);
  }

  displayResults(results, query) {
    if (results.length === 0) {
      this.searchResults.innerHTML = `
        <div class="search-no-results">
          <div><i class="fa-solid fa-search"></i></div>
          <p>No results found for "<strong>${query}</strong>"</p>
          <p style="font-size: 0.85rem; margin-top: 0.5rem;">Try searching for articles, events, or membership benefits</p>
        </div>
      `;
      return;
    }

    this.searchResults.innerHTML = results.map(result => `
      <div class="search-result-item" data-section="${result.section}">
        <div class="search-result-type">${result.type}</div>
        <div class="search-result-title">${this.highlightQuery(result.title, query)}</div>
        <div class="search-result-excerpt">${this.highlightQuery(result.excerpt, query)}</div>
      </div>
    `).join('');

    // Add click handlers to results
    this.searchResults.querySelectorAll('.search-result-item').forEach(item => {
      item.addEventListener('click', () => {
        const section = item.getAttribute('data-section');
        this.closeSearch();
        window.location.hash = section;
      });
    });
  }

  highlightQuery(text, query) {
    const regex = new RegExp(`(${query})`, 'gi');
    return text.replace(regex, '<strong style="color: var(--gold);">$1</strong>');
  }

  openSearch() {
    this.searchModal.classList.add('active');
    this.searchInput.focus();
  }

  closeSearch() {
    this.searchModal.classList.remove('active');
    this.searchInput.value = '';
    this.searchResults.innerHTML = '';
  }
}

// Initialize search handler when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  new SearchHandler();
});
