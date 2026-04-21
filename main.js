// Tab Switching Logic
function showTab(tabIndex) {
    // Get all buttons and content
    const btns = document.querySelectorAll('.tab-btn');
    const contents = document.querySelectorAll('.tab-content');

    // Remove active classes
    btns.forEach(btn => btn.classList.remove('active'));
    contents.forEach(content => content.classList.remove('active'));

    // Set active
    btns[tabIndex].classList.add('active');
    const targetId = 'tab-' + tabIndex;
    document.getElementById(targetId).classList.add('active');
}

// Simple Scroll Reveal Effect (Optional/Minimal)
window.addEventListener('scroll', () => {
    const header = document.querySelector('.new-header');
    if (window.scrollY > 50) {
        header.style.transform = 'translateY(-30px)'; // Hide the top row slightly or adjust styles
        header.style.transition = 'transform 0.3s ease';
    } else {
        header.style.transform = 'translateY(0)';
    }
});

// Placeholder for search or quote interactions
document.getElementById('search-btn').addEventListener('click', () => {
    alert('A kereső funkció hamarosan elérhető lesz!');
});

document.getElementById('quote-btn').addEventListener('click', () => {
    window.scrollTo({
        top: document.body.scrollHeight,
        behavior: 'smooth'
    });
});
