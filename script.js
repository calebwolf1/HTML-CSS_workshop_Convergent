function showPage(pageId) {
  // Hide all pages
  const pages = document.querySelectorAll('.page');
  pages.forEach(page => page.classList.remove('active'));

  // Show the selected page
  const activePage = document.getElementById(pageId);
  activePage.classList.add('active');
}

document.addEventListener('DOMContentLoaded', function() {
  showPage('home');
});
