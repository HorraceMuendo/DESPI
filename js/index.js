//   // Mobile menu toggle
//         const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
//         const navLinks = document.querySelector('.nav-links');
        
//         mobileMenuBtn.addEventListener('click', () => {
//             navLinks.classList.toggle('active');
//             mobileMenuBtn.innerHTML = navLinks.classList.contains('active') 
//                 ? '<i class="fas fa-times"></i>' 
//                 : '<i class="fas fa-bars"></i>';
//         });
        
//         // Close mobile menu when clicking a link
//         document.querySelectorAll('.nav-links a').forEach(link => {
//             link.addEventListener('click', () => {
//                 navLinks.classList.remove('active');
//                 mobileMenuBtn.innerHTML = '<i class="fas fa-bars"></i>';
//             });
//         });
        
//         // Navbar scroll effect
//         window.addEventListener('scroll', () => {
//             const header = document.querySelector('header');
//             if (window.scrollY > 100) {
//                 header.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.1)';
//             } else {
//                 header.style.boxShadow = 'none';
//             }
//         });
        
//         // Form submission
//         document.getElementById('contactForm').addEventListener('submit', function(e) {
//             e.preventDefault();
            
//             // Get form values
//             const name = document.getElementById('name').value;
//             const email = document.getElementById('email').value;
//             const message = document.getElementById('message').value;
            
//             // In a real application, you would send this data to a server
//             // For this demo, we'll just show an alert
//             alert(`Thank you ${name}! Your message has been received. We will contact you at ${email} soon.`);
            
//             // Reset form
//             document.getElementById('contactForm').reset();
//         });
        
//         // Smooth scrolling for anchor links
//         document.querySelectorAll('a[href^="#"]').forEach(anchor => {
//             anchor.addEventListener('click', function(e) {
//                 e.preventDefault();
                
//                 const targetId = this.getAttribute('href');
//                 if(targetId === '#') return;
                
//                 const targetElement = document.querySelector(targetId);
//                 if(targetElement) {
//                     window.scrollTo({
//                         top: targetElement.offsetTop - 80,
//                         behavior: 'smooth'
//                     });
//                 }
//             });
//         });



//         // Navbar scroll effect
// const navbar = document.querySelector('.navbar');
// const hamburger = document.querySelector('.hamburger');
// const navMenu = document.querySelector('.nav-menu');

// // Function to handle navbar scroll
// function handleScroll() {
//     if (window.scrollY > 50) {
//         navbar.classList.add('scrolled');
//     } else {
//         navbar.classList.remove('scrolled');
//     }
// }

// // Initial call
// handleScroll();

// // Add scroll event listener
// window.addEventListener('scroll', handleScroll);

// // Mobile menu toggle
// hamburger.addEventListener('click', () => {
//     hamburger.classList.toggle('active');
//     navMenu.classList.toggle('active');
// });

// // Close mobile menu when clicking a link
// document.querySelectorAll('.nav-link').forEach(link => {
//     link.addEventListener('click', () => {
//         hamburger.classList.remove('active');
//         navMenu.classList.remove('active');
//     });
// });

// // Dropdown functionality for mobile
// const dropdownItems = document.querySelectorAll('.nav-item');
// dropdownItems.forEach(item => {
//     if (item.querySelector('.dropdown')) {
//         item.addEventListener('click', (e) => {
//             if (window.innerWidth <= 768) {
//                 e.preventDefault();
//                 const dropdown = item.querySelector('.dropdown');
//                 dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';
//             }
//         });
//     }
// });

// // Smooth scrolling for anchor links
// document.querySelectorAll('a[href^="#"]').forEach(anchor => {
//     anchor.addEventListener('click', function(e) {
//         e.preventDefault();
        
//         const targetId = this.getAttribute('href');
//         if (targetId === '#') return;
        
