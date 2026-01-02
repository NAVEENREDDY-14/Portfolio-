document.querySelector("form").addEventListener("submit", function(e) {
    e.preventDefault();
    alert("Message Sent Successfully!");
});
const toggleBtn = document.getElementById("theme-toggle");

toggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark");
});
const texts = [
    "Web Developer",
    "Python Full Stack Learner",
    "Frontend Enthusiast",
    "Problem Solver"
];

let count = 0;
let index = 0;
let currentText = "";
let letter = "";

(function type() {
    if (count === texts.length) {
        count = 0;
    }

    currentText = texts[count];
    letter = currentText.slice(0, ++index);

    document.querySelector(".dynamic-text").textContent = letter;

    if (letter.length === currentText.length) {
        setTimeout(() => {
            index = 0;
            count++;
        }, 1500);
    }

    setTimeout(type, 120);
})();
