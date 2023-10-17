const processForm = (e) => {
  e.preventDefault();
  
  const name = document.getElementById('name')
  const email = document.getElementById('email')
  const password = document.getElementById('password')
  const repeatPassword = document.getElementById('repeatPassword')
  const deacordo = document.getElementById('cbx')

  if (name.value.trim().length === 0 || name.value.trim().length < 5) {
    name.classList.add('invalid');
    name.focus();
    return;
  }
  
/*  name.addEventListener('input', function (event) {
    const actualValue = name.value;
    const warning = document.getElementById('aviso');
    const insertedCarac = event.data;
    const unwantedCarac = ["!", "@", "#", "%", "¨", "&", "*", "(", ")", ",", "+", "=", "'", "{", "}", "[", "]"]
  
    if (unwantedCarac.includes(insertedCarac)) {
      name.value = actualValue.replace(unwantedCarac, " ")
      warning.textContent = 'O caractere '${unwantedCarac}' não é permitido';
      name.classList.add('invalid');
    } else {
      warning.textContent = '';
      name.classList.remove('invalid');
    }
  });
  */

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

  if (!cbx.checked) {
    deacordo.classList.add('invalid');
    return;
  }

  const user = {
    Nome: name.value.trim(),
    Senha: password.value.trim(),
    Email: email.value.trim()
  };
  console.log(user);
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

document.addEventListener("DOMContentLoaded", function () {
  const modeToggle = document.querySelector('.modeToggle');
  const body = document.body;
  const container = document.getElementById('container');
  const buttons = document.getElementsByTagName('button');

  function setThemeFromLocalStorage() {
    const theme = localStorage.getItem('theme');
    if (theme === 'dark') {
      body.classList.add('darkMode');
      container.classList.add('darkMode');
      container.style.backgroundColor = '#191A1C';
      container.style.background = '#191A1C';
      container.style.boxShadow = 'none';
      for (var i = 0; i < buttons.length; i++)
      buttons[i].style.backgroundColor = '#191A1C',
          buttons[i].style.color = 'white';
      document.querySelectorAll('a')
        .forEach(a => a.style.color = 'white');
        container.style.transition = '0.7s';
      document.querySelectorAll('cbx')
        .forEach(cbx => cbx.style.stroke = 'white')
    } else {
      body.classList.remove('darkMode');
      container.classList.remove('darkMode');
      container.style.backgroundColor = '#FFFFFF';
      for (var i = 0; i < buttons.length; i++)
        buttons[i].style.backgroundColor = '#FFFFFF',
          buttons[i].style.color = 'black';
          container.style.boxShadow = '0 0 60px, 0 0 60px #ffffff'
      document.querySelectorAll('a')
        .forEach(a => a.style.color = 'black');
      container.style.transition = '0.7s'
    }
  }

  function toggleTheme() {
    if (body.classList.contains('darkMode')) {
      localStorage.setItem('theme', 'light');
    } else {
      localStorage.setItem('theme', 'dark');
    }
    setThemeFromLocalStorage();
  }

  modeToggle.addEventListener('click', toggleTheme);

  setThemeFromLocalStorage();
});

function home() {
  window.location.href = 'index.html';
}