//         const targetElement = document.querySelector(targetId);
//         if (targetElement) {
//             // Close mobile menu if open
//             hamburger.classList.remove('active');
//             navMenu.classList.remove('active');
            
//             // Calculate offset based on navbar height
//             const navbarHeight = navbar.scrolled ? navbar.offsetHeight : navbar.offsetHeight + 40;
//             const targetPosition = targetElement.offsetTop - navbarHeight;
            
//             window.scrollTo({
//                 top: targetPosition,
//                 behavior: 'smooth'
//             });
//         }
//     });
// });

// // Donate button functionality (example)
// document.querySelector('.donate-btn').addEventListener('click', function(e) {
//     e.preventDefault();
//     // In a real implementation, this would open a donation modal or redirect to donation page
//     alert('Thank you for your interest in supporting DESPI Missions! Donation functionality would be implemented here.');
// });

// // Close dropdowns when clicking outside
// document.addEventListener('click', function(e) {
//     if (!e.target.matches('.nav-link') && !e.target.matches('.dropdown a')) {
//         document.querySelectorAll('.dropdown').forEach(dropdown => {
//             if (window.innerWidth <= 768) {
//                 dropdown.style.display = 'none';
//             }
//         });
//     }
// });





// DESPI Missions - Main JavaScript File

