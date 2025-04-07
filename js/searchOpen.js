function searchOpenBttn() {
    const searchDiv = document.getElementById('SearchDiv');
    const nav = document.querySelector('nav');
    
    // Toggle the active classes
    searchDiv.classList.toggle('active');
    nav.classList.toggle('search-active');

    // If searchDiv is active, focus the input
    if (searchDiv.classList.contains('active')) {
        const input = searchDiv.querySelector('.input');
        input.focus();
        // Prevent scrolling when search is open
        document.body.style.overflow = 'hidden';
    } else {
        // Allow scrolling when search is closed
        document.body.style.overflow = 'auto';
    }
}

// Close search when clicking outside
document.addEventListener('click', function(event) {
    const searchDiv = document.getElementById('SearchDiv');
    const searchIcon = document.querySelector('.searchIcon');
    
    // Check if the click was outside the search div and icon
    if (searchDiv.classList.contains('active') && 
        !searchDiv.contains(event.target) && 
        !searchIcon.contains(event.target)) {
        
        // Close the search
        searchDiv.classList.remove('active');
        document.querySelector('nav').classList.remove('search-active');
        document.body.style.overflow = 'auto';
    }
});