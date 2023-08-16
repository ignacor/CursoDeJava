let signUp = document.getElementById("signUp");
let signIn = document.getElementById("signIn");
let nameImput = document.getElementById("nameInput");
let title = document.getElementById("title");

signIn.onclick = function() {
    nameImput.style.maxHeight = "0";
    title.innerHtml = "Login";
    signUp.classList.add("disable");
    signIn.classList.remove("disable");   
}
signUp.onclick = function() {
    nameImput.style.maxHeight = "60px";
    title.innerHtml = "Registro";
    signUp.classList.remove("disable");
    signIn.classList.add("disable");   
}