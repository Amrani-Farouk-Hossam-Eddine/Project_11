let lis = document.querySelectorAll(".list ul li");
let info = document.querySelector(".preview .info");
let stats = document.querySelector(".stats")
let numbers = document.querySelectorAll(".box .number");
let started = false;
let ourSkills = document.querySelector(".our-skills")
let progSpans = document.querySelectorAll(".progress span")


lis.forEach((li) => {
  li.onclick = function (e) {
    info.innerHTML = "";
    info.innerHTML = e.currentTarget.firstChild.textContent;
  };
});


window.onscroll = function () {
  if (window.scrollY >= stats.offsetTop - 300) {
    if (!started) {
      numbers.forEach((number) => startCount(number));
    }
    started = true;
  }
};

function startCount(el) {
  let goal = el.dataset.goal;
  let count = setInterval(() => {
    el.textContent++;
    if (el.textContent == goal) {
      clearInterval(count);
    }
  }, 2000 / goal);
}