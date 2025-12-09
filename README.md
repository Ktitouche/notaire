# 🏛️ Étude Notariale - Website

A complete, elegant, and professional notary office website built with HTML, CSS, and JavaScript.

## 📋 Project Overview

This is a fully responsive website for a notary office, featuring a sophisticated design with a blue/gold/white color palette. The website includes comprehensive information about notarial services, online appointment booking, document requests, and contact forms.

## ✨ Features

### Pages Included
1. **Home Page (index.html)** - Hero section, services overview, testimonials, practical information
2. **About Page (about.html)** - Team presentation, history, qualifications, values
3. **Services Page (services.html)** - Detailed service categories with descriptions
4. **Request Document Page (request.html)** - Form for requesting legal documents
5. **Appointment Page (appointment.html)** - Online appointment booking system
6. **Contact Page (contact.html)** - Contact form, Google Maps, office hours

### Key Features
- ✅ Fully responsive design (mobile-first approach)
- ✅ Elegant blue/gold/white color palette
- ✅ Sticky navigation bar with mobile menu
- ✅ Smooth scroll animations
- ✅ Form validation with JavaScript
- ✅ Professional typography (Playfair Display + Open Sans)
- ✅ Font Awesome icons
- ✅ Interactive elements and hover effects
- ✅ Accessibility features
- ✅ RGPD compliance notices

## 🎨 Design

### Color Palette
- **Primary Blue**: #1a3a52
- **Secondary Blue**: #2c5f8d
- **Gold Accent**: #c9a961
- **White**: #ffffff
- **Off-white**: #f8f9fa

### Typography
- **Headings**: Playfair Display (Serif)
- **Body Text**: Open Sans (Sans-serif)

## 📁 Project Structure

```
notaire/
├── index.html              # Home page
├── about.html              # About page
├── services.html           # Services page
├── request.html            # Document request page
├── appointment.html        # Appointment booking page
├── contact.html            # Contact page
├── css/
│   └── styles.css         # Main stylesheet
├── js/
│   └── main.js            # Main JavaScript file
├── images/                 # Image assets (placeholder)
└── documents/             # Downloadable documents (placeholder)
```

## 🚀 Getting Started

### Prerequisites
- A modern web browser (Chrome, Firefox, Safari, Edge)
- A local web server (optional, for testing)

### Installation

1. **Clone or download this repository**
   ```bash
   cd c:\Users\kamel\Desktop\programming\web\notaire
   ```

2. **Open in a web browser**
   - Simply open `index.html` in your browser
   - Or use a local web server:
     ```bash
     # Python 3
     python -m http.server 8000
     
     # Node.js (with http-server)
     npx http-server
     ```

3. **View the website**
   - Navigate to `http://localhost:8000` (if using a server)
   - Or directly open the HTML files

## 🔧 Customization

### Updating Content

1. **Contact Information**: Edit the footer and contact page with your actual details
2. **Google Maps**: Replace the iframe src in `contact.html` with your actual location
3. **Images**: Add professional photos to the `images/` folder
4. **Documents**: Add PDF documents to the `documents/` folder
5. **Colors**: Modify CSS variables in `:root` section of `styles.css`

### Key Files to Modify

- **Contact Info**: Edit footer in all HTML files
- **Services**: Update `services.html` with your specific services
- **Team Members**: Modify team section in `about.html`
- **Testimonials**: Update testimonial cards in `index.html`

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 992px
- **Desktop**: > 992px

## 🎯 Form Functionality

All forms include:
- Real-time validation
- Error messages
- Success notifications
- RGPD compliance notices

**Note**: Forms currently log to console. To make them functional:
1. Set up a backend server (Node.js, PHP, etc.)
2. Update form submission handlers in `js/main.js`
3. Integrate with an email service or database

## 🔐 Security & Privacy

- RGPD compliance notices included
- Form validation to prevent malicious input
- Secure form submission recommended for production
- SSL certificate recommended for production deployment

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📝 JavaScript Features

### Implemented Functionalities
- Mobile menu toggle
- Scroll animations (Intersection Observer)
- Form validation (email, phone, required fields)
- Date picker with weekend blocking
- Time slot generation
- Smooth scrolling
- Active navigation highlighting
- Document download handling

## 🎨 CSS Features

- CSS Variables for easy theming
- Flexbox and CSS Grid layouts
- Smooth transitions and animations
- Box shadow effects
- Responsive images
- Custom form styling
- Print-friendly styles

## 📄 License

This project is created for a notary office website. Feel free to customize and use it for your needs.

## 🤝 Support

For questions or issues:
- Email: contact@etude-notariale.fr
- Phone: 01 23 45 67 89

## 🔄 Future Enhancements

Potential improvements:
- Backend integration for forms
- Client portal for document access
- Online payment system
- Live chat support
- Blog/News section
- Multilingual support
- Advanced appointment scheduling with calendar integration

## 📊 Performance

- Optimized images recommended
- Minified CSS/JS for production
- CDN for Font Awesome and Google Fonts
- Lazy loading for images

## ✅ Checklist for Deployment

Before going live:
- [ ] Replace placeholder images with professional photos
- [ ] Update all contact information (phone, email, address)
- [ ] Configure Google Maps with actual location
- [ ] Set up backend for form submissions
- [ ] Test on multiple devices and browsers
- [ ] Set up SSL certificate
- [ ] Configure email notifications
- [ ] Add real client testimonials
- [ ] Create actual downloadable documents
- [ ] Optimize images for web
- [ ] Set up analytics (Google Analytics)
- [ ] Create 404 error page
- [ ] Test form submissions
- [ ] Verify RGPD compliance
- [ ] Set up backup system

## 👨‍💻 Development

Built with:
- HTML5
- CSS3 (Custom properties, Flexbox, Grid)
- Vanilla JavaScript (ES6+)
- Font Awesome 6.4.0
- Google Fonts (Playfair Display, Open Sans)

---

**Created with care for professional notary services** ⚖️

Last updated: December 2024
