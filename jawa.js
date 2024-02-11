//               function for calculating random color

let randomcolor=function(){
    let hex="0123456789ABCDEF";
    let color="#";

    for(let i = 0;i < 6;i++){
        color+=hex[Math.floor(Math.random() * 16)];
    }

    return color;
};

//              function after touchinng start 

let startchanging=function(){
   ankit= setInterval(function(){document.body.style.backgroundColor=randomcolor();
    },50);
};

//              function after touching stop

const stopchanging=function(){
    clearInterval(ankit);
    document.body.style.backgroundColor="white";
}

document.querySelector("#start").addEventListener("click",startchanging);
document.querySelector("#stop").addEventListener("click",stopchanging);