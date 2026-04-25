/**
 * Main Application Initializer
 * Orchestrates all modules and initializes the application
 */

import { NavigationHandler } from './navigation.js';
import { FormHandler } from './form-handler.js';
import { UIEnhancements } from './ui-enhancements.js';

class Application {
  constructor() {
    this.navigation = null;
    this.forms = null;
    this.ui = null;
  }

  init() {
    // Wait for DOM to be fully loaded
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', () => this.initialize());
    } else {
      this.initialize();
    }
  }

  initialize() {
    try {
      // Initialize all modules
      this.navigation = new NavigationHandler();
      this.forms = new FormHandler();
      this.ui = new UIEnhancements();

      console.log('✓ Application initialized successfully');
    } catch (error) {
      console.error('Error initializing application:', error);
    }
  }
}

// Create and initialize the application
const app = new Application();
app.init();
