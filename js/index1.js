// DESPI Missions - Simplified without animations
document.addEventListener('DOMContentLoaded', function() {
    // Navbar scroll effect
    const navbar = document.querySelector('.navbar-transition');
    
    function handleNavbarScroll() {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    }
    
    // Initialize navbar state
    handleNavbarScroll();
    window.addEventListener('scroll', handleNavbarScroll);
    
    // Form handling
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;
            
            // Basic validation
            if (!name || !email || !message) {
                alert('Please fill in all required fields.');
                return;
            }
            
            // Email validation
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                alert('Please enter a valid email address.');
                return;
            }
            
            // Success message
            alert(`Thank you ${name}! Your message has been sent. We will contact you soon.`);
            
            // Reset form
            contactForm.reset();
        });
    }
    
    // Newsletter subscription
    const newsletterBtn = document.querySelector('.newsletter .btn');
    const newsletterInput = document.querySelector('.newsletter input');
    
    if (newsletterBtn && newsletterInput) {
        newsletterBtn.addEventListener('click', function() {
            if (newsletterInput.value) {
                alert('Thank you for subscribing to our newsletter!');
                newsletterInput.value = '';
            } else {
                alert('Please enter your email address.');
            }
        });
    }
    
    // Gallery image click
    const galleryImages = document.querySelectorAll('#gallery img');
    
    galleryImages.forEach(img => {
        img.addEventListener('click', function() {
            alert('Image clicked. In a real implementation, this would open a larger view.');
        });
    });
    
    // Close mobile menu when clicking a link
    const navLinks = document.querySelectorAll('.nav-link, .dropdown-item');
    const navbarCollapse = document.querySelector('.navbar-collapse');
    
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (navbarCollapse.classList.contains('show')) {
                const bsCollapse = new bootstrap.Collapse(navbarCollapse);
                bsCollapse.hide();
            }
        });
    });
    
    // Fix scrolling for anchor links with fixed navbar
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            if (href === '#' || this.classList.contains('dropdown-toggle')) {
                return;
            }
            
            e.preventDefault();
            
            const targetElement = document.querySelector(href);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 100,
                    behavior: 'instant'
                });
            }
        });
    });
});




// Gallery

// Gallery Page JavaScript
document.addEventListener('DOMContentLoaded', function() {
    // Navbar scroll effect (same as main site)
    const navbar = document.querySelector('.navbar-transition');
    
    function handleNavbarScroll() {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    }
    
    handleNavbarScroll();
    window.addEventListener('scroll', handleNavbarScroll);
    
    // Gallery Filter Functionality
    const filterButtons = document.querySelectorAll('.filter-btn');
    const galleryItems = document.querySelectorAll('.gallery-item');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            
            // Add active class to clicked button
            this.classList.add('active');
            
            const filterValue = this.getAttribute('data-filter');
            
            // Filter gallery items
            galleryItems.forEach(item => {
                if (filterValue === 'all' || item.getAttribute('data-category') === filterValue) {
                    item.style.display = 'block';
                    setTimeout(() => {
                        item.style.opacity = '1';
                        item.style.transform = 'scale(1)';
                    }, 10);
                } else {
                    item.style.opacity = '0';
                    item.style.transform = 'scale(0.8)';
                    setTimeout(() => {
                        item.style.display = 'none';
                    }, 300);
                }
            });
        });
    });
    
    // Lightbox configuration
    if (typeof lightbox !== 'undefined') {
        lightbox.option({
            'resizeDuration': 300,
            'wrapAround': true,
            'albumLabel': 'Image %1 of %2',
            'positionFromTop': 100,
            'fadeDuration': 300
        });
    }
    
    // Video play functionality
    const videoCards = document.querySelectorAll('.video-card');
    
    videoCards.forEach(card => {
        card.addEventListener('click', function() {
            alert('In a real implementation, this would open a video player with the selected mission video.');
        });
    });
    
    // Newsletter subscription
    const newsletterBtn = document.querySelector('.newsletter .btn');
    const newsletterInput = document.querySelector('.newsletter input');
    
    if (newsletterBtn && newsletterInput) {
        newsletterBtn.addEventListener('click', function() {
            if (newsletterInput.value) {
                alert('Thank you for subscribing to our newsletter!');
                newsletterInput.value = '';
            } else {
                alert('Please enter your email address.');
            }
        });
    }
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            if (href === '#' || this.classList.contains('dropdown-toggle')) {
                return;
            }
            
            e.preventDefault();
            
            const targetElement = document.querySelector(href);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 100,
                    behavior: 'smooth'
                });
            }
        });
    });
});





// Initialize carousel with autoplay
const carousel = document.getElementById('galleryCarousel');
if (carousel) {
    // Bootstrap 5 carousel automatically handles autoplay with data-bs-ride="carousel"
    // You can add custom interval if needed
    const galleryCarousel = new bootstrap.Carousel(carousel, {
        interval: 5000, // 5 seconds
        wrap: true,
        pause: 'hover'
    });
}