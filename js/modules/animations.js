// Intersection Observer for Animations
export function initAnimations() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.animationName = 'fadeInUp';
                observer.unobserve(entry.target);
            }
        });
    });

    document.querySelectorAll('.fade-in-up').forEach(el => observer.observe(el));
}
