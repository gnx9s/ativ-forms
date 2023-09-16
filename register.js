const processForm = (e) => {
    e.preventDefault();

    const name = document.getElementById('name');
    const email = document.getElementById('email');
    const password = document.getElementById('password');
    const repeatPassword = document.getElementById('repeatPassword');
    const deacordo = document.getElementById('deacordo');

    if(name.value.trim().length === 0 || name.value.trim().length < 4) {
        name.classList.add('invalid');
        console.log(name);
        name.focus();
        return;
    }

    if(password.value.trim().length < 8) {
        password.classList.add('invalid');
        password.focus();
        return;
    }

    if(repeatPassword.value.trim() !== password.value.trim()) {
        repeatPassword.classList.add('invalid');
        repeatPassword.focus();
        return;
    } 

    if(!deacordo.checked) {
        deacordo.classList.add('invalid');
        return;
    }


};

const errorClear = (e) => 
    e.currentTarget.classList.remove('invalid');


const initialize = () => {
    const forms = document.forms[0];
    forms.addEventListener('submit', processForm);
    forms.querySelectorAll('input')
    .forEach(campo => campo.addEventListener('input', errorClear));

    const user = {
        Nome: name.value.trim(),
        Senha: password.value.trim(),
        Email: email.value.trim()
    }

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
  
  
  
  
  
  document.addEventListener("DOMContentLoaded", function() {
    const modeToggle = document.querySelector('.modeToggle');
    const body = document.body;
    const container = document.getElementById('container');
    // const input = document.getElementById('password');
    // const input2 = document.getElementById('name');
    const button = document.getElementById('button');

    const inputs = document.getElementsByTagName("input");
    const buttons = document.getElementsByTagName('button');

    modeToggle.addEventListener('click', function() {

      body.classList.toggle('darkMode');
      container.classList.toggle('darkMode');
      
      if(body.classList.contains('darkMode'))
      {
        body.style.background = '#606470';
        body.style.backgroundColor = '#222831';
        body.style.transition = '0.7s';
        container.style.border = 'solid #303841';
        container.style.boxShadow = '4px 4px 0 0 #050d18';
        container.style.transition = '0.7s';
        container.style.backgroundColor = '#363b4e';
        document.querySelectorAll("input")
          .forEach(input => input.style.borderColor = '#363b4e');        
        // for(var i =0; i< inputs.length; i++) 
        //   inputs[i].style.borderColor = '#38598b';        
        // input.style.borderColor = '#38598b';
        // input2.style.borderColor = '#38598b';
        for(var i =0; i< buttons.length; i++) 
          buttons[i].style.backgroundColor = '#363b4e';
      }

      else 
      {
        body.style.backgroundColor = '#5c5470';
        body.style.transition = '0.6s';
        container.style.border = 'solid 1px';
        container.style.boxShadow = '4px 4px 0 0 #24202c';
        container.style.borderColor = '#352f44';
        container.style.backgroundColor = '#352f44';
        container.style.transition = '0.6s';
        for(var i =0; i< inputs.length; i++) 
          inputs[i].style.borderColor = '#352f44';        
        // input.style.borderColor = '#352f44';
        // input2.style.borderColor = '#352f44';
        for(var i =0; i< buttons.length; i++) 
          buttons[i].style.backgroundColor = '#352f44';        
      }
    });
  });


// #606470(mais claro), #393e46(escuro), #222831(escurao)