(function(){

    let sessionStarted;
    sessionStarted = localStorage.getItem("userIsLoggedIn");
    if(sessionStarted!==null){
        let menu;
        menu = document.getElementsByClassName("header")[0];
        menu.children[0].innerHTML='<a style="color:dodgerblue; \
        text-decoration:none; font-family:arial; font-size:14px;"\
         href="logout.html">Logout</a>';
    }

    let btnSign = document.getElementById("btn-signup");
    let btnCancel = document.getElementById("btn-cancel");
    btnSign.addEventListener("click",toSignUp);
    btnCancel.addEventListener("click",toCancel);
    
    let firstName;
    let lastName;
    let displayName;
    let password;
    let defaultCompany;
    let email;
    let verifyPassword;
    let phoneNumber;

    function toCancel(){
        firstName = document.forms["signup-form"]["first-name"].value
        lastName = document.forms["signup-form"]["last-name"].value;
        displayName = document.forms["signup-form"]["display-name"].value;
        password = document.forms["signup-form"]["password"].value;
        defaultCompany = document.forms["signup-form"]["default-company"].value;
        email = document.forms["signup-form"]["email"].value;
        verifyPassword = document.forms["signup-form"]["verify-password"].value;
        phoneNumber = document.forms["signup-form"]["phone-number"].value;
        
        if(firstName.trim()!=="" || lastName.trim()!=="" || 
        displayName.trim()!=="" || password.trim()!=="" ||
        defaultCompany.trim()!=="" || email.trim()!=="" ||
        verifyPassword.trim()!=="" || phoneNumber.trim()!==""){
            document.forms["signup-form"]["first-name"].value="";
            document.forms["signup-form"]["last-name"].value="";
            document.forms["signup-form"]["display-name"].value="";
            document.forms["signup-form"]["password"].value="";
            document.forms["signup-form"]["default-company"].value="";
            document.forms["signup-form"]["email"].value="";
            document.forms["signup-form"]["verify-password"].value="";
            document.forms["signup-form"]["phone-number"].value="";
        }
    }

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


        if(firstName.trim()!=="" &&  lastName.trim()!=="" 
        && displayName.trim()!=="" && password .trim()!==""
        && defaultCompany.trim()!=="" && email.trim()!==""
        && verifyPassword.trim()!=="" && phoneNumber.trim()!==""){
            if(password.length!==8 && verifyPassword.length===8){
                console.log("Password just allow 8 characters of length.");
                alert("Password just allow 8 characters of length.");
            }else if(password.length===8 && verifyPassword.length!==8){
                console.log("Verify password just allow 8 characters of length.");
                alert("Verify password just allow 8 characters of length.");
            }else if(password.length!==8 && verifyPassword.length!==8){
                console.log("Password just allow 8 characters of length.\
                Verify password just allow 8 characters of length.");
                alert("Password just allow 8 characters of length.\
                Verify password just allow 8 characters of length.");
            }else{
                if(password !==verifyPassword){
                    console.log("password and verify password are differents.");
                    alert("password and verify password are differents.");
                }else{       
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
                }
            }

        }else{
            alert("empty fields not allowed");
        } 
    }
})();