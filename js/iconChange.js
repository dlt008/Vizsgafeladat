/*var image = document.getElementById("themeBttn");

function changeImage()
{
    if (image.getAttribute('src') === '/whiteNavSVG/light mode.svg')
    {
        image.src = '/Icons/Black Navbar Icons/dark mode.svg';
    }
    else
    {
        image.src = '/whiteNavSVG/light mode.svg';
    }
}*/

let isDarkMode = false;

// Toggle theme and CSS (if cssToggle() is defined elsewhere)
function toggleTheme() {
    isDarkMode = !isDarkMode;
    updateIcons();
}

function updateIcons() {
    const icons = document.querySelectorAll(".theme-icon");
    
    icons.forEach(icon => {
        const currentSrc = icon.src;
        const iconName = currentSrc.split("/").pop(); // "home.svg", "person.svg", etc.
        
        // Toggle between "Black Navbar Icons" and "White Navbar Icons" (adjust if needed)
        const newPath = isDarkMode 
            ? `Icons/White Navbar Icons/${iconName}`  // Dark mode icons
            : `Icons/Black Navbar Icons/${iconName}`;  // Light mode icons
        
        icon.src = newPath;
    });
}

function cssToggle() {
    // Select the <link> element
    let theme = document.getElementById('theme');

    // Toggle between light.css and dark.css
    if (theme.getAttribute('href') == 'css/light-mode css/light-mode home.css') {
        theme.setAttribute('href', 'css/dark-mode css/dark-mode home.css');
    } else {
        theme.setAttribute('href', 'css/light-mode css/light-mode home.css');
    }
}

console.log("Fut a css")