let btn = document.getElementById("btn");
btn.addEventListener("click", func1);
let inp1 = document.getElementById("inp1");
let inp2 = document.getElementById("inp2");
function func1() {
    let parent = document.getElementById("parent");
    let child = document.getElementById("child");
    parent.style.display = "flex";
    child.style.display = "block";
    localStorage.clear();
    localStorage.setItem("name", inp1.value);
    localStorage.setItem("otziv", inp2.value);
}
function func2() {
    window.location.href = "index2.html";
}