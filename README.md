# Regé-Jean Page - Official Website

The official online presence of Regé-Jean Page, a British actor known for his acclaimed role as Simon Basset in Netflix's "Bridgerton." This professional website provides news, interviews, media resources, and inquiries for press and professional representation.

## 📁 Project Structure

```
rege jean page/
├── index.html                 # Main landing page
├── css/
│   ├── variables.css          # Design system variables and tokens
│   └── styles.css             # Main stylesheet with organized sections
├── js/
│   ├── main.js               # Application entry point and module orchestrator
│   ├── navigation.js         # Sidebar toggle and active link management
│   ├── form-handler.js       # Form validation and submission handling
│   └── ui-enhancements.js    # Interactive elements and animations
├── assets/                    # Placeholder for future media assets
├── pages/                     # Placeholder for additional pages
└── README.md                  # This file
```

## 🎨 Design System

### Color Palette
- **Primary Gold**: `#D4AF6A` - Used for accents and highlights
- **Background Black**: `#0A0A0A` - Main background
- **Dark Neutral**: `#111111` - Secondary backgrounds
- **Text White**: `#F5F1EA` - Primary text
- **Text Gray**: `#B8B2AA` - Secondary text

### Typography
- **Display Font**: Playfair Display (serif) - Headlines and branding
- **Body Font**: Montserrat (sans-serif) - Body text and UI

### Spacing Scale
- xs: 0.5rem
- sm: 1rem
- md: 1.5rem
- lg: 2rem
- xl: 3rem
- 2xl: 4rem

## 🚀 Features

### Navigation
- **Responsive Sidebar**: Collapsible navigation menu for mobile devices
- **Smooth Scrolling**: Hash-based navigation with smooth scroll behavior
- **Active Links**: Automatic highlighting of current section

### Forms & Validation
- **Email Validation**: Built-in email format checking
- **Form Feedback**: User-friendly success and error messages
- **Newsletter Signup**: Email capture in sidebar
- **Registration Form**: Multi-field registration with category selection
- **Contact Form**: General inquiry submission

### Interactive Elements
- **Card Hover Effects**: Smooth animations on article, event, and pricing cards
- **Experience Items**: Interactive experience cards in the hero section
- **Button States**: Hover, active, and disabled states
- **Image Interactions**: Smooth zoom effects on hover

### Responsive Design
- **Mobile-First**: Optimized for all screen sizes
- **Breakpoints**:
  - 1100px - Tablet layout
  - 720px - Small device layout
  - 480px - Mobile optimization
- **Flexible Grids**: Responsive card layouts

## 📋 Sections

### Hero Section
- Official website banner with professional introduction
- Call-to-action to learn more
- Professional highlights and overview

### About
- Biography of Regé-Jean Page
- Career highlights and training (RADA)
- Overview of his professional journey

### Publications
- Featured articles and interviews from major publications
- The Guardian, Variety, Hollywood Reporter, Deadline
- Curated media coverage and insights

### Professional Opportunities
- Newsletter subscription for official updates
- Media & Press inquiry section
- Booking & representation opportunities

### Contact & Inquiries
- Official contact information
- Professional inquiry form for media, bookings, and partnerships
- Global representation details

### Footer
- Copyright information
- Privacy and terms links

## 🔧 JavaScript Architecture

### Module Structure
- **navigation.js**: Handles sidebar toggle, active link management, and smooth scrolling
- **form-handler.js**: Email validation, form submission, success/error feedback
- **ui-enhancements.js**: Image hover effects, lazy loading, external link handling
- **main.js**: Application orchestrator that initializes all modules

### Key Features
- ES6 Module system for code organization
- Class-based architecture
- Event delegation for efficiency
- Error handling and logging

## 🎯 How to Use

### Basic Setup
1. Open `index.html` in a modern web browser
2. All assets (fonts, icons, images) load from CDN
3. No build process required

### Customization

#### Change Colors
Edit `css/variables.css` to modify the color scheme:
```css
:root {
  --gold: #D4AF6A;        /* Change primary color */
  --black: #0A0A0A;       /* Change background */
  /* ... other variables */
}
```

#### Add New Sections
1. Add HTML section in `index.html` with an `id` attribute
2. Add navigation link in the sidebar
3. CSS is automatically applied via existing class structure

#### Modify Forms
Update form fields in `index.html`, then update validation in `js/form-handler.js`

## 📱 Browser Support
- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Android)

## 🔐 Security & Deployment Notes
- Implement backend form handling for inquiries
- Set up email notifications for submissions
- Use HTTPS for all connections
- Add CSRF protection for forms
- Implement rate limiting on inquiry forms
- Regular security audits recommended

## 🚀 Future Enhancementsinquiry submissions
- [ ] Email notification system
- [ ] Dynamic content management system
- [ ] Media gallery with high-resolution images
- [ ] Blog or news section
- [ ] Event calendar
- [ ] Analytics and tracking
- [ ] Multi-language support
- [ ] Payment & Rights
All content, images, and materials on this website are © 2026 Regé-Jean Page. Official representation and licensing controlled by management.

## 📧 Contact
For professional inquiries, use the contact form on the website.
## 📧 Contact
For inquiries: management@example.com
