// Example: smooth scroll if you add internal anchor links later
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({ behavior: 'smooth' });
  });
});

// Example: you can add more interactivity later
console.log("Palmy Web Developer 🌴💻 - JS loaded successfully");
