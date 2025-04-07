function searchOpenBttn() {
    const searchDiv = document.getElementById('SearchDiv');
    const nav = document.querySelector('nav');
    const input = searchDiv.querySelector('.input');
    const button = searchDiv.querySelector('.button');
    
    // Toggle the active classes
    searchDiv.classList.toggle('active');
    nav.classList.toggle('search-active');

    // If searchDiv is active, focus the input
    if (searchDiv.classList.contains('active')) {
        input.focus();
        
        // Check if dark mode is active
        const isDarkMode = document.getElementById('theme-home').href.includes('dark-mode');
        
        if (isDarkMode) {
            // Apply dark mode colors
            searchDiv.style.backgroundColor = '#1d1d1d';
            input.style.backgroundColor = 'rgb(24, 24, 24)';
            button.style.backgroundColor = '#0e0e0e';
            input.style.color = 'white';
        } else {
            // Apply light mode colors
            searchDiv.style.backgroundColor = 'white';
            input.style.backgroundColor = 'rgb(200, 200, 200, 0.3)';
            button.style.backgroundColor = 'rgba(175, 175, 175, 0.4)';
            input.style.color = 'black';
        }
    } else {
        // Reset colors when search is closed
        searchDiv.style.backgroundColor = '';
        input.style.backgroundColor = '';
        button.style.backgroundColor = '';
        input.style.color = '';
    }

    // Prevent scrolling when search is open
    if (searchDiv.classList.contains('active')) {
        document.body.style.overflow = 'hidden';
    } else {
        document.body.style.overflow = 'auto';
    }
}

// Close search when clicking outside
document.addEventListener('click', function(event) {
    const searchDiv = document.getElementById('SearchDiv');
    const searchIcon = document.querySelector('.searchIcon');
    
    if (searchDiv.classList.contains('active') && 
        !searchDiv.contains(event.target) && 
        !searchIcon.contains(event.target)) {
        searchDiv.classList.remove('active');
        document.querySelector('nav').classList.remove('search-active');
        document.body.style.overflow = 'auto';
        
        // Reset colors when search is closed
        searchDiv.style.backgroundColor = '';
        const input = searchDiv.querySelector('.input');
        const button = searchDiv.querySelector('.button');
        input.style.backgroundColor = '';
        button.style.backgroundColor = '';
        input.style.color = '';
    }
});