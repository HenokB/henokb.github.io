// Select the toggle switch and the body, header, footer elements
const toggleSwitch = document.getElementById('mode-toggle');
const body = document.body;
const header = document.querySelector('header');
const footer = document.querySelector('footer');
const modeLabel = document.getElementById('mode-label');

// Function to toggle between dark and light modes
toggleSwitch.addEventListener('change', () => {
    if (toggleSwitch.checked) {
        body.classList.add('dark-mode');
        header.classList.add('dark-mode');
        footer.classList.add('dark-mode');
        modeLabel.textContent = "";
    } else {
        body.classList.remove('dark-mode');
        header.classList.remove('dark-mode');
        footer.classList.remove('dark-mode');
        modeLabel.textContent = "";
    }
});
