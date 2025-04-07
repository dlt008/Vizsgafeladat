let isDarkMode = false;

function toggleTheme() {
    isDarkMode = !isDarkMode;
    updateIcons();
    updateTooltip();
    cssToggle();
}

function updateIcons() {
    const icons = document.querySelectorAll(".theme-icon");
    
    icons.forEach(icon => {
        const currentSrc = icon.src;
        const iconName = currentSrc.split("/").pop();
        
        const newPath = isDarkMode 
            ? `Icons/White Navbar Icons/${iconName}`
            : `Icons/Black Navbar Icons/${iconName}`;
        
        icon.src = newPath;
    });
}

function updateTooltip() {
    const themeToggle = document.querySelector('span[data-tooltip][onclick*="toggleTheme"]');
    
    if (themeToggle) {
        themeToggle.setAttribute('data-tooltip', isDarkMode ? 'Light Mode' : 'Dark Mode');

        if (typeof refreshTooltips === 'function') {
            refreshTooltips();
        }
    }
}

function cssToggle() {
    const theme = document.getElementById('theme-home');
    const currentHref = theme.getAttribute('href') || '';
    
    if (currentHref.includes('light-mode')) {
        theme.setAttribute('href', 'css/dark-mode css/dark-mode home.css');
    } else {
        theme.setAttribute('href', 'css/light-mode css/light-mode home.css');
    }
}