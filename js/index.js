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




// Contact Page JavaScript
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
    
    handleNavbarScroll();
    window.addEventListener('scroll', handleNavbarScroll);
    
    // Form validation and submission
    const contactForm = document.getElementById('contactFormPage');
    
    if (contactForm) {
        // Form validation
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            if (!this.checkValidity()) {
                e.stopPropagation();
                this.classList.add('was-validated');
                return;
            }
            
            // Get form data
            const formData = {
                name: document.getElementById('fullName').value,
                email: document.getElementById('email').value,
                phone: document.getElementById('phone').value,
                country: document.getElementById('country').value,
                inquiryType: document.getElementById('inquiryType').value,
                subject: document.getElementById('subject').value,
                message: document.getElementById('message').value,
                newsletter: document.getElementById('newsletter').checked
            };
            
            // Show success message
            showSuccessMessage(formData);
            
            // Reset form
            this.reset();
            this.classList.remove('was-validated');
        });
    }
    
    // Success message function
    function showSuccessMessage(data) {
        const message = `
            <div style="text-align: center; padding: 30px;">
                <i class="fas fa-check-circle" style="color: #2a9d8f; font-size: 4rem; margin-bottom: 20px;"></i>
                <h3 style="color: #2a9d8f; margin-bottom: 20px;">Message Sent Successfully!</h3>
                <p style="margin-bottom: 25px;">Thank you ${data.name}! Your ${data.inquiryType} inquiry has been received.</p>
                <div style="background: #f8f9fa; padding: 20px; border-radius: 10px; margin: 20px 0; text-align: left;">
                    <p><strong>Reference:</strong> DESPI-${Date.now().toString().slice(-6)}</p>
                    <p><strong>Email:</strong> ${data.email}</p>
                    <p><strong>Subject:</strong> ${data.subject}</p>
                    <p><strong>Type:</strong> ${data.inquiryType}</p>
                </div>
                <p style="color: #666;">We'll respond to your inquiry within 24-48 hours.</p>
                <button class="btn btn-primary-green mt-3" onclick="this.closest('.custom-alert').remove()">
                    OK
                </button>
            </div>
        `;
        
        showCustomAlert(message);
    }
    
    // Custom alert function
    function showCustomAlert(content) {
        const alertDiv = document.createElement('div');
        alertDiv.className = 'custom-alert';
        alertDiv.innerHTML = content;
        
        document.body.appendChild(alertDiv);
        
        // Add CSS for custom alert
        if (!document.querySelector('#alert-styles')) {
            const style = document.createElement('style');
            style.id = 'alert-styles';
            style.textContent = `
                .custom-alert {
                    position: fixed;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    background: rgba(0, 0, 0, 0.8);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    z-index: 9999;
                }
                .custom-alert > div {
                    background: white;
                    padding: 40px;
                    border-radius: 15px;
                    max-width: 500px;
                    width: 90%;
                    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
                }
            `;
            document.head.appendChild(style);
        }
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
    
    // Newsletter subscription
    const newsletterBtn = document.querySelector('.newsletter .btn');
    const newsletterInput = document.querySelector('.newsletter input');
    
    if (newsletterBtn && newsletterInput) {
        newsletterBtn.addEventListener('click', function() {
            if (newsletterInput.value) {
                showCustomAlert(`
                    <div style="text-align: center; padding: 30px;">
                        <i class="fas fa-envelope-open-text" style="color: #3a86ff; font-size: 4rem; margin-bottom: 20px;"></i>
                        <h3 style="color: #3a86ff; margin-bottom: 20px;">Thank You for Subscribing!</h3>
                        <p>You'll now receive our monthly newsletter with mission updates, prayer requests, and inspiring stories.</p>
                        <button class="btn btn-primary-green mt-3" onclick="this.closest('.custom-alert').remove()">
                            OK
                        </button>
                    </div>
                `);
                newsletterInput.value = '';
            } else {
                showCustomAlert(`
                    <div style="text-align: center; padding: 30px;">
                        <i class="fas fa-exclamation-circle" style="color: #dc3545; font-size: 4rem; margin-bottom: 20px;"></i>
                        <h3 style="color: #dc3545; margin-bottom: 20px;">Email Required</h3>
                        <p>Please enter your email address to subscribe to our newsletter.</p>
                        <button class="btn btn-primary-green mt-3" onclick="this.closest('.custom-alert').remove()">
                            OK
                        </button>
                    </div>
                `);
            }
        });
    }
    
    // FAQ accordion animation
    const accordionButtons = document.querySelectorAll('.accordion-button');
    
    accordionButtons.forEach(button => {
        button.addEventListener('click', function() {
            const icon = this.querySelector('.fas');
            if (icon) {
                if (this.classList.contains('collapsed')) {
                    icon.classList.remove('fa-chevron-down');
                    icon.classList.add('fa-chevron-up');
                } else {
                    icon.classList.remove('fa-chevron-up');
                    icon.classList.add('fa-chevron-down');
                }
            }
        });
    });
});





