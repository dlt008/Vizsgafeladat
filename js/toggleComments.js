document.addEventListener("DOMContentLoaded", function () {
    const commentToggles = document.querySelectorAll(".comments-toggle");

    commentToggles.forEach(button => {
        const downArrow = document.createElement("img");
        downArrow.src = "Icons/Black Navbar Icons/arrowdown.svg";
        downArrow.alt = "Down Arrow";
        button.insertBefore(downArrow, button.firstChild);

        button.addEventListener("click", function () {
            const commentsSection = this.closest(".Post").querySelector(".Comments");
            commentsSection.classList.toggle("expanded");

            const existingIcon = this.querySelector("img");
            if (existingIcon) {
                existingIcon.remove();
            }

            const newIcon = document.createElement("img");
            newIcon.alt = commentsSection.classList.contains("expanded") ? "Down Arrow" : "Up Arrow";
            newIcon.src = commentsSection.classList.contains("expanded") 
                ? "Icons/Black Navbar Icons/arrowdown.svg"
                : "Icons/Black Navbar Icons/arrowup.svg";
            this.insertBefore(newIcon, this.firstChild);
        });
    });
});
