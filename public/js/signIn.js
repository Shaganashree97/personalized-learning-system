document.getElementById('signInForm').addEventListener('submit', async (e) => {
    e.preventDefault();

    const login = document.getElementById('login').value;
    const password = document.getElementById('loginPassword').value;

    const response = await fetch('/api/sign-in', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ login, password })
    });

    const result = await response.json();

    if (result.success) {
        alert('Sign In Successful! Redirecting to Dashboard.');
        window.location.href = '/dashboard.html';
    } else {
        alert('Sign In Failed: ' + result.message);
    }
});

document.getElementById('backButton').addEventListener('click', () => {
    window.history.back();
});
