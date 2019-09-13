let btnLog = document.getElementById("btn-login");

btnLog.addEventListener("click",toLogIn);
let email;
let pass;

function  toLogIn(){
    email = document.forms["login-form"]["email"].value;
    pass = document.forms["login-form"]["password"].value;
    console.log(`${email} ${pass}`);

    if(email.trim()!="" && pass.trim()!=""){
        fetch("https://apidev.kanvas.dev/v1/auth",{
            method:"POST",
            body:{
                email,
                pass
            },
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
