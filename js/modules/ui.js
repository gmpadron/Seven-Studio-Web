// Basic UI Interactions
export function initUI() {
    const formPanel = document.getElementById('floating-form-panel');
    const toggleBtn = document.getElementById('toggle-form-btn');
    const closeBtn = document.getElementById('close-form-btn');
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const nav = document.querySelector('.main-nav');
    const triggerBtns = document.querySelectorAll('.trigger-form');
    const bgVideo = document.getElementById('bg-video');

    // Form Logic
    function openForm() {
        if (formPanel) formPanel.classList.add('open');
    }

    function closeForm() {
        if (formPanel) formPanel.classList.remove('open');
    }

    if (toggleBtn) {
        toggleBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            if (formPanel.classList.contains('open')) {
                closeForm();
            } else {
                openForm();
            }
        });
    }

    if (closeBtn) closeBtn.addEventListener('click', closeForm);

    triggerBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            if (e) e.preventDefault();
            openForm();
            if (nav && nav.classList.contains('active')) {
                closeNavMenu();
            }
        });
    });

    if (window.innerWidth >= 1024) {
        openForm();
    }

    // Mobile Menu
    function syncMenuIcon(isOpen) {
        if (!mobileMenuBtn) return;
        const icon = mobileMenuBtn.querySelector('i');
        if (!icon) return;
        icon.classList.toggle('fa-xmark', isOpen);
        icon.classList.toggle('fa-bars', !isOpen);
    }

    function openNavMenu() {
        if (!nav) return;
        nav.classList.add('active');
        nav.classList.remove('closing');
        syncMenuIcon(true);
    }

    function closeNavMenu() {
        if (!nav || !nav.classList.contains('active')) return;
        nav.classList.add('closing');
        syncMenuIcon(false);
        setTimeout(() => {
            nav.classList.remove('active');
            nav.classList.remove('closing');
        }, 300);
    }

    function toggleNavMenu() {
        if (!nav) return;
        if (nav.classList.contains('active')) {
            closeNavMenu();
        } else {
            openNavMenu();
        }
    }

    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', toggleNavMenu);
    }

    if (nav) {
        nav.addEventListener('click', (event) => {
            if (event.target.closest('.nav-close-btn')) {
                event.preventDefault();
                closeNavMenu();
                return;
            }

            if (event.target.matches('a')) {
                closeNavMenu();
            }
        });
    }

    // Video Loop Fix
    if (bgVideo) {
        bgVideo.addEventListener('ended', function () {
            this.currentTime = 0;
            this.play();
        }, false);

        bgVideo.play().catch(error => {
            console.log("Autoplay was prevented:", error);
        });
    }
}
