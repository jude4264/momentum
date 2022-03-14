// const loginForm = document.querySelector("#login-Form")
const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
// const loginButton = document.querySelector("#login-form button");
// const link = document.querySelector("a");
const greeting = document.querySelector("#greeting");
const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event){
    event.preventDefault();
    const typedUsername = loginInput.value;
    loginForm.classList.add(HIDDEN_CLASSNAME);
    // console.log(username);
    // greeting.innerText = "Hello! " + username;
    localStorage.setItem(USERNAME_KEY, typedUsername);
    // greeting.innerText = `Hello! ${username}`;
    // greeting.classList.remove(HIDDEN_CLASSNAME)
    paintGreetings();
}


function paintGreetings(){
    const username = localStorage.getItem(USERNAME_KEY);
    greeting.innerText = `Hello ${username}`
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

// loginButton.addEventListener("click", onLoginBtnClick);

// function handleLinkClick(event){
//     event.preventDefault();
//     // console.log(event);
//     // alert("clicked!!!")

// }

loginForm.addEventListener("submit", onLoginSubmit);
// link.addEventListener("click", handleLinkClick)

const savedUsername = localStorage.getItem(USERNAME_KEY);
console.log(savedUsername)

if(savedUsername === null){
    // show the form
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);


} else {
    // show the greetings
    paintGreetings();
}