document.addEventListener("DOMContentLoaded", () => {
    setupMobileMenu();
    setupFavoriteButton();
    setupSmoothScroll();
    setupHeroSlider();
});

// Mobil Menü Aç/Kapat
function setupMobileMenu() {
    const menuToggle = document.querySelector('.menu-toggle');
    const mobileMenu = document.querySelector('.mobile-menu');

    if (!menuToggle || !mobileMenu) return;

    menuToggle.addEventListener('click', () => {
        menuToggle.classList.toggle('menu-open');
        mobileMenu.classList.toggle('active');
    });

    document.addEventListener('click', (e) => {
        if (!menuToggle.contains(e.target) && !mobileMenu.contains(e.target)) {
            menuToggle.classList.remove('menu-open');
            mobileMenu.classList.remove('active');
        }
    });
}

// Favori Butonu
function setupFavoriteButton() {
    const favoriteBtn = document.querySelector('.favorite-btn');
    if (!favoriteBtn) return;

    let isFavorite = false;

    favoriteBtn.addEventListener('click', () => {
        isFavorite = !isFavorite;
        favoriteBtn.classList.toggle('active', isFavorite);
        
        favoriteBtn.style.animation = 'heartBeat 0.3s ease-in-out';
        setTimeout(() => favoriteBtn.style.animation = '', 300);
    });
}

// Smooth Scroll (Bağlantılar için)
function setupSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', (e) => {
            e.preventDefault();
            const target = document.querySelector(anchor.getAttribute('href'));
            if (!target) return;

            target.scrollIntoView({ behavior: 'smooth', block: 'start' });

            const menuToggle = document.querySelector('.menu-toggle');
            const mobileMenu = document.querySelector('.mobile-menu');
            if (menuToggle && mobileMenu) {
                menuToggle.classList.remove('menu-open');
                mobileMenu.classList.remove('active');
            }
        });
    });
}

// Hero Slider (Kayan Görseller)
document.addEventListener("DOMContentLoaded", () => {
    const slider = document.querySelector(".slider");
    const slides = document.querySelectorAll(".slider img");

    if (!slider || slides.length === 0) {
        console.error("Slider veya resimler bulunamadı!");
        return;
    }

    let index = 0;

    function slideImages() {
        slider.style.transform = `translateX(-${index * 100}%)`;
        index = (index + 1) % slides.length;
    }

    setInterval(slideImages, 3000); // 3 saniyede bir kaydır
    slideImages();
});
document.addEventListener("DOMContentLoaded", () => {
    setupHeroSlider(); // Slider başlat
});

function setupHeroSlider() {
    const slider = document.querySelector(".slider");
    const slides = document.querySelectorAll(".slider img");

    if (!slider || slides.length === 0) {
        console.error("Slider veya resimler bulunamadı!");
        return;
    }

    let index = 0;

    function slideImages() {
        slider.style.transform = `translateX(-${index * 100}%)`;
        index = (index + 1) % slides.length;
    }

    setInterval(slideImages, 3000);
    slideImages();
}
