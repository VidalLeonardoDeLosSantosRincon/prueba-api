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

    let btnLog = document.getElementById("btn-login");
    let btnCancel = document.getElementById("btn-cancel");

    btnLog.addEventListener("click",toLogIn);
    btnCancel.addEventListener("click",toCancel);

    let email;
    let password;
    let loggedIn ;
    loggedIn = false;

    function toCancel(){
        email = document.forms["login-form"]["email"].value;
        password = document.forms["login-form"]["password"].value;
        
        if(email.trim()!=="" || password.trim()!==""){
            document.forms["login-form"]["email"].value="";
            document.forms["login-form"]["password"].value="";
        }
    }

    function  toLogIn(){
        let userToken;
        email = document.forms["login-form"]["email"].value;
        password = document.forms["login-form"]["password"].value;
        //console.log(`${email} ${password}`);

        if(email.trim()!=="" && password.trim()!==""){
            if(password.length===8){
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
                        loggedIn=true;
                        if(loggedIn){
                            localStorage.setItem("userIsLoggedIn",loggedIn);
                            location.href="list.html";
                        }
                    }
                })
                .catch((error)=>{console.log(`Error: ${error}`)});
            }else{
                alert("Password just allow 8 characters of length");
            }
        }else{
            alert("empty fields not allowed");
        }
        
    }
})();
