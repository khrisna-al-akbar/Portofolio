document.addEventListener('DOMContentLoaded', function() {
    const header = document.getElementById('main-header');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            header.classList.add('bg-dark-bg', 'shadow-lg');
            header.classList.remove('bg-dark-bg/70', 'backdrop-blur-[5px]');
        } else {
            header.classList.remove('bg-dark-bg', 'shadow-lg');
            header.classList.add('bg-dark-bg/70', 'backdrop-blur-[5px]');
        }
    });

    const textSpan = document.getElementById('text-cycle');
    const phrases = [
        "Digital Explorer",
        "IoT Creator",
        "Future Multi-Talent Engineer",
        "8th Grade Student"
    ];
    let phraseIndex = 0;
    function cycleText() {
        textSpan.style.opacity = 0;
        setTimeout(() => {
            phraseIndex = (phraseIndex + 1) % phrases.length;
            textSpan.textContent = phrases[phraseIndex];
            textSpan.style.opacity = 1;
        }, 400);
    }
    setInterval(cycleText, 3000);

    const mobileMenuIcon = document.getElementById('mobile-menu-icon');
    const mobileNavOverlay = document.getElementById('mobile-nav-overlay');
    const overlayNavLinks = document.querySelectorAll('.overlay-nav-links a');
    const body = document.body;
    const navListItems = mobileNavOverlay.querySelectorAll('li');

    mobileMenuIcon.addEventListener('click', function() {
        const isOpen = body.classList.toggle('menu-open');
        body.classList.toggle('overflow-hidden'); 
        
        if (isOpen) {
            mobileNavOverlay.style.visibility = 'visible';
            mobileNavOverlay.style.clipPath = 'circle(150% at 100% 0)';
            mobileMenuIcon.style.transform = 'rotate(90deg)';
        } else {
            setTimeout(() => {
                mobileNavOverlay.style.visibility = 'hidden';
            }, 500); 
            mobileNavOverlay.style.clipPath = 'circle(0% at 100% 0)';
            mobileMenuIcon.style.transform = 'rotate(0deg)';
        }
        
        navListItems.forEach((link, index) => {
            if (isOpen) {
                link.style.transitionDelay = `${400 + index * 100}ms`;
                link.classList.remove('opacity-0', 'translate-y-2.5');
                link.classList.add('opacity-100', 'translate-y-0');
            } else {
                link.style.transitionDelay = '0ms';
                link.classList.remove('opacity-100', 'translate-y-0');
                link.classList.add('opacity-0', 'translate-y-2.5');
            }
        });
    });

    overlayNavLinks.forEach(link => {
        link.addEventListener('click', function() {
            body.classList.remove('menu-open', 'overflow-hidden');
            mobileMenuIcon.style.transform = 'rotate(0deg)';
            
            mobileNavOverlay.style.clipPath = 'circle(0% at 100% 0)';
            setTimeout(() => {
                mobileNavOverlay.style.visibility = 'hidden';
            }, 500); 

            navListItems.forEach(link => {
                link.style.transitionDelay = '0ms';
                link.classList.remove('opacity-100', 'translate-y-0');
                link.classList.add('opacity-0', 'translate-y-2.5');
            });
        });
    });
});