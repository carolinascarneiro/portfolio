function myFunction() {
    document.getElementById("home").innerText = "YOU CHANGED ME!";
}

let btn = document.getElementById("projects-btn")
// document.addEventListener('DOMContentLoaded', function () {
//     projects-btn.addEventListener('click', myFunction, false);
// });

btn.addEventListener('click', myFunction)
console.log("hi")

