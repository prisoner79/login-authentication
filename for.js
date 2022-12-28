function validate(){

    var username=document.getElementById("username").value;
    
    if(username=="admin"){
        alert("mail sent succesfully");
        return false;
    }
    else{
        alert("login failed");
    }


}