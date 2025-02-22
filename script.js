setInterval(func1, 1000);

let d = 0;
function func1() {
  document.getElementById("id1").innerHTML = d++;
}
let i = 2;
function func2() {
    let ol = document.getElementById("ol");
    let l1 = document.createElement("li");
    l1.innerHTML = "list" + i++;
    document.body.append(l1);
    ol.body.append(l1);
}