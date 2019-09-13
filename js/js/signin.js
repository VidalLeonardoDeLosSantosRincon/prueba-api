
let btnSign = document.getElementById("btn-signin");

btnSign.addEventListener("click",toSignIn);
let firstName;
let lastName;
let displayName;
let password;
let defaultCompany;
let email;
let verifyPassword;
let phoneNumber;


function  toSignIn(){

    firstName = document.forms["singnin-form"]["first-name"].value
    lastName = document.forms["singnin-form"]["last-name"].value;
    displayName = document.forms["singnin-form"]["display-name"].value;
    password = document.forms["singnin-form"]["password"].value;
    defaultCompany = document.forms["singnin-form"]["default-company"].value;
    email = document.forms["singnin-form"]["email"].value;
    verifyPassword = document.forms["singnin-form"]["verify-password"].value;
    phoneNumber = document.forms["singnin-form"]["phone-number"].value;

    console.log(`${email} ${pass}`);

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
        .then((res)=>{console.log(res)})
        .catch((error)=>{console.log(`Error: ${error}`)});
    }else{
        alert("empty fields not allowed")
    }
    
}