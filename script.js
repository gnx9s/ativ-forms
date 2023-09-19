document.addEventListener("DOMContentLoaded", function () {
  const modeToggle = document.querySelector('.modeToggle');
  const body = document.body;
  const container = document.getElementById('container');
  // const input = document.getElementById('password');
  // const input2 = document.getElementById('name');
  const button = document.getElementById('button');

  const inputs = document.getElementsByTagName('input');
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
