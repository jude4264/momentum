// const loginForm = document.querySelector("#login-Form")
const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
// const loginButton = document.querySelector("#login-form button");
// const link = document.querySelector("a");
const greeting = document.querySelector("#greeting");
const HIDDEN_CLASSNAME = "hidden";
const USE

function onLoginSubmit(event){
    event.preventDefault();
    const username = loginInput.value;
    loginForm.classList.add("hidden")
    // console.log(username);
    // greeting.innerText = "Hello! " + username;
    localStorage.setItem("username" , username);
    greeting.innerText = `Hello! ${username}`;
    greeting.classList.remove(HIDDEN_CLASSNAME)
}

// loginButton.addEventListener("click", onLoginBtnClick);

// function handleLinkClick(event){
//     event.preventDefault();
//     // console.log(event);
//     // alert("clicked!!!")

// }

loginForm.addEventListener("submit", onLoginSubmit)
// link.addEventListener("click", handleLinkClick)

const savedUsername = localStorage.getItem("username");
console.log(savedUsername)

if( savedUsername === null){
    // show the form


} else {
    // show the greetings
}