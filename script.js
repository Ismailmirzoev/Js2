let user = document.getElementById("username");
let pass = document.getElementById("password");
function func1() {
    window.location.href = "index2.html"
    let obj = {
        user: user.value,
        pass: pass.value
    }
    let json1 = JSON.stringify(obj);
    localStorage.setItem("user", json1);
}