// Donations Page JavaScript
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
    
    handleNavbarScroll();
    window.addEventListener('scroll', handleNavbarScroll);
    
    // Print Bank Details
    const printBtn = document.getElementById('printDetails');
    if (printBtn) {
        printBtn.addEventListener('click', function() {
            const bankDetails = `
DESPI Missions - Bank Transfer Details
======================================

Bank Information:
-----------------
Bank Name: Equity Bank Limited
Bank Address: Upper hills, Hallessalassi Road, Nairobi, Kenya
Account Name: JULIET AND TIMOTHY
Account Number: 20012 1111 4989

Transfer Information:
---------------------
SWIFT Code: EQBKENA
FED.WIRE: 021000089
Correspondent Bank: Citibank N.A New York
Correspondent SWIFT: CITIUS33

Important Instructions:
-----------------------
1. Always include "DESPI Donation" in the transfer reference
2. Contact us after making a transfer for confirmation
3. Keep your transaction receipt for reference
4. Tax receipts available upon request

Contact Information:
-------------------
Email: timjuel@yahoo.com
Phone: +211 926 920 011
            `;
            
            const printWindow = window.open('', '_blank');
            printWindow.document.write(`
                <!DOCTYPE html>
                <html>
                <head>
                    <title>DESPI Bank Details</title>
                    <style>
                        body { font-family: Arial, sans-serif; padding: 30px; max-width: 800px; margin: 0 auto; }
                        h1 { color: #0d3b66; border-bottom: 3px solid #2a9d8f; padding-bottom: 10px; }
                        .section { margin-bottom: 25px; }
                        .section h2 { color: #2a9d8f; font-size: 18px; margin-bottom: 10px; }
                        .detail { margin-bottom: 15px; }
                        .detail strong { display: inline-block; width: 200px; }
                        .instructions { background: #f5f5f5; padding: 20px; border-radius: 10px; margin: 25px 0; }
                        .contact { margin-top: 30px; padding-top: 20px; border-top: 2px dashed #ccc; }
                        @media print {
                            .no-print { display: none; }
                            body { font-size: 12pt; }
                        }
                    </style>
                </head>
                <body>
                    <h1>DESPI Missions - Bank Transfer Details</h1>
                    
                    <div class="section">
                        <h2>Bank Information</h2>
                        <div class="detail"><strong>Bank Name:</strong> Equity Bank Limited</div>
                        <div class="detail"><strong>Bank Address:</strong> Upper hills, Hallessalassi Road, Nairobi, Kenya</div>
                        <div class="detail"><strong>Account Name:</strong> JULIET AND TIMOTHY</div>
                        <div class="detail"><strong>Account Number:</strong> 20012 1111 4989</div>
                    </div>
                    
                    <div class="section">
                        <h2>Transfer Information</h2>
                        <div class="detail"><strong>SWIFT Code:</strong> EQBKENA</div>
                        <div class="detail"><strong>FED.WIRE:</strong> 021000089</div>
                        <div class="detail"><strong>Correspondent Bank:</strong> Citibank N.A New York</div>
                        <div class="detail"><strong>Correspondent SWIFT:</strong> CITIUS33</div>
                    </div>
                    
                    <div class="instructions">
                        <h2>Important Instructions</h2>
                        <p>✓ Always include "DESPI Donation" in the transfer reference</p>
                        <p>✓ Contact us after making a transfer for confirmation</p>
                        <p>✓ Keep your transaction receipt for reference</p>
                        <p>✓ Tax receipts available upon request</p>
                    </div>
                    
                    <div class="contact">
                        <h2>Contact Information</h2>
                        <p><strong>Email:</strong> timjuel@yahoo.com</p>
                        <p><strong>Phone:</strong> +211 926 920 011</p>
                    </div>
                    
                    <div class="no-print" style="margin-top: 30px;">
                        <button onclick="window.print()" style="padding: 10px 20px; background: #2a9d8f; color: white; border: none; border-radius: 5px; cursor: pointer;">Print</button>
                        <button onclick="window.close()" style="padding: 10px 20px; background: #ccc; color: #333; border: none; border-radius: 5px; cursor: pointer; margin-left: 10px;">Close</button>
                    </div>
                    
                    <script>
                        window.onload = function() {
                            window.print();
                        }
                    </script>
                </body>
                </html>
            `);
            printWindow.document.close();
        });
    }
    
    // Copy Bank Details
    const copyBtn = document.getElementById('copyDetails');
    if (copyBtn) {
        copyBtn.addEventListener('click', function() {
            const bankDetails = `Equity Bank Limited
Upper hills, Hallessalassi Road, Nairobi, Kenya

Account Name: JULIET AND TIMOTHY
Account Number: 20012 1111 4989

SWIFT Code: EQBKENA
FED.WIRE: 021000089
Correspondent Bank: Citibank N.A New York
Correspondent SWIFT: CITIUS33

Important: Include "DESPI Donation" in transfer reference`;

            navigator.clipboard.writeText(bankDetails).then(() => {
                // Show success message
                const originalText = copyBtn.innerHTML;
                copyBtn.innerHTML = '<i class="fas fa-check me-2"></i>Copied!';
                copyBtn.classList.remove('btn-outline-primary-blue');
                copyBtn.classList.add('btn-primary-green');
                
                setTimeout(() => {
                    copyBtn.innerHTML = originalText;
                    copyBtn.classList.remove('btn-primary-green');
                    copyBtn.classList.add('btn-outline-primary-blue');
                }, 2000);
            }).catch(err => {
                console.error('Failed to copy: ', err);
                alert('Failed to copy details. Please select and copy manually.');
            });
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