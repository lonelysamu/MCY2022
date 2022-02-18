window.scrollTo((document.body.scrollWidth - (window.innerWidth * (window.innerWidth / document.body.offsetWidth))) / 2.5, (document.body.scrollHeight - (window.innerHeight * (window.innerHeight / document.body.offsetHeight))) / 2.5);
let check = [60, 48, 49, 50, 59, 61, 70, 71, 72];
for (i = 0; i < 121; i++) {

    if (i == 60) {
        document.querySelector("#altcontainer").innerHTML += "<div class=' cardbase  clickable'><div class='topcard'><img src='asset/img/logo/mcy.png' class='standardimage p-2'></div><div class='botcard text-start d-flex flex-wrap align-content-center'><p class='p-0 m-0'>Program Pengkomersialan R&D Negara atau Tahun Pengkomersialan Malaysia merupakan program untuk melonjakkan hasil penyelidikan, pembangunan dan inovasi (R,D&I) daripada universiti,institusi,agensi penyelidikan tempatan sebagai penjana kekayaan melalui proses pengkomersialan.</p></div></div>";
    }
    else if (i == 48) {
        document.querySelector("#altcontainer").innerHTML += "<div class='cardbase green clickable'><div class='topcard text-center'></div><div class='botcard text-start d-flex flex-wrap align-content-center'><p class='p-0 m-0'>test</p></div></div>";
    }
    else if (i == 49) {
        document.querySelector("#altcontainer").innerHTML += "<div class='cardbase blue clickable'><div class='topcard text-center'></div><div class='botcard text-start d-flex flex-wrap align-content-center'><p class='p-0 m-0'>test</p></div></div>";
    }
    else if (i == 50) {
        document.querySelector("#altcontainer").innerHTML += "<div class='cardbase clickable'><div class='topcard text-center'> <h1>Auditorium</h1> </div><div class='botcard text-center'><p>Watch what is happening for MCY 2022 in the auditorium!</p><a class='nostyle' href='auditorium.html'><button type='button' class='buttonstyle1 auditoriumbutton'>Go To Auditorium</button></a></div></div>";
    }
    else if (i == 59) {
        document.querySelector("#altcontainer").innerHTML += "<div class='cardbase orange clickable'><div class='topcard text-center'></div><div class='botcard text-start d-flex flex-wrap align-content-center'><p class='p-0 m-0'>test</p></div></div>";
    }
    else if (i == 61) {
        document.querySelector("#altcontainer").innerHTML += "<div class='cardbase orange clickable'><div class='topcard text-center'></div><div class='botcard text-start d-flex flex-wrap align-content-center'><p class='p-0 m-0'>test</p></div></div>";
    }
    else if (i == 70) {
        document.querySelector("#altcontainer").innerHTML += "<div class='cardbase clickable'><div class='topcard text-center'> <h1>Tentang MCY</h1> </div><div class='botcard text-center'><h1>About MCY</h1></div></div>";
    }
    else if (i == 71) {
        document.querySelector("#altcontainer").innerHTML += "<div class='cardbase blue clickable'><div class='topcard text-center'></div><div class='botcard text-start d-flex flex-wrap align-content-center'><p class='p-0 m-0'>test</p></div></div>";
    }
    else if (i == 72) {
        document.querySelector("#altcontainer").innerHTML += "<div class='cardbase green clickable'><div class='topcard text-center'></div><div class='botcard text-start d-flex flex-wrap align-content-center'><p class='p-0 m-0'>test</p></div></div>";
    }

    else {
        do {
            index = Math.floor((Math.random() * 121) + 1);
        } while (check.includes(index) == true);
        check.push(index);

        document.querySelector("#altcontainer").innerHTML += "<div class='cardbase clickable'><div class='topcard text-center'><img src='asset/img/logo/templatelogo.jpg'class='standardimage p-2'></div><div class='botcard text-center'><p class='p-0 m-0'>"+index+"</p><h4>Company Name</h4><button type='button' class='buttonstyle1 cardbutton' id=button"+index+">More Info</button></div></div>";

        zstatus = Math.floor((Math.random() * 4) + 1);
        if (zstatus == 2) {
            document.querySelectorAll(".cardbase")[i].classList.add("budgetotop");
        }
        else if (zstatus == 3) {
            document.querySelectorAll(".cardbase")[i].classList.add("budgetobottom");
        }

    }
}