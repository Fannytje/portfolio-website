document.getElementById('toggleButton').addEventListener('click', function() {
  const content = document.getElementById('toggleContent');
  const arrowIcon = document.querySelector('.arrow-icon');

  // Toggle content visibility
  content.classList.toggle('open');

  // Change the arrow direction by toggling class
  if (content.classList.contains('open')) {
      arrowIcon.classList.remove('fa-chevron-down');
      arrowIcon.classList.add('fa-chevron-up');
  } else {
      arrowIcon.classList.remove('fa-chevron-up');
      arrowIcon.classList.add('fa-chevron-down');
  }
});