document.getElementById('logoutButton').addEventListener('click', () => {
    // Clear session storage or any other storage used for user session
    sessionStorage.clear();
    alert('Logging out...');
    window.location.href = '/index.html';
});
