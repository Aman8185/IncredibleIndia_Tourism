// ============================================
// SCROLL ANIMATIONS (AOS - Animate On Scroll)
// ============================================

// Simple AOS implementation
const initAOS = () => {
    const elements = document.querySelectorAll('[data-aos]');
    
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('aos-animate');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    elements.forEach(element => {
        observer.observe(element);
    });
};

// Parallax effect
const initParallax = () => {
    const parallaxElements = document.querySelectorAll('.parallax-bg');
    
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        
        parallaxElements.forEach(element => {
            const rate = scrolled * 0.5;
            element.style.transform = `translateY(${rate}px)`;
        });
    });
};

// Stagger animation for grid items
const staggerAnimation = (selector, delay = 100) => {
    const items = document.querySelectorAll(selector);
    items.forEach((item, index) => {
        item.style.animationDelay = `${index * delay}ms`;
    });
};

// Card hover effects
const initCardEffects = () => {
    const cards = document.querySelectorAll('.destination-card, .package-card, .culture-card');
    
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transition = 'transform 0.3s ease, box-shadow 0.3s ease';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transition = 'transform 0.3s ease, box-shadow 0.3s ease';
        });
    });
};

// Text reveal animation
const initTextReveal = () => {
    const textElements = document.querySelectorAll('.text-reveal');
    
    textElements.forEach(element => {
        const text = element.textContent;
        const words = text.split(' ');
        element.innerHTML = '';
        
        words.forEach((word, index) => {
            const span = document.createElement('span');
            span.textContent = word + ' ';
            span.style.animationDelay = `${index * 0.1}s`;
            element.appendChild(span);
        });
    });
};

// Counter animation
const animateCounter = (element, target, duration = 2000) => {
    let start = 0;
    const increment = target / (duration / 16);
    
    const timer = setInterval(() => {
        start += increment;
        if (start >= target) {
            element.textContent = target;
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(start);
        }
    }, 16);
};

// Initialize all animations
document.addEventListener('DOMContentLoaded', () => {
    initAOS();
    initParallax();
    initCardEffects();
    
    // Stagger animations for grids
    staggerAnimation('.destination-card', 100);
    staggerAnimation('.experience-item', 100);
    staggerAnimation('.package-card', 150);
    staggerAnimation('.testimonial-card', 200);
});

// Smooth reveal on scroll
const revealOnScroll = () => {
    const reveals = document.querySelectorAll('.reveal');
    
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('revealed');
            }
        });
    }, {
        threshold: 0.15
    });
    
    reveals.forEach(reveal => {
        revealObserver.observe(reveal);
    });
};

document.addEventListener('DOMContentLoaded', revealOnScroll);



