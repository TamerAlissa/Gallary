function openV(){
    document.getElementById("boxView").style.display="block";
}

function closeV(){
    document.getElementById("boxView").style.display="none";
}

var slideIndex = 1;
showSlide(slideIndex);

function rightLeft(n){
    showSlide(slideIndex += n);
}

function showPic(n){
    showSlide(slideIndex = n);
}

function showSlide(n){
    var i;
    var slide = document.getElementsByClassName("openPic");
    var point = document.getElementsByClassName("open1");

    if (n > slide.length){slideIndex = 1}
    if (n < 1){slideIndex = slide.length}
    for (i = 0; i < slide.length; i++){
        slide[i].style.display = "none";
    }

    for (i = 0; i < point.length; i++){
        point[i].className = point[i].className.replace("active" , "");
    }
        slide[slideIndex-1].style.display = "block";
        point[slideIndex - 1].className += "active";
        captionText.innerHtml = point[slideIndex-1].alt;
    }