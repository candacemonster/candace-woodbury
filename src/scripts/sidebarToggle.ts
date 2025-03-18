document.addEventListener('DOMContentLoaded', () => {
    const sidebar = document.getElementById('sidebar');
    const toggleButton = document.getElementById('sidebar-toggle');
  
    if (sidebar && toggleButton) {
      toggleButton.addEventListener('click', () => {
        sidebar.classList.toggle('mobile-hidden');
        sidebar.classList.toggle('mobile-visible');
      });
    }
  });
  