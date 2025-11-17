// Simple script to highlight active nav link
(function() {
  let currentPath = window.location.pathname;
  let currentPage = currentPath.split('/').pop();
  if (!currentPage || currentPage === '') {
    currentPage = 'index.html';
  }
  
  const navLinks = document.querySelectorAll('nav a');
  
  navLinks.forEach(link => {
    const linkHref = link.getAttribute('href');
    const linkFileName = linkHref.split('/').pop();
    
    // Check if we're on the home page
    const isHomePage = currentPage === 'index.html' || currentPage === '' || currentPath.endsWith('/');
    
    // Check if link points to home
    const isHomeLink = linkFileName === 'index.html' || linkHref === '../index.html';
    
    // Match active state
    if (isHomePage && isHomeLink) {
      link.classList.add('active');
    } else if (!isHomePage && linkFileName === currentPage) {
      link.classList.add('active');
    }
  });
})();

