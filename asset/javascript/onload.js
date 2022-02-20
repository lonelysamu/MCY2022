window.scrollTo((document.body.scrollWidth - (window.innerWidth * (window.innerWidth / document.body.offsetWidth))) / 2.5, (document.body.scrollHeight - (window.innerHeight * (window.innerHeight / document.body.offsetHeight))) / 2.5);
let check = [60, 48, 49, 50, 59, 61, 70, 71, 72];
for (i = 0; i < 121; i++) {

    if (i == 60) {
        document.querySelector("#altcontainer").innerHTML += "<div class=' cardbase  clickable budgetotop'><div class='topcard'><img src='asset/img/logo/mcy.png' class='standardimage p-2'></div><div class='botcard text-center'><p>Ingin Mengetahui Lebih Lanjut Tentang MCY?</p><a class='nostyle' href='auditorium.html'><button type='button' class='buttonstyle1 auditoriumbutton'>Tentang MCY</button></a></div></div>";
    }
    else if (i == 48) {
        document.querySelector("#altcontainer").innerHTML += "<div class='cardbase green clickable'><div class='topcard text-center'></div><div class='botcard text-start d-flex flex-wrap align-content-center'><p class='p-0 m-0'>test</p></div></div>";
    }
    else if (i == 49) {
        document.querySelector("#altcontainer").innerHTML += "<div class='cardbase blue clickable'><div class='topcard text-center'></div><div class='botcard text-start d-flex flex-wrap align-content-center'><p class='p-0 m-0'>test</p></div></div>";
    }
    else if (i == 50) {
        document.querySelector("#altcontainer").innerHTML += "<div class='cardbase clickable'><div class='topcard text-center'> <h1>Auditorium</h1> </div><div class='botcard text-center'><p>Sertai sambutan MCY 2022 secara maya dengan menonton adegan yang telah khas disediakan</p><a class='nostyle' href='auditorium.html'><button type='button' class='buttonstyle1 auditoriumbutton'>Pergi Auditorium</button></a></div></div>";
    }
    else if (i == 59) {
        document.querySelector("#altcontainer").innerHTML += "<div class='cardbase orange clickable'><div class='topcard text-center'></div><div class='botcard text-start d-flex flex-wrap align-content-center'><p class='p-0 m-0'>test</p></div></div>";
    }
    else if (i == 61) {
        document.querySelector("#altcontainer").innerHTML += "<div class='cardbase orange clickable'><div class='topcard text-center'></div><div class='botcard text-start d-flex flex-wrap align-content-center'><p class='p-0 m-0'>test</p></div></div>";
    }
    else if (i == 70) {
        document.querySelector("#altcontainer").innerHTML += "<div class='cardbase clickable'><div class='topcard text-center'></div><div class='botcard text-center'></div></div>";
    }
    else if (i == 71) {
        document.querySelector("#altcontainer").innerHTML += "<div class='cardbase blue clickable'><div class='topcard text-center'></div><div class='botcard text-start d-flex flex-wrap align-content-center'><p class='p-0 m-0'>test</p></div></div>";
    }
    else if (i == 72) {
        document.querySelector("#altcontainer").innerHTML += "<div class='cardbase green clickable'><div class='topcard text-center'></div><div class='botcard text-start d-flex flex-wrap align-content-center'><p class='p-0 m-0'>test</p></div></div>";
    }

    else {
        if(check.length != (carddb.length + 9)){
            do {
                index = Math.floor((Math.random() * carddb.length) + 0);
            } while (check.includes(index) == true);
            check.push(index);
    
            document.querySelector("#altcontainer").innerHTML += "<div class='cardbase clickable'><div class='topcard text-center'><img src='"+carddb[index][1]+"'class='standardimage p-2'></div><div class='botcard text-center'><p class='p-0 m-0'>"+carddb[index][0]+"</p><h4>"+carddb[index][2]+"</h4><button type='button' class='buttonstyle1 cardbutton' id=button"+carddb[index][0]+">More Info</button></div></div>";

        }
        else{
            index = Math.floor((Math.random() * carddb.length) + 0);
            document.querySelector("#altcontainer").innerHTML += "<div class='cardbase clickable'><div class='topcard text-center'><img src='"+carddb[index][1]+"'class='standardimage p-2'></div><div class='botcard text-center'><p class='p-0 m-0'>"+carddb[index][0]+"</p><h4>"+carddb[index][2]+"</h4><button type='button' class='buttonstyle1 cardbutton' id=button"+carddb[index][0]+">More Info</button></div></div>";

        }

    }
}