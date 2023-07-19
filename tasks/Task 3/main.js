   
             function validateForm() {
            var nameInput = document.getElementById('name');
            var emailInput = document.getElementById('email');
            var passwordInput = document.getElementById('password');
            if (nameInput.value === '') {
            document.getElementById('nameError').textContent = 'Please enter your name.';
             return false;}
             else if (nameInput.value.length < 3) {
                document.getElementById('nameError').textContent = 'name must contain 3 characters'
     
       return false;
       }     else {
         document.getElementById('nameError').textContent = '';
          }
          if (emailInput.value === '') {
        document.getElementById('emailError').textContent = 'Please enter your email address.';
        return false;
    }
    
        else {
        document.getElementById('emailError').textContent = '';
      }
      if (passwordInput.value === '') {
            document.getElementById('passwordError').textContent = 'Please enter your password.';
             return ;
             
       }else if(passwordInput.value.length < 8){
        document.getElementById('passwordError').textContent = 'please enter 8 characters';

       }     
       else {
         document.getElementById('passwordError').textContent = 'ok';
          }
     
    }



