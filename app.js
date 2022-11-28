let scrollTop = 0;
let h1;
let mainImg;
let mainImgWrap;

window.onload = function(){
    mainImg = document.getElementsByClassName('main_img')[0];
    mainImgWrap = document.getElementsByClassName('main_img_wrap')[0];
    
}

window.addEventListener('scroll', function(e){
    scrollTop = document.documentElement.scrollTop;
    mainImg.style.transform = 'scale(' + (1 + scrollTop/10000) + ')';
    mainImgWrap.style.opacity = 1 -  scrollTop / 10000;
})