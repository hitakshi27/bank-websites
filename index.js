// JS from the login page
function togglePassword(id) {
    const input = document.getElementById(id);
    const icon = input.nextElementSibling;
    if (input.type === 'password') {
        input.type = 'text';
        icon.setAttribute('data-feather', 'eye-off');
    } else {
        input.type = 'password';
        icon.setAttribute('data-feather', 'eye');
    }
    feather.replace();
}

function showForm(formId) {
    document.getElementById('loginFormSection').classList.add('hidden');
    document.getElementById('signupFormSection').classList.add('hidden');
    document.getElementById('forgotFormSection').classList.add('hidden');
    document.getElementById(formId).classList.remove('hidden');
}

// JS from the main page
document.getElementById('mobile-menu-button').addEventListener('click', function() {
    const menu = document.getElementById('mobile-menu');
    menu.classList.toggle('hidden');
});

// Combined logic: Handle login and show the main page
const loginForm = document.getElementById('loginForm');
loginForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevents the form from submitting and reloading the page
    
    // This is a placeholder for actual login logic.
    // In a real application, you would send data to a server for verification.
    
    // On successful login, hide the login page and show the main page
    document.getElementById('login-container').classList.add('hidden');
    document.getElementById('main-container').classList.remove('hidden');
    
    // Re-initialize Aos and Feather icons for the new content
    AOS.init();
    feather.replace();
});

// Add a logout button to the main page
const logoutButton = document.getElementById('logout-button');
logoutButton.addEventListener('click', function() {
    // Hide main content and show login page again
    document.getElementById('main-container').classList.add('hidden');
    document.getElementById('login-container').classList.remove('hidden');
});

// Initial setup
AOS.init({
    duration: 800,
    easing: 'ease-in-out',
    once: true
});
feather.replace();