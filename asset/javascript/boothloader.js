const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
let boothnumber = parseInt(urlParams.get('bi'));
console.log(boothnumber);

/*logo*/
document.querySelector("#boothlogo").src = carddb[boothnumber][1];

/*about us*/
document.querySelector("#aboutus").innerHTML = carddb[boothnumber][3];

/*desc*/
document.querySelector("#des").innerHTML = carddb[boothnumber][4];


/*Social Icon*/
document.querySelector("#socialiconlist").innerHTML = "";

for (i = 0; i < carddb[boothnumber][7].length; i++) {
    if (carddb[boothnumber][7][i] != "") {
        document.querySelector("#socialiconlist").innerHTML += "<a href=" + carddb[boothnumber][7][i] + " class='nostyle p-0 m-0' target='blank'><button class='nostyle p-0 m-1'><img src=" + socialicon[i] + " class='iconimg'></button></a>";
    }
}

/*Video*/
document.querySelector("#videocontainer").innerHTML = "";
if (carddb[boothnumber][5] == 0) {
    document.querySelector("#videotitle").innerHTML = "Video Rujukan (0)";
    document.querySelector("#videocontainer").innerHTML = "";
}
else {
    document.querySelector("#videotitle").innerHTML = "Video Rujukan (" + carddb[boothnumber][5].length + ")";
    for (i = 0; i < carddb[boothnumber][5].length; i++) {
        document.querySelector("#videocontainer").innerHTML += "<div class='col-12 col-lg-6 col-xxl-4 p-1'>  <iframe width='100%' height='280' src='https://www.youtube.com/embed/" + carddb[boothnumber][5][i] + "' title='YouTube video player'  frameborder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe></div>";
    }
}

/*Poster*/
document.querySelector("#postercontainer").innerHTML = "";
if (carddb[boothnumber][6] == 0) {
    document.querySelector("#postertitle").innerHTML = "Bahan Rujukan (0)";
    document.querySelector("#postercontainer").innerHTML = "";
}
else {
    document.querySelector("#postertitle").innerHTML = "Bahan Rujukan (" + carddb[boothnumber][6].length + ")";

    for (i = 0; i < carddb[boothnumber][6].length; i++) {
        document.querySelector("#postercontainer").innerHTML += "<div class='col-12 col-lg-6 p-1'><img src='asset/boothcontent/"+(boothnumber+1)+"/poster/" + carddb[boothnumber][6][i] + "'class='standardimage' alt=''></div>";
    }
}

/*Carousel*/
for (i = 0; i < 110; i++) {
    do {
        index = Math.floor((Math.random() * carddb.length) + 0);  
    } while (index == boothnumber);
    document.querySelector("#carouselcontent").innerHTML += "<div class='hitem'><button class='nostyle nextbooth' id=button" + index + "><img src='" + carddb[index][1] + "' class='standardimage imageclick'></button></div>"
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