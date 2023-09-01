document.addEventListener("DOMContentLoaded", function() {
    const registerForm = document.getElementById("registerForm");
  
    registerForm.addEventListener("submit", function(event) {
      event.preventDefault();
  
      window.location.href = "index.html"; 
    });
  });
