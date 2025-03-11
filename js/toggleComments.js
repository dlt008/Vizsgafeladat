document.addEventListener("DOMContentLoaded", function () {
    const commentToggles = document.querySelectorAll(".comments-toggle");

    commentToggles.forEach(button => {
        button.addEventListener("click", function () {
            const commentsSection = this.closest(".Post").querySelector(".Comments");
            commentsSection.classList.toggle("expanded");

            // Change button text dynamically
            this.textContent = commentsSection.classList.contains("expanded") ? "Close Comments" : "Open Comments";
        });
    });
});
