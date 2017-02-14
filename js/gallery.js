/**
 * Created by zimax_000 on 14/02/2017.
 */


var links = document.querySelectorAll("a.lb"),
    linksLength = links.length,
    gallery = document.getElementById("gallery"),
    overlay = document.getElementById("overlay"),
    prevBtn = document.getElementById("prev"),
    nextBtn = document.getElementById("next"),
    currentSlide = 0;


for ( var i=0; i<linksLength; i++ ) {
    (function (currentI){
        links[currentI].addEventListener("click", function (e) {
            e.preventDefault();
            showImg(e.currentTarget.href, currentI);
        });
    })(i);
}

function showImg(link, position){
    var img = new Image(),
        imgExist = document.querySelector("#gallery img");

    if(imgExist) {
        gallery.removeChild(imgExist);
    }

    img.addEventListener("load", function () {

        gallery.style.display = "block";
        //Insertion de l'image
        gallery.appendChild(img);
        img.classList = "img-responsive";
        img.style.marginTop = (window.innerHeight - img.height) / 2 + "px";
        img.setAttribute("data-position", position);

    });
    img.src = link;
}

function prevImg(){
    goToImg( parseInt(document.querySelector("#gallery img").getAttribute("data-position"),10) - 1 );
}

function nextImg() {
    goToImg( parseInt(document.querySelector("#gallery img").getAttribute("data-position"),10) + 1 );
}

function goToImg(id) {
    currentSlide = (id + linksLength) % linksLength;
    showImg(links[currentSlide].href, currentSlide);
}


//ACTIONS

//Fermeture de la gallerie au click sur l'overlay
overlay.addEventListener("click", function () {
    gallery.style.display = "none";
    gallery.removeChild( document.querySelector("#gallery img") );
});

//
prevBtn.addEventListener("click", function () {
    prevImg();
});

nextBtn.addEventListener("click", function () {
    nextImg();
});