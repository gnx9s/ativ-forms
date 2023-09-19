const processForm = (e) => {
  e.preventDefault();

  const name = document.getElementById('name');
  const email = document.getElementById('email');
  const password = document.getElementById('password');
  const repeatPassword = document.getElementById('repeatPassword');
  const deacordo = document.getElementById('deacordo');

  if (name.value.trim().length === 0 || name.value.trim().length < 5) {
    name.classList.add('invalid');
    name.focus();
    return;
  }

  if (password.value.trim().length < 8) {
    password.classList.add('invalid');
    password.focus();
    return;
  }

  if (repeatPassword.value.trim() !== password.value.trim()) {
    repeatPassword.classList.add('invalid');
    repeatPassword.focus();
    return;
  }

  if (!deacordo.checked) {
    deacordo.classList.add('invalid');
    return;
  }

  const user = {
    Nome: name.value.trim(),
    Senha: password.value.trim(),
    Email: email.value.trim()
  };
  
}

  const errorClear = (e) =>
  e.currentTarget.classList.remove('invalid');

  const initialize = () => {
    const forms = document.forms[0];
    forms.addEventListener('submit', processForm);
    forms.querySelectorAll('input')
      .forEach(campo => campo.addEventListener('input', errorClear));
  }

document.addEventListener('DOMContentLoaded', initialize);

/*
document.addEventListener("DOMContentLoaded", function() {
    const registerForm = document.getElementById("registerForm");
      
    registerForm.addEventListener("submit", function(event) {
      event.preventDefault();
  
      window.location.href = "confirmation.html"; 
    });
  });
*/

document.addEventListener("DOMContentLoaded", function () {
  const modeToggle = document.querySelector('.modeToggle');
  const body = document.body;
  const container = document.getElementById('container');
  // const input = document.getElementById('password');
  // const input2 = document.getElementById('name');
  const button = document.getElementById('button');

  const inputs = document.getElementsByTagName("input");
  const buttons = document.getElementsByTagName('button');

  modeToggle.addEventListener('click', function () {

    body.classList.toggle('darkMode');
    container.classList.toggle('darkMode');

    if (body.classList.contains('darkMode')) {
      container.style.backgroundColor = '#191A1C';
      container.style.background = '#191A1C';
      container.style.boxShadow = 'none';

      //document.querySelectorAll("input")
      //.forEach(input => input.style.borderColor = '#363434');
      // for(var i =0; i< inputs.length; i++) 
      //   inputs[i].style.borderColor = '#38598b';        
      // input.style.borderColor = '#38598b';
      // input2.style.borderColor = '#38598b';
      for (var i = 0; i < buttons.length; i++)
        buttons[i].style.backgroundColor = '#191A1C',
        buttons[i].style.color = 'white';
      document.querySelectorAll('a')
        .forEach(a => a.style.color = 'white');
      container.style.transition = '0.7s';
    }

    else {
      container.style.backgroundColor = '#FFFFFF';
      for (var i = 0; i < buttons.length; i++)
        buttons[i].style.backgroundColor = '#FFFFFF',
        buttons[i].style.color = 'black';
      container.style.boxShadow = '0 0 60px, 0 0 60px #ffffff'
      document.querySelectorAll('a')
        .forEach(a => a.style.color = 'black');
        container.style.transition = '0.7s'
    }
  });
});

// #606470(mais claro), #393e46(escuro), #222831(escurao)