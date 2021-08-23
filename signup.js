
    function validateForm1() {
        var un = document.loginform.usr.value;
        var pw = document.loginform.pwd.value;
        var ph = document.loginform.phone.value;
        var em = document.loginform.email.value;
        var qa = document.loginform.qualification.value;
  

        
        if (un == "") {
            alert("Please enter your name.");
            return false;
        }
  
        if (em == "") {
            alert("Please enter a valid e-mail.");
                return false;
            }

        if (pw == "") {
            alert("Please enter your password.");
            return false;
        }
  
  
        if (ph == "") {
           alert(
              "Please enter your phone number.");
            return false;
        }
  
    
  
        if (qa == "") {
            alert("Please enter your qualification.");
          
            return false;
        }

        alert ("Signup was Successful");
        return true;
  }
