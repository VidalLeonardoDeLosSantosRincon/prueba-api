(function(){
   let userIsLoggedIn;
   userIsLoggedIn = localStorage.getItem("userIsLoggedIn");
   if(userIsLoggedIn===null){
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
                        .then((res)=>{console.log(res)})
                        .catch((error)=>{console.log(`Error: ${error}`)});
                }
        }
        getUsers();
   }
})();