if (localStorage.getItem('theme') == 1) {
    document.getElementById("body").style.background='url(images/Background.png) no-repeat';
    document.getElementById("body").style.backgroundColor='black';
    document.getElementById("body").style.backgroundAttachment='fixed';
    document.getElementById("body").style.backgroundSize='cover';
    document.getElementById("body").style.backgroundAttachment='fixed';
    document.getElementById("color_button").style.background='url(images/outline_invert_black.png) no-repeat center';
    document.getElementById("color_button").style.backgroundSize='auto 80%';

    try {
    document.querySelectorAll('div.product_info').forEach((elem) => {
        elem.style.color='gainsboro';
      });}
      catch (err) {}
      try {
      document.getElementById("helper").style.color='gray';
      document.getElementById("helper_click").src='images/helper_click.png';
      document.getElementById("helper_scroll").src='images/helper_scroll.png';
      document.getElementById("cart_button_dark").style.display='none';
      document.getElementById("cart_button_light").style.display='inline';
      document.getElementById("loading_image").style.background='url(images/outline_cached1.png) no-repeat center';
      document.getElementById("loading_image").style.backgroundSize='auto 100%';
    }
    catch (err) {}
    try {
        document.querySelectorAll('div.making h2').forEach((elem) => {
            elem.style.color='gainsboro';
          });
    }
    catch (err) {}
} 
else
{
localStorage.setItem('theme', 0);
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

        try {
        document.querySelectorAll('div.product_info').forEach((elem) => {
            elem.style.color='gainsboro';
          });
          document.getElementById("helper").style.color='gray';
          document.getElementById("helper_click").src='images/helper_click.png';
          document.getElementById("helper_scroll").src='images/helper_scroll.png';
          document.getElementById("cart_button_dark").style.display='none';
          document.getElementById("cart_button_light").style.display='inline';
          document.getElementById("loading_image").style.background='url(images/outline_cached1.png) no-repeat center';
          document.getElementById("loading_image").style.backgroundSize='auto 100%';
        }
        catch (err) {}
        try {
            document.querySelectorAll('div.making h2').forEach((elem) => {
                elem.style.color='gainsboro';
              });
        }
        catch (err) {}
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

        try {
        document.querySelectorAll('div.product_info').forEach((elem) => {
            elem.style.color='black';
          });
          document.getElementById("helper").style.color='black';
          document.getElementById("helper_click").src='images/helper_click1.png';
          document.getElementById("helper_scroll").src='images/helper_scroll1.png';
          document.getElementById("cart_button_dark").style.display='inline';
          document.getElementById("cart_button_light").style.display='none';
          document.getElementById("loading_image").style.background='url(images/outline_cached.png) no-repeat center';
          document.getElementById("loading_image").style.backgroundSize='auto 100%';
        }
        catch (err) {}
        try {
            document.querySelectorAll('div.making h2').forEach((elem) => {
                elem.style.color='black';
              });
        }
        catch (err) {}
    }
}

window.addEventListener('DOMContentLoaded', function(){ 
    var buttons = document.getElementsByTagName('button'); 
    for (var i = 0; i < buttons.length; i++) { 
        buttons[i].addEventListener('click', function(e){
            if (e.target.getAttribute('id') == "color_button")
            change_theme();
        }) 
    } 
    });