document.addEventListener('DOMContentLoaded', function() {
    // DOM Elements
    const navbar = document.querySelector('.navbar');
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');
    const donateBtn = document.querySelector('.donate-btn');
    const contactForm = document.getElementById('contactForm');
    
    // Navbar Scroll Effect
    function handleNavbarScroll() {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    }
    
    // Initialize navbar state
    handleNavbarScroll();
    
    // Mobile Menu Toggle
    function toggleMobileMenu() {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
        
        // Prevent body scrolling when menu is open
        if (navMenu.classList.contains('active')) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
    }
    
    // Close Mobile Menu
    function closeMobileMenu() {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
        document.body.style.overflow = '';
    }
    
    // Handle dropdowns on mobile
    function handleMobileDropdowns() {
        const dropdownItems = document.querySelectorAll('.nav-item');
        
        dropdownItems.forEach(item => {
            const dropdown = item.querySelector('.dropdown');
            if (dropdown) {
                // On mobile, make entire nav-item clickable
                if (window.innerWidth <= 768) {
                    item.addEventListener('click', function(e) {
                        // Don't prevent default if clicking a link
                        if (e.target.tagName === 'A') return;
                        
                        e.preventDefault();
                        e.stopPropagation();
                        
                        // Close other dropdowns
                        document.querySelectorAll('.dropdown').forEach(d => {
                            if (d !== dropdown) d.style.display = 'none';
                        });
                        
                        // Toggle current dropdown
                        dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';
                    });
                }
            }
        });
    }
    
    // Smooth Scrolling for Anchor Links
    function initSmoothScrolling() {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                
                const targetId = this.getAttribute('href');
                if (targetId === '#') return;
                
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    // Close mobile menu if open
                    closeMobileMenu();
                    
                    // Calculate offset based on navbar height
                    const navbarHeight = navbar.offsetHeight;
                    const topBarHeight = window.innerWidth > 768 ? 40 : 80;
                    const offset = navbar.classList.contains('scrolled') ? navbarHeight : navbarHeight + topBarHeight;
                    
                    const targetPosition = targetElement.offsetTop - offset;
                    
                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                    
                    // Update URL without page jump
                    history.pushState(null, null, targetId);
                }
            });
        });
    }
    
    // Scroll Reveal Animation
    function initScrollReveal() {
        const fadeElements = document.querySelectorAll('.fade-in');
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        });
        
        fadeElements.forEach(element => {
            observer.observe(element);
        });
    }
    
    // Form Submission Handler
    function handleFormSubmission(e) {
        e.preventDefault();
        
        // Get form values
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const subject = document.getElementById('subject').value;
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
        
        // Show success message
        alert(`Thank you ${name}! Your message has been received. We will contact you at ${email} soon.`);
        
        // Reset form
        contactForm.reset();
    }
    
    // Donate Button Handler
    function handleDonateButton(e) {
        e.preventDefault();
        
        // Create donation modal
        const modal = document.createElement('div');
        modal.className = 'donation-modal';
        modal.innerHTML = `
            <div class="modal-content">
                <span class="close-modal">&times;</span>
                <h3>Support DESPI Missions</h3>
                <p>Thank you for your interest in supporting our ministry! Your donation helps us bring the gospel to unreached communities in Africa and beyond.</p>
                <div class="donation-options">
                    <button class="donation-amount" data-amount="25">$25</button>
                    <button class="donation-amount" data-amount="50">$50</button>
                    <button class="donation-amount" data-amount="100">$100</button>
                    <button class="donation-amount" data-amount="250">$250</button>
                    <div class="custom-amount">
                        <input type="number" placeholder="Other amount" min="1">
                        <span>$</span>
                    </div>
                </div>
                <button class="submit-donation">Continue to Donate</button>
                <p class="donation-note">You will be redirected to our secure payment portal.</p>
            </div>
        `;
        
        // Add modal styles
        const modalStyles = document.createElement('style');
        modalStyles.textContent = `
            .donation-modal {
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background-color: rgba(0, 0, 0, 0.8);
                display: flex;
                justify-content: center;
                align-items: center;
                z-index: 2000;
                animation: fadeIn 0.3s ease;
            }
            
            @keyframes fadeIn {
                from { opacity: 0; }
                to { opacity: 1; }
            }
            
            .modal-content {
                background-color: white;
                padding: 30px;
                border-radius: 10px;
                max-width: 500px;
                width: 90%;
                position: relative;
                animation: slideUp 0.3s ease;
            }
            
            @keyframes slideUp {
                from { transform: translateY(50px); opacity: 0; }
                to { transform: translateY(0); opacity: 1; }
            }
            
            .close-modal {
                position: absolute;
                top: 15px;
                right: 15px;
                font-size: 24px;
                cursor: pointer;
                color: var(--primary-blue);
            }
            
            .modal-content h3 {
                color: var(--primary-blue);
                margin-bottom: 15px;
                text-align: center;
            }
            
            .donation-options {
                display: grid;
                grid-template-columns: repeat(2, 1fr);
                gap: 10px;
                margin: 20px 0;
            }
            
            .donation-amount {
                padding: 15px;
                background-color: var(--light-gray);
                border: 2px solid var(--primary-green);
                border-radius: 5px;
                cursor: pointer;
                font-weight: bold;
                transition: all 0.3s;
            }
            
            .donation-amount:hover {
                background-color: var(--primary-green);
                color: white;
            }
            
            .custom-amount {
                grid-column: span 2;
                position: relative;
                margin-top: 10px;
            }
            
            .custom-amount input {
                width: 100%;
                padding: 15px 15px 15px 30px;
                border: 2px solid #ddd;
                border-radius: 5px;
                font-size: 16px;
            }
            
            .custom-amount span {
                position: absolute;
                left: 10px;
                top: 50%;
                transform: translateY(-50%);
                color: var(--primary-blue);
                font-weight: bold;
            }
            
            .submit-donation {
                width: 100%;
                padding: 15px;
                background-color: var(--primary-green);
                color: white;
                border: none;
                border-radius: 5px;
                font-size: 16px;
                font-weight: bold;
                cursor: pointer;
                transition: background-color 0.3s;
                margin-top: 10px;
            }
            
            .submit-donation:hover {
                background-color: var(--light-green);
            }
            
            .donation-note {
                text-align: center;
                font-size: 0.9rem;
                color: #666;
                margin-top: 15px;
            }
        `;
        
        document.head.appendChild(modalStyles);
        document.body.appendChild(modal);
        
        // Close modal functionality
        const closeModal = modal.querySelector('.close-modal');
        closeModal.addEventListener('click', () => {
            modal.remove();
            modalStyles.remove();
        });
        
        // Close modal when clicking outside
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.remove();
                modalStyles.remove();
            }
        });
        
        // Donation amount selection
        const donationAmounts = modal.querySelectorAll('.donation-amount');
        let selectedAmount = null;
        
        donationAmounts.forEach(button => {
            button.addEventListener('click', () => {
                donationAmounts.forEach(btn => btn.style.backgroundColor = '');
                donationAmounts.forEach(btn => btn.style.color = '');
                
                button.style.backgroundColor = var('--primary-green');
                button.style.color = 'white';
                selectedAmount = button.dataset.amount;
            });
        });
        
        // Custom amount input
        const customAmountInput = modal.querySelector('.custom-amount input');
        customAmountInput.addEventListener('input', () => {
            donationAmounts.forEach(btn => {
                btn.style.backgroundColor = '';
                btn.style.color = '';
            });
            selectedAmount = customAmountInput.value;
        });
        
        // Submit donation
        const submitDonation = modal.querySelector('.submit-donation');
        submitDonation.addEventListener('click', () => {
            const amount = selectedAmount || customAmountInput.value;
            
            if (!amount || amount <= 0) {
                alert('Please select or enter a donation amount.');
                return;
            }
            
            alert(`Thank you! You selected to donate $${amount}. In a real implementation, you would be redirected to a secure payment page.`);
            modal.remove();
            modalStyles.remove();
        });
    }
    
    // Close dropdowns when clicking outside
    function handleClickOutsideDropdown(e) {
        if (window.innerWidth > 768) {
            if (!e.target.matches('.nav-link') && !e.target.matches('.dropdown a')) {
                document.querySelectorAll('.dropdown').forEach(dropdown => {
                    dropdown.style.display = 'none';
                });
            }
        }
    }
    
    // Active nav link based on scroll position
    function setActiveNavLink() {
        const sections = document.querySelectorAll('section[id]');
        const navLinks = document.querySelectorAll('.nav-link');
        
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            const navbarHeight = navbar.offsetHeight;
            
            if (scrollY >= (sectionTop - navbarHeight - 100)) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    }
    
    // Initialize all functionality
    function init() {
        // Event Listeners
        window.addEventListener('scroll', () => {
            handleNavbarScroll();
            setActiveNavLink();
        });
        
        hamburger.addEventListener('click', toggleMobileMenu);
        
        navLinks.forEach(link => {
            link.addEventListener('click', closeMobileMenu);
        });
        
        document.addEventListener('click', handleClickOutsideDropdown);
        
        if (donateBtn) {
            donateBtn.addEventListener('click', handleDonateButton);
        }
        
        if (contactForm) {
            contactForm.addEventListener('submit', handleFormSubmission);
        }
        
        // Initialize features
        handleMobileDropdowns();
        initSmoothScrolling();
        initScrollReveal();
        setActiveNavLink();
        
        // Add fade-in class to sections
        document.querySelectorAll('section').forEach((section, index) => {
            if (!section.classList.contains('hero')) {
                section.classList.add('fade-in');
            }
        });
    }
    
    // Run initialization
    init();
    
    // Handle window resize
    let resizeTimeout;
    window.addEventListener('resize', () => {
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(() => {
            closeMobileMenu();
            handleMobileDropdowns();
        }, 250);
    });
    
    // Add active state to current nav link
    const style = document.createElement('style');
    style.textContent = `
        .nav-link.active {
            color: var(--light-green) !important;
        }
        
        .nav-link.active::after {
            width: 100% !important;
        }
        
        @media (max-width: 768px) {
            .nav-link.active {
                background-color: var(--light-gray);
                border-radius: 5px;
            }
        }
    `;
    document.head.appendChild(style);
});