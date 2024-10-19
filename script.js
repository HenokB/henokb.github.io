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

// Open citation popup
function openCitationPopup(modalId) {
    document.getElementById(`citation-modal-${modalId}`).style.display = 'flex';
    document.body.style.overflow = 'hidden'; // Prevent scrolling on the background
}

// Close citation popup
function closeCitationPopup(modalId) {
    document.getElementById(`citation-modal-${modalId}`).style.display = 'none';
    document.body.style.overflow = 'auto'; // Restore background scrolling
}

// Copy the citation to clipboard and show a small notification
function copyCitation(modalId) {
    const textarea = document.querySelector(`#${modalId} textarea`);
    textarea.select();
    document.execCommand('copy');
    
    // Show "Copied" notification
    const copyNotification = document.getElementById(`${modalId}-copy-notification`);
    copyNotification.style.display = 'block';
    setTimeout(() => {
        copyNotification.style.display = 'none';
    }, 2000); // Hide notification after 2 seconds
}

// Download citation as a .bib file
function downloadCitation(modalId) {
    const citationText = document.querySelector(`#citation-modal-${modalId} textarea`).value;
    const blob = new Blob([citationText], { type: 'text/plain' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = `${modalId}.bib`;
    link.click();
}
