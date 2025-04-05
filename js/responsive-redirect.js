function checkScreenSize() {
    const phoneScreenWidth = 600;
    
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    console.log('Current page:', currentPage);
    console.log('Window width:', window.innerWidth);
    
    if (currentPage === 'dashboard.html' || currentPage === 'phoneview.html') {
        console.log('Checking redirection conditions...');
        if (window.innerWidth < phoneScreenWidth && currentPage === 'dashboard.html') {
            console.log('Screen is phone-sized, redirecting to phoneview.html');
            window.location.replace('phoneview.html');
        } else if (window.innerWidth >= phoneScreenWidth && currentPage === 'phoneview.html') {
            console.log('Screen is desktop-sized, redirecting to dashboard.html');
            window.location.replace('dashboard.html');
        }
    }
}

// Check screen size when page loads
window.addEventListener('load', checkScreenSize);

// Check screen size when window is resized
window.addEventListener('resize', checkScreenSize);
