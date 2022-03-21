if (localStorage.getItem('theme') == 1) {
    document.getElementById("body").style.background='url(images/Background.png) no-repeat';
    document.getElementById("body").style.backgroundColor='black';
    document.getElementById("body").style.backgroundAttachment='fixed';
    document.getElementById("body").style.backgroundSize='cover';
    document.getElementById("body").style.backgroundAttachment='fixed';
    document.getElementById("color_button").style.background='url(images/outline_invert_black.png) no-repeat center';
    document.getElementById("color_button").style.backgroundSize='auto 80%';
    document.querySelectorAll('div.product_info').forEach((elem) => {
        elem.style.color='gainsboro';
      });
} 
else
{
localStorage.setItem('theme', 0);
}

if(localStorage.getItem('infShow') != 1) {
    localStorage.setItem('infShow', 1);
    document.getElementById("information").style.visibility='visible';
}

function change_theme() {
    if (localStorage.getItem('theme') == 0) {
        localStorage.setItem('theme', 1);
        document.getElementById("body").style.background='url(images/Background.png) no-repeat';
        document.getElementById("body").style.backgroundColor='black';
        document.getElementById("body").style.backgroundAttachment='fixed';
        document.getElementById("body").style.backgroundSize='cover';
        document.getElementById("body").style.backgroundAttachment='fixed';
        document.getElementById("color_button").style.background='url(images/outline_invert_black.png) no-repeat center';
        document.getElementById("color_button").style.backgroundSize='auto 80%';
        document.querySelectorAll('div.product_info').forEach((elem) => {
            elem.style.color='gainsboro';
          });
    } 
    else {
        localStorage.setItem('theme', 0);
        document.getElementById("body").style.background='url(images/Background1.png) no-repeat';
        document.getElementById("body").style.backgroundColor='white';
        document.getElementById("body").style.backgroundAttachment='fixed';
        document.getElementById("body").style.backgroundSize='cover';
        document.getElementById("body").style.backgroundAttachment='fixed';
        document.getElementById("color_button").style.background='url(images/outline_invert_white.png) no-repeat center';
        document.getElementById("color_button").style.backgroundSize='auto 80%';
        document.querySelectorAll('div.product_info').forEach((elem) => {
            elem.style.color='black';
          });
    }
}

window.addEventListener('DOMContentLoaded', function(){ 
    var buttons = document.getElementsByTagName('button'); 
    for (var i = 0; i < buttons.length; i++) { 
        buttons[i].addEventListener('click', function(e){
            if (e.target.getAttribute('id') == "color_button")
            change_theme();
            if (e.target.getAttribute('id') == "information_close_button")
            document.getElementById("information").style.visibility='hidden';
            if (e.target.getAttribute('id') == "help_button")
            document.getElementById("information").style.visibility='visible';
        }) 
    } 
    });