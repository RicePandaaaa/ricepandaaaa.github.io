document.addEventListener('DOMContentLoaded', function() {
    const menuBtn = document.getElementById('menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');

    // Ensure the mobile menu is hidden initially
    mobileMenu.classList.add('hidden');

    // Toggle the mobile menu on button click
    menuBtn.addEventListener('click', function() {
        if (mobileMenu.classList.contains('hidden')) {
            mobileMenu.classList.remove('hidden');
        } else {
            mobileMenu.classList.add('hidden');
        }
    });

    // Hide mobile menu when resizing to a screen width larger than 768px
    window.addEventListener('resize', function() {
        if (window.innerWidth >= 768) {
            if (!mobileMenu.classList.contains('hidden')) {
                mobileMenu.classList.add('hidden');
            }
        }
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('nav a');

    window.addEventListener('scroll', () => {
        let currentSection = '';

        sections.forEach(section => {
            const sectionTop = section.offsetTop - 180; // Adjust based on your header height
            const sectionHeight = section.clientHeight;

            if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
                currentSection = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');

            // Check for sections in groups
            if (
                (currentSection === 'intro' || currentSection === 'about') && 
                link.getAttribute('data-target') === 'intro'
            ) {
                link.classList.add('active');
            } else if (
                (currentSection === 'projects-banner' || currentSection === 'projects') && 
                link.getAttribute('data-target') === 'projects-banner'
            ) {
                link.classList.add('active');
            } else if (
                (currentSection === 'teachers-banner' || currentSection === 'teachers') && 
                link.getAttribute('data-target') === 'teachers-banner'
            ) {
                link.classList.add('active');
            }
        });
    });
});




