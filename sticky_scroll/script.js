let scrollTop = 0;
let text_area;

window.onload = function () {
  text_area = document.getElementById("text_area");

  window.addEventListener("scroll", scrollFunc, false);
};

function scrollFunc(e) {
  scrollTop = document.documentElement.scrollTop;
  if (scrollTop > 1200) {
    let fontsize = 100 - (scrollTop - 1200) / 10;
    console.log(fontsize);
    text_area.style.fontSize = 100 - (scrollTop - 1200) / 10 + "px";
  }
  if (scrollTop > 1600) {
    text_area.style.fontSize = 63 + "px";
    text_area.classList.add("scrollable");
  } else {
    text_area.classList.remove("scrollable");
  }
}
