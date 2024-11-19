let username = document.getElementById('username');  
let password = document.getElementById('password');  
let login_btn = document.getElementById('log_in');  
let getuser = localStorage.getItem("username");  
let getpassword = localStorage.getItem("password");  

login_btn.addEventListener('click', function(e) {
    e.preventDefault();
    if (username.value === "" || password.value === "") {
        alert("Please Fill Data");
    } else {
        if ((getuser && getuser.trim() === username.value.trim()) && (getpassword  &&  getpassword.trim() === password.value.trim())) {
            setTimeout(() => {
                window.location = "index.html";
            } , 1500)
        } else {
            alert("UserName or Password is Wrong!!");
        }
    }
});
