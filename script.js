  document.addEventListener("DOMContentLoaded", function() {
    const modeToggle = document.querySelector('.modeToggle');
    const body = document.body;
    const container = document.getElementById('container');
    // const input = document.getElementById('password');
    // const input2 = document.getElementById('name');
    const button = document.getElementById('button');

    const inputs = document.getElementsByTagName('input');
    const buttons = document.getElementsByTagName('button');

    modeToggle.addEventListener('click', function() {

      body.classList.toggle('darkMode');
      container.classList.toggle('darkMode');
      
      if(body.classList.contains('darkMode'))
      {
        body.style.background = '#141010';
        body.style.backgroundColor = '#141010';
        body.style.transition = '0.7s';
        container.style.border = 'solid 1px #363434';
        container.style.boxShadow = '4px 4px 0 0 #060608';
        container.style.transition = '0.7s';
        container.style.backgroundColor = '#222831';
        document.querySelectorAll("input")
          .forEach(input => input.style.borderColor = '#363434');        
        // for(var i =0; i< inputs.length; i++) 
        //   inputs[i].style.borderColor = '#38598b';        
        // input.style.borderColor = '#38598b';
        // input2.style.borderColor = '#38598b';
        for(var i =0; i< buttons.length; i++) 
          buttons[i].style.backgroundColor = '#222831';
      }

      else 
      {
        body.style.backgroundColor = '#e3e3e3';
        body.style.transition = '0.7s';
        container.style.border = 'solid 1px';
        container.style.boxShadow = '4px 4px 0 0 #393e46';
        container.style.backgroundColor = '#393e46';
        container.style.transition = '0.7s';
        for(var i =0; i< inputs.length; i++) 
          inputs[i].style.borderColor = '#352f44';        
        // input.style.borderColor = '#352f44';
        // input2.style.borderColor = '#352f44';
        for(var i =0; i< buttons.length; i++) 
          buttons[i].style.backgroundColor = '#393e46';      
      }
    });
  });


// #606470(mais claro), #393e46(escuro), #222831(escurao)