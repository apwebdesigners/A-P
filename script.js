// Simple form validation
document.querySelector('form')?.addEventListener('submit', function(e) {
    e.preventDefault();
    const name = document.querySelector('input[type="text"]').value;
    const email = document.querySelector('input[type="email"]').value;
    const message = document.querySelector('textarea').value;

    if (name && email && message) {
        alert('Hvala na poruci! Kontaktirat ćemo vas uskoro.');
        // Here you would typically send the form data to a server
        this.reset();
    } else {
        alert('Molimo popunite sva polja.');
    }
});

// Sticky header
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// Cookie consent banner
window.addEventListener('DOMContentLoaded', () => {
    if (!localStorage.getItem('cookieConsent')) {
        const banner = document.createElement('div');
        banner.id = 'cookie-banner';
        banner.innerHTML = `
            <div class="cookie-content">
                <p>Ova web stranica koristi kolačiće kako bi poboljšala vaše iskustvo. Kliknite "Prihvati" da nastavite ili "Odbij" da napustite stranicu.</p>
                <div class="cookie-buttons">
                    <button id="accept-cookies" class="btn">Prihvati</button>
                    <button id="decline-cookies">Odbij</button>
                </div>
            </div>
        `;
        document.body.appendChild(banner);

        document.getElementById('accept-cookies').addEventListener('click', () => {
            localStorage.setItem('cookieConsent', 'accepted');
            banner.style.display = 'none';
        });

        document.getElementById('decline-cookies').addEventListener('click', () => {
            window.location.href = 'https://www.google.com';
        });
    }

    // Scroll to top button
    const scrollTopBtn = document.createElement('button');
    scrollTopBtn.id = 'scroll-top-btn';
    scrollTopBtn.innerHTML = '↑';
    scrollTopBtn.style.display = 'none';
    document.body.appendChild(scrollTopBtn);

    scrollTopBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            scrollTopBtn.style.display = 'block';
        } else {
            scrollTopBtn.style.display = 'none';
        }
    });

    // Logo modal functionality
    const logoImg = document.querySelector('.about-logo img');
    const modal = document.getElementById('logo-modal');
    const modalImg = document.getElementById('modal-img');
    const closeBtn = document.querySelector('.close');

    if (logoImg) {
        logoImg.addEventListener('click', () => {
            modal.style.display = 'flex';
        });
    }

    if (closeBtn) {
        closeBtn.addEventListener('click', () => {
            modal.style.display = 'none';
        });
    }

    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });

    // Mobile menu toggle
    const nav = document.querySelector('nav ul');
    const toggle = document.createElement('button');
    toggle.className = 'hamburger';
    toggle.innerHTML = '<span></span><span></span><span></span>';

    // Create overlay
    const overlay = document.createElement('div');
    overlay.className = 'menu-overlay';

    function toggleMenu() {
        nav.classList.toggle('show');
        toggle.classList.toggle('open');
        overlay.classList.toggle('show');
        document.body.style.overflow = nav.classList.contains('show') ? 'hidden' : 'auto';
    }

    toggle.addEventListener('click', toggleMenu);
    overlay.addEventListener('click', toggleMenu);

    document.querySelector('header .container').appendChild(toggle);
    document.body.appendChild(overlay);

    // Show toggle button on mobile
    if (window.innerWidth <= 768) {
        toggle.style.display = 'flex';
    }
});