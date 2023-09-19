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