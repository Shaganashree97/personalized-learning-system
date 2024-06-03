document.getElementById('signUpForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const name = document.getElementById('name').value;
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    
    if (password !== confirmPassword) {
        alert('Passwords do not match!');
        return;
    }

    const response = await fetch('/api/sign-up', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name, username, email, password })
    });

    const result = await response.json();

    if (result.success) {
        alert('Sign Up Successful! Redirecting to Sign In page.');
        window.location.href = '/sign-in.html';
    } else {
        alert('Sign Up Failed: ' + result.message);
    }
});
