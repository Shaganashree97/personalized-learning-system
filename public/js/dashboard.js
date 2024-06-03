document.addEventListener('DOMContentLoaded', async () => {
    const response = await fetch('/api/user-info');
    const userInfo = await response.json();

    document.getElementById('profileName').innerText = userInfo.name;
    document.getElementById('profileUsername').innerText = userInfo.username;
    document.getElementById('profileIcon').src = userInfo.profileIcon;
});

function goToProfile() {
    // Redirect to the user's profile page
    window.location.href = '/profile.html';
}

document.getElementById('logoutButton').addEventListener('click', () => {
    // Clear session storage or any other storage used for user session
    sessionStorage.clear();
    alert('Logging out...');
    window.location.href = '/index.html';
});
