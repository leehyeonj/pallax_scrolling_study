let scrollTop = 0;
let img1;
let text1;

window.onload = function () {
  img1 = document.getElementById("img1");
  text1 = document.getElementById("text1");

  window.addEventListener("scroll", scrollFunc, false);
};

function scrollFunc(e) {
  scrollTop = document.documentElement.scrollTop;
  console.log(scrollTop);
  if (scrollTop >= 970) {
    img1.classList.add("fixed_scroll_img");
    text1.classList.add("fixed_scroll_text");
  } else if (scrollTop < 970) {
    img1.classList.remove("fixed_scroll_img");
    text1.classList.remove("fixed_scroll_text");
  }
  if (scrollTop >= 1160) {
    img1.classList.remove("fixed_scroll_img");
    img1.classList.add("absolute_img");
  }
  //   if (scrollTop > 1200) {
  //     let fontsize = 100 - (scrollTop - 1200) / 10;
  //     console.log(fontsize);
  //     text_area.style.fontSize = 100 - (scrollTop - 1200) / 10 + "px";
  //   }
  //   if (scrollTop > 1600) {
  //     text_area.style.fontSize = 63 + "px";
  //     text_area.classList.add("scrollable");
  //   } else {
  //     text_area.classList.remove("scrollable");
  //   }
}
