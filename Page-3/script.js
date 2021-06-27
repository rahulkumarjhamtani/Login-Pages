function validate() {
    var username = document.getElementById('username').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;

    if(username=="admin" && email=="admin@gmail.com" && password=="admin")
    {
        document.getElementById('myloginform').action = '../index.html';
        alert("Login successfully");
    }
    else
    {
        alert("Incorrect Username or Password");
        return false; 
    }
}
