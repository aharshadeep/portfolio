
    function validateForm() {
        var un = document.loginform.usr.value;
        var pw = document.loginform.pwd.value;
        var username = "username"; 
        var password = "password";
        if ((un == username) && (pw == password)) {
            alert ("Login was Successful");
            return true;
           
        }
        else {
            alert ("Login was unsuccessful, please check your username and password");
            return false;
        }
  }
