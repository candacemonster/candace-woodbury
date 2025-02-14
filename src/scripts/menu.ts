export default function toggleMenu() {
    const sidebar = document.querySelector(".sidebar") as HTMLElement;
    sidebar.classList.toggle("active");
}

// Ensure script runs when the DOM is fully loaded
document.addEventListener("DOMContentLoaded", () => {
    const menuButton = document.querySelector(".menu-toggle") as HTMLButtonElement;
    if (menuButton) {
        menuButton.addEventListener("click", toggleMenu);
    }
});
