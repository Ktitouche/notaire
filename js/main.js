/* ========================================
   NOTARY WEBSITE - MAIN JAVASCRIPT
   Handles navigation, animations, form validation, and interactions
   ======================================== */

// ========================================
// NAVIGATION BAR FUNCTIONALITY
// ========================================

/**
 * Mobile menu toggle functionality
 */
document.addEventListener('DOMContentLoaded', function () {
    const navbarToggle = document.querySelector('.navbar-toggle');
    const navbarMenu = document.querySelector('.navbar-menu');
    const navbar = document.querySelector('.navbar');

    // Toggle mobile menu
    if (navbarToggle) {
        navbarToggle.addEventListener('click', function () {
            navbarMenu.classList.toggle('active');

            // Animate hamburger icon
            const spans = navbarToggle.querySelectorAll('span');
            if (navbarMenu.classList.contains('active')) {
                spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
                spans[1].style.opacity = '0';
                spans[2].style.transform = 'rotate(-45deg) translate(7px, -6px)';
            } else {
                spans[0].style.transform = 'none';
                spans[1].style.opacity = '1';
                spans[2].style.transform = 'none';
            }
        });
    }

    // Close mobile menu when clicking on a link
    const menuLinks = document.querySelectorAll('.navbar-menu a');
    menuLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (window.innerWidth <= 768) {
                navbarMenu.classList.remove('active');
                const spans = navbarToggle.querySelectorAll('span');
                spans[0].style.transform = 'none';
                spans[1].style.opacity = '1';
                spans[2].style.transform = 'none';
            }
        });
    });

    // Add shadow to navbar on scroll
    window.addEventListener('scroll', function () {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Highlight active navigation link
    highlightActiveNavLink();
});

/**
 * Highlight the active navigation link based on current page
 */
function highlightActiveNavLink() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.navbar-menu a');

    navLinks.forEach(link => {
        const linkPage = link.getAttribute('href');
        if (linkPage === currentPage || (currentPage === '' && linkPage === 'index.html')) {
            link.classList.add('active');
        }
    });
}

// ========================================
// SCROLL ANIMATIONS
// ========================================

