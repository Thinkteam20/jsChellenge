const form = document.querySelector(".js-form"),
    input = form.querySelector("input"),
    greeting = document.querySelector(".js-greetings");

const USER_LS = "currentUser",
    SHOWING_CN = "showing";
                        // text is an argument 
function paintGreeting(text){
    form.classList.remove(SHOWING_CN); // block showing form 
    greeting.classList.add(SHOWING_CN); // show me the  h4 greeting 
    greeting.innerText = `Hello ${text}`; // put text i sent him 
}

function saveName(text){
    localStorage.setItem(USER_LS, text);
}

function handleSubmit(event){
    event.preventDefault()
    // make it nothing happen when press enter 
    const currentValue = input.value;
    //console.log(currentValue);
    paintGreeting(currentValue);
    saveName(currentValue);
}

function askForName(){
    form.classList.add(SHOWING_CN);
    form.addEventListener("submit",handleSubmit);
}
//step two showing the form by using form.classList.add(SHOWING_CN) 
// form (document) . find class list . action add (object)
// form (document) go to 'form' document and do / eventListener / ("submit")
// however on the website it looks refresh because it does not send to user's local storage 
//so add handleSubmit() function which is doing default behavior which sent input data to the "root"



function loadName(){
    const currentUser = localStorage.getItem(USER_LS);
    if(currentUser === null){
        // user is not here
        askForName();
        //step one add askForname() function 
    }else{
        //she is here 
        paintGreeting(currentUser); 
    }
}

function init(){
    loadName();
}

init();