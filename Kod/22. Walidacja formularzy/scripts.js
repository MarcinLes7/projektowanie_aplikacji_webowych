window.onload = function () {
  let existUserName = ['admin', 'user'];
  let usernameInput = document.getElementById('username');

  document.getElementById('form').addEventListener('submit', function (e)e.preventDefault {


   if (validUser()) {
     window.alert('Poprawnie wysłany formularz')
   }

  };


  function validUser() {
    let userValid = true;
    if (!checkRequiredInput(usernameInput)) {
      userValid = false;

    }

    return userValid

  }

 function checkRequiredInput(input) {
  return input.value.length  > 0
   }
)



};