// Toggle mobile menu
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

if (menuToggle) {
    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });
}

// Close menu when clicking outside
document.addEventListener('click', (e) => {
    if (!e.target.closest('.nav-container')) {
        navLinks.classList.remove('active');
    }
});

// Simple animation on scroll
const observerOptions = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate');
        }
    });
}, observerOptions);

// Observe elements to animate
document.querySelectorAll('.course-card, .feature').forEach(el => {
    observer.observe(el);
});

// Mark lesson as completed
function completeLesson(lessonId) {
    const lessons = JSON.parse(localStorage.getItem('completedLessons') || '{}');
    lessons[lessonId] = true;
    localStorage.setItem('completedLessons', JSON.stringify(lessons));
    alert('Lekcja oznaczona jako ukończona!');
}
