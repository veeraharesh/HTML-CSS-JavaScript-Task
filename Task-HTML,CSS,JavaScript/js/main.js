function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  
  // Close the dropdown if the user clicks outside of it
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }
function careers()
{
 window.open("../html/careers.html");
}
function home()
{
  window.open("../html/main.html");
}
function login()
{
  window.open("../html/login.html");
}
function register()
{
  window.open("../html/register.html")
}
function registered()
{
  var name=document.getElementById("name");
  var uname=document.getElementById("uname");
  var email=document.getElementById("email");
  var ph=document.getElementById("phno");
  var ps=document.getElementById("pswd");
  var rps=document.getElementById("rpswd");

  let user = new Array();
  let userobject = {name:name.value, uname:uname.value, email:email.value, ph:ph.value, ps:ps.value, rps:rps.value};

 
  if(name.value.length==0)
  {
    window.alert("Enter Name... Box cannot be empty");
  }
  else if(uname.value.length==0)
  {
    window.alert("Enter User Name... Box cannot be empty");
  }
  else if(email.value.length==0 && email.value!='@')
  {
    window.alert("Enter email id... Box cannot be empty");
  }
  else if(ph.value.length==0)
  {
    window.alert("Enter Phone Number... Box cannot be empty");
  }
  else if(ps.value.length==0)
  {
    window.alert("Enter password... Box cannot be empty");
  }
  else if(ps.value!=rps.value)
  {
    window.alert("password wrong");
  }
  else
  {
    user.push(userobject);
    localStorage.setItem("details", JSON.stringify(user));
    window.alert("Registration Success.... Welcome " + name.value);
    window.open("../html/careers.html");
  }
}
var form = document.getElementById("Formdata");
form.addEventListener("submit", (e) => {
  e.preventDefault();
var logName = document.getElementById("uname").value;
 var logpass = document.getElementById("pswd").value;

 let login = new Array();
 let logobj={
  loginname:logName, 
  loginpassword:logpass
 }
 var regname = JSON.parse(localStorage.getItem("details")) || [];
 let user = regname.length && JSON.parse(localStorage.getItem("details")).find(object=>object.uname===logName && object.ps===logpass);

 if(user)
 {
  alert("Welcome user "+uname.value);
  login.push(logobj);
  localStorage.setItem("logindetails", JSON.stringify(login));
  window.open("../html/dashboard.html");
 }
 else
 {
  alert("Login error");
  window.open("../html/careers.html");
 }
 Formdata.reset();
 window.onload=hideLog();
});

const hideLog = () => {
  if (window.localStorage.getItem("logindetails") !== null) {
    document.getElementById("Formdata").style.display = "none";
    const h2 = document.createElement("h2");
    h2.setAttribute("id", "lgHead");
    h2.innerHTML = "You Are already Logged in!";
    document.body.appendChild(h2);
    const btn = document.createElement("BUTTON");
    btn.setAttribute("id", "logout");
    btn.innerHTML = "Log out";
    document.body.appendChild(btn);
    document.getElementById("logout").addEventListener("click", () => {
      window.localStorage.removeItem("logindetails");
      window.location.href = "../html/login.html";
    });
  }
};