// DESPI Missions - Enhanced with Bootstrap
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
    
    // Donation form handling
    const donationForm = document.getElementById('donationForm');
    const donationAmountButtons = document.querySelectorAll('.donation-amount');
    const customAmountInput = document.getElementById('customAmount');
    
    // Donation amount buttons
    donationAmountButtons.forEach(button => {
        button.addEventListener('click', function() {
            donationAmountButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            customAmountInput.value = this.dataset.amount;
        });
    });
    
    // Custom amount input
    customAmountInput.addEventListener('input', function() {
        donationAmountButtons.forEach(btn => btn.classList.remove('active'));
    });
    
    // Donation form submission
    if (donationForm) {
        donationForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const amount = customAmountInput.value;
            const type = document.getElementById('donationType').value;
            const designation = document.getElementById('designation').value;
            
            if (!amount || amount <= 0) {
                alert('Please enter a valid donation amount.');
                return;
            }
            
            // Show success message (in production, this would process the payment)
            alert(`Thank you for your donation of $${amount}! \n\nType: ${type}\nDesignation: ${designation}\n\nIn a real implementation, you would be redirected to a secure payment page.`);
            
            // Reset form
            donationForm.reset();
            donationAmountButtons.forEach(btn => btn.classList.remove('active'));
        });
    }
    
    // Contact form handling
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const subject = document.getElementById('subject').value;
            const message = document.getElementById('message').value;
            const inquiryType = document.getElementById('inquiryType').value;
            
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
            
            // Show success message
            alert(`Thank you ${name}! Your ${inquiryType} inquiry has been received. We will contact you at ${email} soon.`);
            
            // Reset form
            contactForm.reset();
        });
    }
    
    // Newsletter subscription
    const newsletterForm = document.querySelector('.newsletter .btn');
    const newsletterInput = document.querySelector('.newsletter input');
    
    if (newsletterForm && newsletterInput) {
        newsletterForm.addEventListener('click', function() {
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
            // In production, this would open a lightbox
            alert('In a real implementation, this would open a larger view of the image.');
        });
    });
    
    // Bootstrap scrollspy initialization
    const scrollSpy = new bootstrap.ScrollSpy(document.body, {
        target: '#mainNavbar',
        offset: 100
    });
    
    // Add active class to dropdown items when active
    document.addEventListener('activate.bs.scrollspy', function() {
        const activeSection = document.querySelector('.nav-link.active').getAttribute('href');
        document.querySelectorAll('.dropdown-item').forEach(item => {
            if (item.getAttribute('href') === activeSection) {
                item.classList.add('active');
            } else {
                item.classList.remove('active');
            }
        });
    });
    
    // Close mobile menu when clicking a link (Bootstrap handles this, but adding extra)
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
});