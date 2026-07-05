/**
 * Academic Personal Website - Interactive Script
 * Yuhang Zhao's Portfolio
 */

document.addEventListener('DOMContentLoaded', function() {
    const navbar = document.getElementById('navbar');
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.getElementById('navMenu');
    const navLinks = document.querySelectorAll('.nav-link');
    const backToTop = document.getElementById('backToTop');
    const yearSpan = document.getElementById('year');
    
    // Update footer year
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }
    
    // Navbar show/hide on scroll
    let lastScrollY = window.scrollY;
    let heroHeight = 0;
    
    const heroSection = document.querySelector('.hero');
    if (heroSection) {
        heroHeight = heroSection.offsetHeight * 0.6;
    }
    
    function updateNavbar() {
        const currentScrollY = window.scrollY;
        
        if (currentScrollY > heroHeight) {
            navbar.classList.add('visible');
        } else {
            navbar.classList.remove('visible');
        }
        
        lastScrollY = currentScrollY;
    }
    
    window.addEventListener('scroll', updateNavbar, { passive: true });
    updateNavbar();
    
    // Mobile navigation toggle
    if (navToggle && navMenu) {
        navToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            
            const hamburger = navToggle.querySelector('.hamburger');
            if (navMenu.classList.contains('active')) {
                hamburger.style.background = 'transparent';
                hamburger.style.transform = 'rotate(45deg)';
            } else {
                hamburger.style.background = '';
                hamburger.style.transform = '';
            }
        });
        
        // Close mobile menu on link click
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
                const hamburger = navToggle.querySelector('.hamburger');
                if (hamburger) {
                    hamburger.style.background = '';
                    hamburger.style.transform = '';
                }
            });
        });
    }
    
    // Active nav link highlighting
    const sections = document.querySelectorAll('.section[id]');
    
    function highlightNavLink() {
        const scrollPos = window.scrollY + 150;
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');
            
            if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === '#' + sectionId) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }
    
    window.addEventListener('scroll', highlightNavLink, { passive: true });
    
    // Back to top button
    function toggleBackToTop() {
        if (window.scrollY > 600) {
            backToTop.classList.add('visible');
        } else {
            backToTop.classList.remove('visible');
        }
    }
    
    window.addEventListener('scroll', toggleBackToTop, { passive: true });
    toggleBackToTop();
    
    backToTop.addEventListener('click', function(e) {
        e.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    // Scroll reveal animation
    const revealElements = document.querySelectorAll(
        '.section-header, .timeline-item, .research-card, .pub-item, ' +
        '.project-card, .award-card, .pres-item, .gallery-item, .contact-card, .about-text, .about-stats'
    );
    
    revealElements.forEach(el => el.classList.add('reveal'));
    
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                revealObserver.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });
    
    revealElements.forEach(el => revealObserver.observe(el));
    
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href === '#') return;
            
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                const offsetTop = target.offsetTop - 80;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Gallery image click placeholder
    document.querySelectorAll('.gallery-item:not(.placeholder)').forEach(item => {
        item.addEventListener('click', function() {
            const img = this.querySelector('.gallery-img');
            if (img) {
                // Simple lightbox could be added here
                console.log('Gallery image clicked:', img.alt);
            }
        });
    });
    
    // Print-friendly styles
    const printStyles = document.createElement('style');
    printStyles.textContent = `
        @media print {
            .navbar, .back-to-top, .hero-scroll, .hero-actions, .footer-social {
                display: none !important;
            }
            .hero {
                min-height: auto;
                padding: 3rem 0;
            }
            .section {
                padding: 2rem 0;
                page-break-inside: avoid;
            }
            .project-card, .pub-item, .award-card {
                page-break-inside: avoid;
            }
            body {
                background: white;
                color: black;
            }
            a {
                color: black;
                text-decoration: underline;
            }
            a[href]::after {
                content: " (" attr(href) ")";
                font-size: 0.75em;
                color: #666;
            }
        }
    `;
    document.head.appendChild(printStyles);
    
    // Console greeting
    console.log('%c Yuhang Zhao ', 'background: #1e3a5f; color: #fff; font-size: 20px; font-weight: bold; padding: 8px 16px; border-radius: 4px;');
    console.log('%c 欢迎访问我的个人学术主页！\n如有合作意向，请通过页面底部联系方式与我联系。', 'font-size: 14px; color: #1e3a5f;');
});
