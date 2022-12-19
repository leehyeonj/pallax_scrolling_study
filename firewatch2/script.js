let scrollTop = 0;
let imageAll;
let totalNum = 0;
window.onload = function () {
  imageAll = document.querySelectorAll(".parallax");
  totalNum = imageAll.length;
  window.addEventListener("scroll", scrollFunc, false);
};

function scrollFunc(e) {
  scrollTop = this.scrollY;
  for (var i = 0; i < totalNum; i++) {
    imageAll[i].style.transform =
      "perspective(400px) translateZ(" +
      scrollTop / (5 * (totalNum - i)) +
      "px)";

    console.log(scrollTop, scrollTop / (5 * (totalNum - i)));
  }
}
