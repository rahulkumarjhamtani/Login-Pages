function validate() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    if(username=="admin" && password=="admin")
    {
        document.getElementById('myform').action = '../index.html';
        alert("Login successfully");
    }
    else
    {
        alert("Incorrect Username or Password");
        return false; 
    }
}