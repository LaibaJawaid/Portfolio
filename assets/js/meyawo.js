/*!
=========================================================
* Meyawo Landing page - IMPROVED BY LAIBA
=========================================================
*/

// Smooth scroll
$(document).ready(function(){
    $(".navbar .nav-link").on('click', function(event) {
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 700, function(){
                window.location.hash = hash;
            });
        } 
    });
});

// Navbar toggle
$('#nav-toggle').click(function(){
    $(this).toggleClass('is-active')
    $('ul.nav').toggleClass('show');
});

// =========================================
// TYPING ANIMATIONS
// =========================================

// 1. Logic for Name (Types once: Laiba Jawaid)
const nameText = "Laiba Jawaid";
const nameElement = document.getElementById('static-name-type');
let nameIndex = 0;

function typeName() {
    if (nameIndex < nameText.length) {
        nameElement.innerHTML += nameText.charAt(nameIndex);
        nameIndex++;
        setTimeout(typeName, 100);
    } else {
        // Remove cursor after name finishes typing
        const cursor = document.querySelector('.header-title .cursor');
        if (cursor) {
            cursor.style.display = 'none';
        }
    }
}

// 2. Logic for Logo"Laiba Jawaid" Color Change on Scroll

const logo = document.querySelector('.logo.calligraphy');
const lightSections = document.querySelectorAll('.light-section'); // Sections where logo should be purple

const observerOptions = {
    root: null,
    threshold: 0.1, // Trigger when 10% of the section is visible
    rootMargin: "-50px 0px -90% 0px" // Only look at the top area where the logo sits
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            logo.classList.add('scrolled');
        } else {
            // Check if any other light section is still intersecting
            const anyVisible = Array.from(lightSections).some(section => {
                const rect = section.getBoundingClientRect();
                return rect.top <= 50 && rect.bottom >= 50;
            });
            if (!anyVisible) logo.classList.remove('scrolled');
        }
    });
}, observerOptions);

lightSections.forEach(section => observer.observe(section));

// 2. Logic for Roles (Loops: ML Engineer -> Data Analyst -> AI Enthusiast)
const roles = ["ML Engineer", "Data Analyst", "AI Enthusiast"];
const roleElement = document.getElementById('dynamic-role-type');
let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typeSpeed = 100;

function typeRoles() {
    const currentRole = roles[roleIndex];

    if (isDeleting) {
        roleElement.innerHTML = currentRole.substring(0, charIndex - 1);
        charIndex--;
        typeSpeed = 50;
    } else {
        roleElement.innerHTML = currentRole.substring(0, charIndex + 1);
        charIndex++;
        typeSpeed = 100;
    }

    if (!isDeleting && charIndex === currentRole.length) {
        isDeleting = true;
        typeSpeed = 2000;
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        roleIndex++;
        if (roleIndex === roles.length) {
            roleIndex = 0;
        }
        typeSpeed = 500;
    }

    setTimeout(typeRoles, typeSpeed);
}

// Start animations when window loads
window.addEventListener('load', function() {
    // Check if elements exist before starting animations
    if (nameElement && roleElement) {
        typeName();
        setTimeout(typeRoles, 1000);
    }
});

// =========================================
// CONTACT SECTION REVEAL ANIMATION
// =========================================

document.addEventListener("DOMContentLoaded", () => {
    const contactWrapper = document.querySelector('.contact-wrapper');

    if (contactWrapper) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('reveal');
                } else {
                    entry.target.classList.remove('reveal');
                }
            });
        }, { threshold: 0.15 });

        observer.observe(contactWrapper);
    }
});

// =========================================
// WHATSAPP SEND FUNCTION
// =========================================

