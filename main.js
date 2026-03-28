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
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.style.boxShadow = '0 4px 20px rgba(0,0,0,0.1)';
        header.style.padding = '5px 0';
    } else {
        header.style.boxShadow = '0 2px 15px rgba(0,0,0,0.05)';
        header.style.padding = '0';
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
