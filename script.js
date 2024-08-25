document.getElementById('login-form').addEventListener('submit', function(e) {
    e.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Basic validation (for demonstration purposes)
    if (username === 'admin' && password === 'password') {
        alert('Login successful!');
        // Redirect to another page or perform some action
        window.location.href = 'dashboard/dashboard.html'; // Example of redirection
    } else {
        const errorMessage = document.getElementById('error-message');
        errorMessage.textContent = 'Invalid username or password';
        errorMessage.style.display = 'block';
    }
});
