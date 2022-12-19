var opThresh = 350;
var opFactor = 750;
let scrollTop = 0;
window.onload = function () {
  window.addEventListener("scroll", scrollFunc, false);
};

function scrollFunc(e) {
  var top = window.pageYOffset;

  var layers = document.getElementsByClassName("parallax");
  var layer, speed, yPos;
  for (var i = 0; i < layers.length; i++) {
    layer = layers[i];
    speed = layer.getAttribute("data-speed");
    var yPos = -((top * speed) / 100);

    layer.setAttribute(
      "style",
      "transform: translate3d(0px, " + yPos + "px, 0px)"
    );
  }
  //   scrollTop = document.documentElement.scrollTop;

  //스크롤을 할때마다 스크롤 위치에 따라서 위치가 달라짐
  //원래 fixed였기 때문
  //   parallax_0.style.transform = "translate3d(0px ," + top * 0.01 + "px , 0px)";
  //   parallax_1.style.transform = "translate3d(0px ," + top * 0.1 + "px , 0px)";
  //   parallax_2.style.transform = "translate3d(0px ," + -top * 0.12 + "px , 0px)";
  //   parallax_3.style.transform = "translate3d(0px ," + -top * 0.16 + "px , 0px)";
}
