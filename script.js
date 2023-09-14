document.addEventListener("DOMContentLoaded", function() {
    const registerForm = document.getElementById("registerForm");
  
    registerForm.addEventListener("submit", function(event) {
      event.preventDefault();
  
      window.location.href = "confirmation.html"; 
    });
  });

  document.addEventListener("DOMContentLoaded", function() {
    const modeToggle = document.querySelector('.modeToggle');
    const body = document.body;
    const container = document.getElementById('container');
    const input = document.getElementById('password');
    const input2 = document.getElementById('name');
    const button = document.getElementById('button');

    modeToggle.addEventListener('click', function() {
      body.classList.toggle('darkMode');
      container.classList.toggle('darkMode');

      if(body.classList.contains('darkMode'))
      {
        body.style.background = '#142d4c';
        body.style.backgroundColor = '#091727';
        body.style.transition = '0.7s';
        container.style.border = 'solid #081b31';
        container.style.boxShadow = '4px 4px 0 0 #050d18';
        container.style.transition = '0.7s';
        input.style.borderColor = '#38598b';
        input2.style.borderColor = '#38598b';
        button.style.backgroundColor = '#113f67';
      }

      else 
      {
        body.style.backgroundColor = '#5c5470';
        body.style.transition = '0.6s';
        container.style.border = 'solid 1px';
        container.style.boxShadow = '4px 4px 0 0 #24202c';
        container.style.borderColor = '#352f44';
        container.style.transition = '0.6s';
        input.style.borderColor = '#352f44';
        input2.style.borderColor = '#352f44';
        button.style.backgroundColor = '#352f44';
      }
    });
  });