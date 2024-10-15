  // Toggle the dropdown visibility when the circle is clicked
  document.getElementById('circleDiv').addEventListener('click', function(event) {
    // Prevent the click from propagating to the window.onclick
    event.stopPropagation();
    
    const dropdown = document.getElementById('dropdownMenu');
    if (dropdown.style.display === 'block') {
        dropdown.style.display = 'none';
    } else {
        dropdown.style.display = 'block';
    }
});

// Optionally, close the dropdown if the user clicks outside of it
window.onclick = function(event) {
    const dropdown = document.getElementById('dropdownMenu');
    if (!event.target.closest('.circle') && !event.target.closest('.dropdown-menu')) { /* Updated selector */
        dropdown.style.display = 'none';
    }
};