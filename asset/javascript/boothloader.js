for (i = 0; i < 100; i++) {
    document.querySelector("#carouselcontent").innerHTML += "<div class='hitem'><button class='nostyle nextbooth' id=button"+i+"><img src='asset/img/logo/templatelogo.jpg' class='standardimage imageclick'></button></div>"
}


document.querySelector('#carousellogo').addEventListener('click', (e) => {
    if (e.target.classList.contains("imageclick") == true) {
        let boothindex = e.target.parentNode.id.slice(6);
        console.log(boothindex);
        window.location.href = 'booth.html?bi=' + boothindex;
    }
    else if (e.target.classList.contains("backbutton") == true) {
        window.location.href = 'lobby.html'
    }

})