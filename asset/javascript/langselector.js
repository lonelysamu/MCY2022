const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
let boothnumber = parseInt(urlParams.get('lang'));


if (boothnumber == "1" ){
    document.querySelectorAll(".ENG").forEach(removealllang);
    document.querySelectorAll(".BM").forEach(addalllang);
}
else if (boothnumber == "2"){
    document.querySelectorAll(".BM").forEach(removealllang);
    document.querySelectorAll(".ENG").forEach(addalllang);
    document.querySelector(".buttonstyle1active").classList.remove("buttonstyle1active");
    document.querySelector("#engbutton").classList.add("buttonstyle1active");
    if( document.querySelector("#registrationlink") != null){
        document.querySelector("#registrationlink").href = "register.html?lang=2"; 
    }
    if( document.querySelector("#forgetpasswordlink") != null){
        document.querySelector("#forgetpasswordlink").href = "forgetpassword.html?lang=2";
    }
    if( document.querySelector("#loginlink") != null){
        document.querySelector("#loginlink").href = "index.html?lang=2"; 
    }
}


document.querySelector('#langselector').addEventListener('click', (e) => {
    if(e.target.id == "engbutton"){
        document.querySelectorAll(".BM").forEach(removealllang);
        document.querySelectorAll(".ENG").forEach(addalllang);

        if( document.querySelector("#registrationlink") != null){
            document.querySelector("#registrationlink").href = "register.html?lang=2"; 
        }
        if( document.querySelector("#forgetpasswordlink") != null){
            document.querySelector("#forgetpasswordlink").href = "forgetpassword.html?lang=2";
        }
        if( document.querySelector("#loginlink") != null){
            document.querySelector("#loginlink").href = "index.html?lang=2"; 
        }
        document.querySelector(".buttonstyle1active").classList.remove("buttonstyle1active");
        e.target.classList.add("buttonstyle1active");

    }
    else if(e.target.id == "bmbutton"){
        document.querySelectorAll(".ENG").forEach(removealllang);
        document.querySelectorAll(".BM").forEach(addalllang);

        if( document.querySelector("#registrationlink") != null){
            document.querySelector("#registrationlink").href = "register.html?lang=1"; 
        }
        if( document.querySelector("#forgetpasswordlink") != null){
            document.querySelector("#forgetpasswordlink").href = "forgetpassword.html?lang=1";
        }
        if( document.querySelector("#loginlink") != null){
            document.querySelector("#loginlink").href = "index.html?lang=1"; 
        }
        document.querySelector(".buttonstyle1active").classList.remove("buttonstyle1active");
        e.target.classList.add("buttonstyle1active");
    }
    
})

function removealllang(item,index){
    item.classList.add("d-none");
}

function addalllang(item,index){
    item.classList.remove("d-none");
}