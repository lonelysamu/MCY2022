document.querySelector('#altcontainer').addEventListener('click', (e) => {
    if (e.target.classList.contains("cardbutton") == true) {
        let boothindex= e.target.id.slice(6);
        window.location.href = 'booth.html?bi=' +boothindex ;
    }
    else    if (e.target.classList.contains("cardbutton") == true) {
        let boothindex= e.target.id.slice(6);
        window.location.href = 'booth.html?bi=' +boothindex ;
    }

})