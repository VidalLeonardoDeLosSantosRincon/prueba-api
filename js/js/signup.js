(function(){
    let btnSign = document.getElementById("btn-signup");

    btnSign.addEventListener("click",toSignUp);
    let firstName;
    let lastName;
    let displayName;
    let password;
    let defaultCompany;
    let email;
    let verifyPassword;
    let phoneNumber;

    function toSignUp(){
        //let registredUserToken;
        firstName = document.forms["signup-form"]["first-name"].value
        lastName = document.forms["signup-form"]["last-name"].value;
        displayName = document.forms["signup-form"]["display-name"].value;
        password = document.forms["signup-form"]["password"].value;
        defaultCompany = document.forms["signup-form"]["default-company"].value;
        email = document.forms["signup-form"]["email"].value;
        verifyPassword = document.forms["signup-form"]["verify-password"].value;
        phoneNumber = document.forms["signup-form"]["phone-number"].value;


        if(firstName.trim()!="" &&  lastName.trim()!="" 
        && displayName.trim()!="" && password .trim()!=""
        && defaultCompany.trim()!="" && email.trim()!=""
        && verifyPassword.trim()!="" && phoneNumber.trim()!=""){
            fetch("https://apidev.kanvas.dev/v1/users",{
                method:"POST",
                body:JSON.stringify({
                    firstname: firstName,
                    lastname: lastName,
                    displayname: displayName,
                    password: password,
                    default_company: defaultCompany,
                    email: email,
                    verify_password: verifyPassword,
                    phone_number: phoneNumber
                }),
                header:{
                    "Content-Type":"application/json"
                }
            }).then((res)=>res.json())
            .then((res)=>{
                console.log(res);
                if(res.session.token){
                    console.log("User registered successfully!");
                    alert("User registered successfully!");
                    location.href= "login.html";
                }
            }).catch((error)=>{console.log(`Error: ${error}`)});
        }else{
            alert("empty fields not allowed");
        }
        
    }
})();