function sendToWhatsApp() {
    const name = document.getElementById('wa-name').value.trim();
    const email = document.getElementById('wa-email').value.trim();
    const subject = document.getElementById('wa-subject').value.trim();
    const msg = document.getElementById('wa-message').value.trim();
    
    // Your actual WhatsApp number
    const phone = "923101151134";

    if(!name || !msg) {
        alert("Please fill in your Name and Message.");
        return;
    }

    let messageText = `*New Portfolio Contact*\n\n`;
    messageText += `*Name:* ${name}\n`;
    if(email) messageText += `*Email:* ${email}\n`;
    if(subject) messageText += `*Subject:* ${subject}\n`;
    messageText += `*Message:*\n${msg}`;

    const encodedText = encodeURIComponent(messageText);
    window.open(`https://wa.me/${phone}?text=${encodedText}`, '_blank');
}

// =========================================
// SKILLS SECTION ANIMATION
// =========================================

document.addEventListener("DOMContentLoaded", () => {
    const skillPanels = document.querySelectorAll('.skill-panel');
    
    if (skillPanels.length > 0) {
        const skillObserver = new IntersectionObserver((entries) => {
            entries.forEach((entry, index) => {
                if (entry.isIntersecting) {
                    setTimeout(() => {
                        entry.target.style.opacity = '1';
                        entry.target.style.transform = 'translateY(0)';
                    }, index * 100);
                }
            });
        }, { threshold: 0.1 });

        skillPanels.forEach(panel => {
            panel.style.opacity = '0';
            panel.style.transform = 'translateY(30px)';
            panel.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            skillObserver.observe(panel);
        });
    }
});

// =========================================
// PORTFOLIO CARDS HOVER EFFECT
// =========================================

document.addEventListener("DOMContentLoaded", () => {
    const portfolioCards = document.querySelectorAll('.portfolio-card');
    
    portfolioCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.02)';
            this.style.transition = 'transform 0.3s ease';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });
    });
});

// =========================================
// SCROLL TO TOP BUTTON (Optional Enhancement)
// =========================================

document.addEventListener("DOMContentLoaded", () => {
    // Create scroll to top button
    const scrollBtn = document.createElement('button');
    scrollBtn.innerHTML = '<i class="ti-arrow-up"></i>';
    scrollBtn.className = 'scroll-to-top';
    scrollBtn.style.cssText = `
        position: fixed;
        bottom: 30px;
        right: 30px;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        background: #695aa6;
        color: white;
        border: none;
        cursor: pointer;
        opacity: 0;
        visibility: hidden;
        transition: all 0.3s ease;
        z-index: 1000;
        box-shadow: 0 5px 15px rgba(105, 90, 166, 0.3);
    `;
    
    document.body.appendChild(scrollBtn);
    
    // Show/hide button on scroll
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            scrollBtn.style.opacity = '1';
            scrollBtn.style.visibility = 'visible';
        } else {
            scrollBtn.style.opacity = '0';
            scrollBtn.style.visibility = 'hidden';
        }
    });
    
    // Scroll to top on click
    scrollBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    // Hover effect
    scrollBtn.addEventListener('mouseenter', () => {
        scrollBtn.style.transform = 'scale(1.1)';
        scrollBtn.style.boxShadow = '0 8px 20px rgba(105, 90, 166, 0.4)';
    });
    
    scrollBtn.addEventListener('mouseleave', () => {
        scrollBtn.style.transform = 'scale(1)';
        scrollBtn.style.boxShadow = '0 5px 15px rgba(105, 90, 166, 0.3)';
    });
});

// =========================================
// FORM VALIDATION ENHANCEMENT
// =========================================

document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById('whatsapp-form');
    
    if (form) {
        const inputs = form.querySelectorAll('input, textarea');
        
        inputs.forEach(input => {
            input.addEventListener('blur', function() {
                if (this.value.trim() !== '') {
                    this.style.borderColor = '#1bb74f';
                } else if (this.hasAttribute('required')) {
                    this.style.borderColor = '#ec185d';
                }
            });
            
            input.addEventListener('focus', function() {
                this.style.borderColor = '#695aa6';
            });
        });
    }
});