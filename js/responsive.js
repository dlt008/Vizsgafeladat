    function adjustSearchBarMaxLength() {
        const searchBar = document.querySelector('.search-bar');
        if (searchBar) {
            const width = searchBar.clientWidth;
            searchBar.maxLength = Math.floor(width / 10); // Example calculation
        }
    }

    window.addEventListener('resize', adjustSearchBarMaxLength);
    window.addEventListener('load', adjustSearchBarMaxLength);
