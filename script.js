// Like on cat card

function changeImage(id) {
    if (document.getElementById(id).src.includes("cats/img/heart-disabled.svg")) 
    {
        document.getElementById(id).src = "./img/heart-enabled.svg";
    }
    else 
    {
        document.getElementById(id).src = "./img/heart-disabled.svg";
    }
}

// Scroll up

mybutton = document.getElementById("myBtn");

function topFunction() {
  document.documentElement.scrollTop = 0;
}

// Email validate

function ValidateEmail(inputText)
{
    var mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    
    if(inputText.value.match(mailformat))
    {
        alert("Valid email address!");
        document.form1.text1.focus();
        return true;
    }
    else
    {
        alert("You have entered an invalid email address!");
        document.form1.text1.focus();
        return false;
    }
}