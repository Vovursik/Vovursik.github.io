window.addEventListener('DOMContentLoaded', function(){ 
    var buttons = document.getElementsByTagName('button'); 
    for (var i = 0; i < buttons.length; i++) { 
        buttons[i].addEventListener('click', function(e){
            if (e.target.getAttribute('id') == "cart_button_light" || e.target.getAttribute('id') == "cart_button_dark") {
                add_to_cart();
            }
        }) 
    } 
    });

function add_to_cart() {
    var products_array = localStorage.getItem('cart_id').split('');
    var cart_products = [];
    var find = false;
    var t = '', c = '';
    for(var i = 0; i < products_array.length; i++) {
        if (products_array[i] == '_') {
            t = c;
            c = '';
        }
        else if (products_array[i] == ' ') {
                cart_products.push([Number(t), Number(c)]);
            t = '';
            c = '';
        }
        else {
            c += products_array[i];
        }
    }

    for(var i = 0; i < cart_products.length; i++) {
        if (cart_products[i][0] == document.getElementById("product_id").textContent) {
            find = true;
            cart_products[i][1] += 1;
            console.log(cart_products);
            localStorage.setItem('cart_id', '');
            for(var i = 0; i < cart_products.length; i++) {
            localStorage.setItem('cart_id', localStorage.getItem('cart_id') + cart_products[i][0] + '_' + cart_products[i][1] + ' '); 
            }
        }
    }
    if (!find) {
        localStorage.setItem('cart_id', document.getElementById("product_id").textContent + '_1 ' + localStorage.getItem('cart_id'));
        console.log(cart_products);
    }
    window.location.href = '/cart.html';
}