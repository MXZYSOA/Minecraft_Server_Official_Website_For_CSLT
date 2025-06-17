// Hero Section Animation Controller
document.addEventListener('DOMContentLoaded', function() {
    const heroSection = document.querySelector('.hero-section');
    
    if (heroSection) {
        // Add loaded class after a short delay to trigger animations
        setTimeout(() => {
            heroSection.classList.add('loaded');
            
            // Clean up will-change after animations complete
            setTimeout(() => {
                const animatedElements = heroSection.querySelectorAll('.fade-in, .fade-in-delay, .fade-in-delay-2');
                animatedElements.forEach(el => {
                    el.style.willChange = 'auto';
                });
            }, 2000); // Wait for all animations to complete
        }, 100);
    }
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // Intersection Observer for scroll animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in-up');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    // Observe cards and other elements for scroll animations
    document.querySelectorAll('.card, .list-group-item').forEach(el => {
        observer.observe(el);
    });
});

// Parallax effect for hero section with performance optimization
let ticking = false;

function updateParallax() {
    const heroSection = document.querySelector('.hero-section');
    if (heroSection) {
        const scrolled = window.pageYOffset;
        const rate = scrolled * -0.3; // Reduced parallax intensity
        heroSection.style.transform = `translate3d(0, ${rate}px, 0)`;
    }
    ticking = false;
}

window.addEventListener('scroll', function() {
    if (!ticking) {
        requestAnimationFrame(updateParallax);
        ticking = true;
    }
});