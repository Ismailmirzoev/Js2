let p = document.getElementById("p");
let inp1 = localStorage.getItem("name");
let inp2 = localStorage.getItem("otziv");
p.innerHTML = `Your Name Is ${inp1} And Your Review Is ${inp2}`;