(function(){
    let userIsLoggedIn;
    let userToken;
    userIsLoggedIn = localStorage.getItem("userIsLoggedIn");
    userToken = localStorage.getItem("userToken");
    if(userIsLoggedIn!==null && userToken===null){
        localStorage.removeItem("userIsLoggedIn");
         location.href="login.html";
    } else if(userIsLoggedIn===null && userToken!==null){
        localStorage.removeItem("userToken");
        location.href="login.html";
    }else if(userIsLoggedIn!==null && userToken!==null){
        localStorage.removeItem("userIsLoggedIn");
        localStorage.removeItem("userToken");
        location.href="login.html";
    }else if(userIsLoggedIn===null && userToken===null){
        location.href="login.html";
    }
})();