function showsignup()
{
    document.getElementById('signup').style.animation = 'signupanime 0.5s 1';
    document.getElementById('heading2').style.animation = 'headanime 0.5s 1';
    document.getElementById('username2').style.animation = 'inputanime 0.7s 1';
    document.getElementById('password2').style.animation = 'inputanime 0.7s 1';
    document.getElementById('email').style.animation = 'inputanime 0.7s 1';
    document.getElementById('btn2').style.animation = 'btnanime 0.7s 1';
    document.getElementById('login').style.display = 'none';
    document.getElementById('signup').style.display = 'block';
}
function showlogin()
{
    document.getElementById('login').style.animation = 'loginanime 0.5s 1';
    document.getElementById('heading1').style.animation = 'headanime 0.5s 1';
    document.getElementById('username').style.animation = 'inputanime 0.7s 1';
    document.getElementById('password').style.animation = 'inputanime 0.7s 1';
    document.getElementById('btn').style.animation = 'btnanime 0.7s 1';
    document.getElementById('login').style.display = 'block';
    document.getElementById('signup').style.display = 'none';
}

function validate() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    if(username=="admin" && password=="admin")
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

function newuser() {
    
    document.getElementById('mysignupform').action = '../index.html';
    alert("Thanks for registration!!!");

}