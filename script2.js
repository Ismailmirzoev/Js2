let user = document.getElementById("Username");
let pass = document.getElementById("Password");
let p1 = document.getElementById("p1");
let p2 = document.getElementById("p2");
function func1() {
    let div = JSON.parse(localStorage.getItem("user"));
    p1.innerHTML = div.user;
    p2.innerHTML = div.pass;
}