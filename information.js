if(localStorage.getItem('infShow') != 1) {
    localStorage.setItem('infShow', 1);
    document.getElementById("information").style.visibility='visible';
}

window.addEventListener('DOMContentLoaded', function(){ 
    var buttons = document.getElementsByTagName('button'); 
    for (var i = 0; i < buttons.length; i++) { 
        buttons[i].addEventListener('click', function(e){
            if (e.target.getAttribute('id') == "information_close_button")
            document.getElementById("information").style.visibility='hidden';
            if (e.target.getAttribute('id') == "help_button")
            document.getElementById("information").style.visibility='visible';
        }) 
    } 
    });