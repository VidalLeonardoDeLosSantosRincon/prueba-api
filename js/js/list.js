function getUsers(){
   fetch("https://apidev.kanvas.dev/v1/users")
   .then((res)=>res.json())
        .then((res)=>{console.log(res)})
        .catch((error)=>{console.log(`Error: ${error}`)});
}

getUsers();