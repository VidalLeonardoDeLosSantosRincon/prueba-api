let btnLog = document.getElementById("btn-login");

btnLog.addEventListener("click",toLogIn);
let email;
let password;

function  toLogIn(){
    let userToken;
    email = document.forms["login-form"]["email"].value;
    password = document.forms["login-form"]["password"].value;
    console.log(`${email} ${password}`);

    if(email.trim()!="" && password.trim()!=""){
        fetch("https://apidev.kanvas.dev/v1/auth",{
            method:"POST",
            body:JSON.stringify({
                email,
                password
            }),
            header:{
                "Content-Type":"application/json"
            }
        }).then((res)=>res.json())
        .then((res)=>{
            console.log(res);
            console.log(res.token);
            if(res.token){
                userToken = res.token;
                localStorage.setItem("userToken",userToken);
            }
        })
        .catch((error)=>{console.log(`Error: ${error}`)});
    }else{
        alert("empty fields not allowed")
    }
    
}
