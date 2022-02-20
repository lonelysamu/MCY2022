/*
document.onmousemove = (event) => {
    let x = event.clientX * 100 / window.innerWidth;
    x = (x-50)/50 * window.innerWidth;
    let y = event.clientY * 100 / window.innerHeight;
    x = (y-50)/50 * window.innerWidth;
    console.log("x:"+x);
    console.log("y:"+y);
    
    if(x > 60){
        window.scrollBy(50,0);
    }
    else if (x < 40){
        window.scrollBy(-50,0);
    }
    else{}

    if(y > 60){
        window.scrollBy(0,50);
    }
    else if (y < 40){
        window.scrollBy(0,-50);
    }
    else{}
     
    
    window.scrollBy(x,y);
    


}
*/