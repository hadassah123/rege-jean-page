/**
 * Form Handler
 * Manages form submissions with validation and feedback
 */

export class FormHandler {
  constructor() {
    this.registrationForm = document.getElementById('registrationForm');
    this.contactForm = document.querySelector('.contact .membership-form form');
    this.donationForm = document.getElementById('donationForm');
    this.newsletterForm = document.querySelector('.newsletter-box form') || this.createNewsletterForm();
    
    this.init();
  }

  init() {
    if (this.registrationForm) {
      this.registrationForm.addEventListener('submit', (e) => this.handleRegistration(e));
    }
    if (this.contactForm) {
      this.contactForm.addEventListener('submit', (e) => this.handleContact(e));
    }
    if (this.donationForm) {
      this.donationForm.addEventListener('submit', (e) => this.handleDonation(e));
      this.setupDonationAmountButtons();
    }
    if (this.newsletterForm) {
      this.newsletterForm.addEventListener('submit', (e) => this.handleNewsletter(e));
    }
  }

  createNewsletterForm() {
    // Create a wrapper form for newsletter inputs if not present
    const newsletterBox = document.querySelector('.newsletter-box');
    if (!newsletterBox) return null;

    const form = document.createElement('form');
    const inputs = newsletterBox.querySelectorAll('input, button');
    inputs.forEach(input => {
      if (input !== newsletterBox.querySelector('button')) {
        form.appendChild(input.cloneNode(true));
      }
    });
    return form;
  }

  validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  validateForm(formData) {
    const errors = [];

    if (!formData.name || formData.name.trim().length < 2) {
      errors.push('Name must be at least 2 characters');
    }

    if (!formData.email || !this.validateEmail(formData.email)) {
      errors.push('Please enter a valid email address');
    }

    if (!formData.message || formData.message.trim().length < 10) {
      errors.push('Message must be at least 10 characters');
    }

    return errors;
  }

  handleRegistration(e) {
    e.preventDefault();

    const name = document.getElementById('name')?.value;
    const email = document.getElementById('email')?.value;
    const interest = document.getElementById('interest')?.value;
    const message = document.getElementById('message')?.value;
    const formMessage = document.getElementById('formMessage');

    const formData = { name, email, interest, message };
    const errors = this.validateForm(formData);

    if (errors.length > 0) {
      this.showError(formMessage, errors.join(', '));
      return;
    }

    // Simulate API call
    this.showSuccess(formMessage, `Thank you, ${name}. Your interest in "${interest}" has been received. We'll contact you shortly.`);
    
    // Reset form after success
    setTimeout(() => {
      this.registrationForm.reset();
      formMessage.textContent = '';
    }, 3000);
  }

  handleContact(e) {
    e.preventDefault();

    const formInputs = e.target.querySelectorAll('input, textarea, select');
    const formData = {
      name: formInputs[0]?.value,
      email: formInputs[1]?.value,
      subject: formInputs[2]?.value,
      message: formInputs[3]?.value,
    };

    const errors = this.validateForm(formData);

    if (errors.length > 0) {
      this.showMessage(e.target, errors.join(', '), 'error');
      return;
    }

    this.showMessage(e.target, `Thank you for your message. We'll get back to you within 48 hours.`, 'success');
    
    setTimeout(() => {
      e.target.reset();
    }, 3000);
  }

  handleNewsletter(e) {
    e.preventDefault();

    const emailInput = document.querySelector('.newsletter-box input[type="email"]');
    const email = emailInput?.value;

    if (!email || !this.validateEmail(email)) {
      this.showMessage(emailInput, 'Please enter a valid email address', 'error');
      return;
    }

    this.showMessage(emailInput, 'Thank you for signing up! Check your email soon.', 'success');
    emailInput.value = '';

    setTimeout(() => {
      emailInput.parentElement.querySelector('.form-message')?.remove();
    }, 3000);
  }

  showSuccess(element, message) {
    if (!element) return;
    element.textContent = message;
    element.className = 'form-message';
  }

  showError(element, message) {
    if (!element) return;
    element.textContent = message;
    element.className = 'form-message error';
  }

  showMessage(element, message, type = 'success') {
    let messageElement = element.querySelector('.form-message');
    
    if (!messageElement) {
      messageElement = document.createElement('div');
      element.appendChild(messageElement);
    }

    messageElement.textContent = message;
    messageElement.className = `form-message ${type === 'error' ? 'error' : ''}`;
  }

  setupDonationAmountButtons() {
    const amountButtons = document.querySelectorAll('.amount-btn');
    const customAmountInput = document.getElementById('customAmount');
    
    amountButtons.forEach(button => {
      button.addEventListener('click', (e) => {
        e.preventDefault();
        
        // Remove active class from all buttons
        amountButtons.forEach(btn => btn.classList.remove('active'));
        
        // Add active class to clicked button
        button.classList.add('active');
        
        // Set custom amount field (optional - can be cleared if user wants)
        const amount = button.getAttribute('data-amount');
        // You could optionally set customAmountInput.value = amount here
      });
    });

    // Clear button active state when custom amount is entered
    customAmountInput.addEventListener('input', () => {
      amountButtons.forEach(btn => btn.classList.remove('active'));
    });
  }

  handleDonation(e) {
    e.preventDefault();

    const formInputs = e.target.querySelectorAll('input, textarea, select');
    const name = formInputs[0]?.value;
    const email = formInputs[1]?.value;
    const phone = formInputs[2]?.value;
    const purpose = formInputs[3]?.value;
    const newsletter = e.target.querySelector('input[type="checkbox"]')?.checked;

    // Get amount from active button or custom input
    let amount;
    const activeButton = e.target.querySelector('.amount-btn.active');
    if (activeButton) {
      amount = activeButton.getAttribute('data-amount');
    } else {
      const customAmount = document.getElementById('customAmount')?.value;
      amount = customAmount || '0';
    }

    const formData = { name, email, phone, purpose, amount, newsletter };
    
    // Validate required fields
    const errors = [];
    if (!name || name.trim().length < 2) {
      errors.push('Name must be at least 2 characters');
    }
    if (!email || !this.validateEmail(email)) {
      errors.push('Please enter a valid email address');
    }
    if (amount === '0' || !amount) {
      errors.push('Please select or enter a donation amount');
    }
    if (!purpose) {
      errors.push('Please select a donation purpose');
    }

    const messageElement = document.getElementById('donationMessage');
    if (errors.length > 0) {
      this.showMessage(messageElement, errors.join(', '), 'error');
      return;
    }

    // Success message
    this.showMessage(messageElement, `Thank you for your generous donation of $${amount}! A confirmation email has been sent to ${email}. Together we're making a difference.`, 'success');
    
    // Reset form after success
    setTimeout(() => {
      e.target.reset();
      document.querySelectorAll('.amount-btn').forEach(btn => btn.classList.remove('active'));
      messageElement.textContent = '';
    }, 4000);
  }
}