/**
 * Intersection Observer for scroll animations
 */
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function (entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

// Observe all elements with animation classes
document.addEventListener('DOMContentLoaded', function () {
    const animatedElements = document.querySelectorAll('.fade-in, .slide-in-left, .slide-in-right');
    animatedElements.forEach(element => {
        observer.observe(element);
    });
});

// ========================================
// SMOOTH SCROLLING
// ========================================

/**
 * Smooth scroll for anchor links
 */
document.addEventListener('DOMContentLoaded', function () {
    const smoothScrollLinks = document.querySelectorAll('a[href^="#"]');

    smoothScrollLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            const targetId = this.getAttribute('href');

            if (targetId === '#') return;

            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                e.preventDefault();
                const offsetTop = targetElement.offsetTop - 80; // Account for fixed navbar

                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
});

// ========================================
// FORM VALIDATION
// ========================================

/**
 * Email validation regex
 */
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/**
 * Phone validation regex (French format)
 */
const phoneRegex = /^(?:(?:\+|00)33|0)\s*[1-9](?:[\s.-]*\d{2}){4}$/;

/**
 * Validate a single form field
 * @param {HTMLElement} field - The input field to validate
 * @returns {boolean} - True if valid, false otherwise
 */
function validateField(field) {
    const fieldGroup = field.closest('.form-group');
    const fieldValue = field.value.trim();
    const fieldType = field.type;
    const fieldName = field.name;
    let isValid = true;
    let errorMessage = '';

    // Check if field is required and empty
    if (field.hasAttribute('required') && fieldValue === '') {
        isValid = false;
        errorMessage = 'Ce champ est obligatoire';
    }
    // Validate email
    else if (fieldType === 'email' && fieldValue !== '' && !emailRegex.test(fieldValue)) {
        isValid = false;
        errorMessage = 'Veuillez entrer une adresse e-mail valide';
    }
    // Validate phone
    else if (fieldType === 'tel' && fieldValue !== '' && !phoneRegex.test(fieldValue)) {
        isValid = false;
        errorMessage = 'Veuillez entrer un numéro de téléphone valide';
    }
    // Validate minimum length
    else if (field.hasAttribute('minlength')) {
        const minLength = parseInt(field.getAttribute('minlength'));
        if (fieldValue.length < minLength) {
            isValid = false;
            errorMessage = `Ce champ doit contenir au moins ${minLength} caractères`;
        }
    }

    // Update UI
    if (!isValid) {
        fieldGroup.classList.add('error');
        let errorElement = fieldGroup.querySelector('.error-message');
        if (!errorElement) {
            errorElement = document.createElement('div');
            errorElement.className = 'error-message';
            fieldGroup.appendChild(errorElement);
        }
        errorElement.textContent = errorMessage;
    } else {
        fieldGroup.classList.remove('error');
        const errorElement = fieldGroup.querySelector('.error-message');
        if (errorElement) {
            errorElement.textContent = '';
        }
    }

    return isValid;
}

/**
 * Validate entire form
 * @param {HTMLFormElement} form - The form to validate
 * @returns {boolean} - True if all fields are valid
 */
function validateForm(form) {
    const fields = form.querySelectorAll('input, select, textarea');
    let isFormValid = true;

    fields.forEach(field => {
        if (!validateField(field)) {
            isFormValid = false;
        }
    });

    return isFormValid;
}

/**
 * Show success message
 * @param {HTMLElement} form - The form element
 * @param {string} message - Success message to display
 */
function showSuccessMessage(form, message) {
    let successElement = form.querySelector('.success-message');

    if (!successElement) {
        successElement = document.createElement('div');
        successElement.className = 'success-message';
        form.insertBefore(successElement, form.firstChild);
    }

    successElement.textContent = message;
    successElement.classList.add('show');

    // Hide after 5 seconds
    setTimeout(() => {
        successElement.classList.remove('show');
    }, 5000);
}

/**
 * Initialize form validation
 */
document.addEventListener('DOMContentLoaded', function () {
    const forms = document.querySelectorAll('form');

    forms.forEach(form => {
        // Real-time validation on blur
        const fields = form.querySelectorAll('input, select, textarea');
        fields.forEach(field => {
            field.addEventListener('blur', function () {
                validateField(this);
            });

            // Remove error on input
            field.addEventListener('input', function () {
                const fieldGroup = this.closest('.form-group');
                if (fieldGroup.classList.contains('error')) {
                    validateField(this);
                }
            });
        });

        // Form submission
        form.addEventListener('submit', function (e) {
            e.preventDefault();

            if (validateForm(this)) {
                // Get form data
                const formData = new FormData(this);
                const formObject = {};
                formData.forEach((value, key) => {
                    formObject[key] = value;
                });

                console.log('Form submitted:', formObject);

                // Show success message
                const formType = this.id || 'form';
                let successMsg = 'Votre demande a été envoyée avec succès. Nous vous recontacterons dans les plus brefs délais.';

                if (formType.includes('appointment')) {
                    successMsg = 'Votre rendez-vous a été enregistré. Nous vous confirmerons la date et l\'heure par e-mail.';
                } else if (formType.includes('contact')) {
                    successMsg = 'Votre message a été envoyé. Nous vous répondrons dans les meilleurs délais.';
                }

                showSuccessMessage(this, successMsg);

                // Reset form
                this.reset();

                // Remove any error classes
                const formGroups = this.querySelectorAll('.form-group');
                formGroups.forEach(group => group.classList.remove('error'));
            } else {
                // Scroll to first error
                const firstError = this.querySelector('.form-group.error');
                if (firstError) {
                    const offsetTop = firstError.offsetTop - 100;
                    window.scrollTo({
                        top: offsetTop,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
});

// ========================================
// DATE PICKER FUNCTIONALITY
// ========================================

/**
 * Set minimum date for appointment date picker to today
 */
document.addEventListener('DOMContentLoaded', function () {
    const dateInputs = document.querySelectorAll('input[type="date"]');

    dateInputs.forEach(input => {
        // Set minimum date to today
        const today = new Date();
        const year = today.getFullYear();
        const month = String(today.getMonth() + 1).padStart(2, '0');
        const day = String(today.getDate()).padStart(2, '0');
        const minDate = `${year}-${month}-${day}`;

        input.setAttribute('min', minDate);

        // Disable weekends (optional)
        input.addEventListener('input', function () {
            const selectedDate = new Date(this.value);
            const dayOfWeek = selectedDate.getDay();

            // 0 = Sunday, 6 = Saturday
            if (dayOfWeek === 0 || dayOfWeek === 6) {
                alert('Veuillez sélectionner un jour de la semaine (lundi à vendredi).');
                this.value = '';
            }
        });
    });
});

// ========================================
// TIME SLOT FUNCTIONALITY (FOR APPOINTMENTS)
// ========================================

/**
 * Generate time slots for appointments
 */
function generateTimeSlots() {
    const timeSelect = document.getElementById('time');

    if (!timeSelect) return;

    const startHour = 9;  // 9:00 AM
    const endHour = 17;   // 5:00 PM
    const interval = 30;  // 30 minutes

    // Clear existing options except the first one
    timeSelect.innerHTML = '<option value="">Sélectionnez une heure</option>';

    for (let hour = startHour; hour < endHour; hour++) {
        for (let minute = 0; minute < 60; minute += interval) {
            const timeString = `${String(hour).padStart(2, '0')}:${String(minute).padStart(2, '0')}`;
            const option = document.createElement('option');
            option.value = timeString;
            option.textContent = timeString;
            timeSelect.appendChild(option);
        }
    }
}

document.addEventListener('DOMContentLoaded', generateTimeSlots);

// ========================================
// DOCUMENT DOWNLOAD HANDLING
// ========================================

/**
 * Handle document card clicks
 */
document.addEventListener('DOMContentLoaded', function () {
    const documentCards = document.querySelectorAll('.document-card');

    documentCards.forEach(card => {
        card.addEventListener('click', function () {
            const documentName = this.querySelector('.document-title').textContent;

            // In a real application, this would trigger a download
            console.log('Downloading:', documentName);
            alert(`Téléchargement de "${documentName}" en cours...\n\nNote: Dans la version finale, ce document sera téléchargé automatiquement.`);
        });
    });
});

// ========================================
// TESTIMONIALS ROTATION (OPTIONAL)
// ========================================

/**
 * Auto-rotate testimonials if multiple exist
 */
let currentTestimonial = 0;

function rotateTestimonials() {
    const testimonials = document.querySelectorAll('.testimonial-card');

    if (testimonials.length <= 1) return;

    // Hide all testimonials
    testimonials.forEach(testimonial => {
        testimonial.style.display = 'none';
    });

    // Show current testimonial
    testimonials[currentTestimonial].style.display = 'block';

    // Move to next testimonial
    currentTestimonial = (currentTestimonial + 1) % testimonials.length;
}

// Uncomment to enable auto-rotation every 5 seconds
// document.addEventListener('DOMContentLoaded', function() {
//     const testimonials = document.querySelectorAll('.testimonial-card');
//     if (testimonials.length > 1) {
//         setInterval(rotateTestimonials, 5000);
//     }
// });

// ========================================
// UTILITIES
// ========================================

/**
 * Debounce function to limit how often a function can fire
 * @param {Function} func - The function to debounce
 * @param {number} wait - Wait time in milliseconds
 * @returns {Function} - Debounced function
 */
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

/**
 * Format phone number as user types (French format)
 */
document.addEventListener('DOMContentLoaded', function () {
    const phoneInputs = document.querySelectorAll('input[type="tel"]');

    phoneInputs.forEach(input => {
        input.addEventListener('input', debounce(function (e) {
            let value = e.target.value.replace(/\s/g, '');

            // Format as XX XX XX XX XX
            if (value.length > 0) {
                value = value.match(/.{1,2}/g)?.join(' ') || value;
            }

            e.target.value = value;
        }, 300));
    });
});

// ========================================
// LOADING ANIMATION
// ========================================

/**
 * Hide loading screen when page is fully loaded
 */
window.addEventListener('load', function () {
    const loader = document.querySelector('.loader');
    if (loader) {
        loader.style.opacity = '0';
        setTimeout(() => {
            loader.style.display = 'none';
        }, 300);
    }
});

// ========================================
// BACK TO TOP BUTTON
// ========================================

/**
 * Show/hide back to top button
 */
document.addEventListener('DOMContentLoaded', function () {
    const backToTop = document.querySelector('.back-to-top');

    if (backToTop) {
        window.addEventListener('scroll', function () {
            if (window.scrollY > 300) {
                backToTop.style.display = 'flex';
            } else {
                backToTop.style.display = 'none';
            }
        });

        backToTop.addEventListener('click', function (e) {
            e.preventDefault();
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
});

// ========================================
// CONSOLE MESSAGE
// ========================================

console.log('%c🏛️ Étude Notariale Website', 'color: #c9a961; font-size: 20px; font-weight: bold;');
console.log('%cDéveloppé avec professionnalisme et élégance', 'color: #1a3a52; font-size: 12px;');
