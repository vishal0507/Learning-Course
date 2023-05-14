var userName;
var userEmail;
var userPhone;
var userWeb;
var userMessage;

    function saveData()
    {
        userName=document.getElementById("name").value;
        userEmail=document.getElementById("mail").value;
        userPhone=document.getElementById("phone").value;
        userWeb=document.getElementById("website").value;
        userMessage= document.getElementById("message").value;
    
        if(userName !="" && userEmail !="" && userPhone !="" && userWeb !="" && userMessage !="" )
        {
            sessionStorage.setItem("Name",userName);
            sessionStorage.setItem("Email",userEmail);
            sessionStorage.setItem("Phone",userPhone);
            sessionStorage.setItem("Web",userWeb);
            sessionStorage.setItem("Message",userMessage);
            display();
        }
        else
        {
            alert("Each field should be field")
        }
    
    }
   
    function display()
    {
        $(".displayData").css("display", "block");
        var name=sessionStorage.getItem("Name");
        var email=sessionStorage.getItem("Email");
        var phone=sessionStorage.getItem("Phone");
        var web=sessionStorage.getItem("web");
        var message=sessionStorage.getItem("Message");

        document.getElementById("nameValue").innerHTML = "Name: " + name;
        var value=document.getElementById("mail").value;
        document.getElementById("mailValue").innerHTML = "Email Address: ss" + email;
     
        console.log(value)
        document.getElementById("phoneValue").innerHTML = "Phone: " + phone;
        document.getElementById("websiteValue").innerHTML = "Website: " + web;
        document.getElementById("messageValue").innerHTML = "Message: " + message;
    }
   

    function nameValidation()
    {
        var toCheck=document.getElementById("name").value;
        var letters=/^[A-Za-z]+$/;
        if(toCheck=='')
        {
            document.getElementById("nameValidate").innerHTML="Name should not be empty."
            return false;
        }
        else if(!(toCheck.match(letters)))
        {
            document.getElementById("nameValidate").innerHTML="Only alphabet allowed"
            return false;
      
        }
        else
        {
            document.getElementById("mailValidate").style.display="none";
            return true;
        }
    }

    function emailValidation()
    {
        var mail=document.getElementById("mail").value;
        var mailValidate=/^(https:\/\/.)[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)$/
        if(!(mail.match(mailValidate)))
        {
            document.getElementById("mailValidate").innerHTML="Mail is not valid";
            return false;
        }
        else
        {
            document.getElementById("mailValidate").style.display="none";
            return true;
        }
      
    }

    function phoneValidation()
    {
        var phone=document.getElementById("phone").value;
        var phoneValidate=/^[1-9]\d{0}-[0-9]\d{2}-[0-9]\d{2}-[0-9]\d{2}/;
        if(!(phone.match(phoneValidate)))
        {
       
            document.getElementById("phoneValidate").innerHTML="Phone Number should be 10 number."
            return false;
        }
        else
        {
            document.getElementById("phoneValidate").style.display="none";
            return true;
        }
    }

    function websiteValidation()
    {
        var web=document.getElementById("website").value;
        if(web.match(/^https:\/\//))
        {
            document.getElementById("websiteValidate").style.display="none";
            return true;
        }
        else
        {
            document.getElementById("websiteValidate").innerHTML="Https url only allowed."
        }
    }