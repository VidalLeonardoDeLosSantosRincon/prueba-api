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


   let userIsLoggedIn;
   userIsLoggedIn = localStorage.getItem("userIsLoggedIn");
   if(userIsLoggedIn===null){
        alert("Please get logged in to access!");
        location.href="login.html";
   }else{
        function getUsers(){
                let userToken;
                if(localStorage.getItem("userToken")!==null){
                        userToken = localStorage.getItem("userToken");
                        fetch("https://apidev.kanvas.dev/v1/users",{
                                headers:{ 'Authorization': 'Bearer '+ userToken}
                        })
                        .then((res)=>res.json())
                        .then((res)=>{
                                console.log(res)
                                let list = document.getElementsByClassName("list-users")[0];
                                res.map((r)=>{
                                        list.innerHTML += `
                                        <div class="elem">
                                                <span>First Name: ${r.firstname}</span>
                                                <span>Last Name: ${r.lastname}</span>
                                                <span>Display name: ${r.displayname}</span>
                                                <span>Password: ${r.password}</span>
                                                <span>Default company: ${r.default_company}</span>
                                                <span>Email: ${r.email}</span>
                                                <span>Phone number: ${r.phone_number}</span>
                                        </div>`;
                                });
                        
                        })
                        .catch((error)=>{console.log(`Error: ${error}`)});
                }
        }
        getUsers();
   }
})();