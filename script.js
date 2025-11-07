// Fashion Fusion - Interactive JavaScript

// Smooth scrolling for navigation links
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

// Add to cart functionality
const addToCartButtons = document.querySelectorAll('.add-to-cart');
let cartCount = 0;

addToCartButtons.forEach(button => {
    button.addEventListener('click', function() {
        cartCount++;
        
        // Add animation to button
        this.textContent = 'Added!';
        this.style.background = '#4CAF50';
        this.style.color = 'white';
        this.style.border = '2px solid #4CAF50';
        
        // Reset button after 2 seconds
        setTimeout(() => {
            this.textContent = 'Add to Cart';
            this.style.background = 'white';
            this.style.color = '#333';
            this.style.border = '2px solid #333';
        }, 2000);
        
        // Show notification
        showNotification('Item added to cart!');
    });
});

// CTA buttons functionality
const ctaButtons = document.querySelectorAll('.cta-button, .cta-button-dark, .view-more');
ctaButtons.forEach(button => {
    button.addEventListener('click', function() {
        showNotification('Thank you for your interest! This is a demo site.');
    });
});

// Notification system
function showNotification(message) {
    // Create notification element
    const notification = document.createElement('div');
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: linear-gradient(135deg, #8b4513, #a0522d);
        color: white;
        padding: 1rem 2rem;
        border-radius: 50px;
        box-shadow: 0 5px 20px rgba(139, 69, 19, 0.3);
        z-index: 10000;
        animation: slideInRight 0.5s ease-out;
        font-weight: 600;
    `;
    
    // Add to document
    document.body.appendChild(notification);
    
    // Remove after 3 seconds
    setTimeout(() => {
        notification.style.animation = 'slideOutRight 0.5s ease-out';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 500);
    }, 3000);
}

// Add CSS animations
const style = document.createElement('style');
style.textContent = `
    @keyframes slideInRight {
        from {
            transform: translateX(400px);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOutRight {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(400px);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// Scroll animations for elements
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'fadeInUp 1s ease-out';
            entry.target.style.opacity = '1';
        }
    });
}, observerOptions);

// Observe product cards
document.querySelectorAll('.product-card').forEach(card => {
    card.style.opacity = '0';
    observer.observe(card);
});

// Header scroll effect
let lastScroll = 0;
const header = document.querySelector('header');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
        header.style.boxShadow = '0 5px 20px rgba(0,0,0,0.2)';
    } else {
        header.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
    }
    
    lastScroll = currentScroll;
});

// Mobile menu toggle (if needed in future)
const navLinks = document.querySelector('.nav-links');
const cartIcon = document.querySelector('.cart-icon');

// Add hover effect to cart icon
if (cartIcon) {
    cartIcon.addEventListener('click', function() {
        showNotification(`You have ${cartCount} item(s) in your cart`);
    });
}

console.log('Fashion Fusion website loaded successfully!');
console.log('Crafted with care for elegant fashion experiences.');
