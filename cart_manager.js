var text = [ 
    ["images/products/Hat.png", "Шапка", "<del>1000&nbsp;руб.</del> 500&nbsp;руб.", 500],
    ["images/products/Sweater.png", "Свитер", "1500 руб.", 1500],
    ["images/products/Sweater2.png", "Свитер (Оверсайз)", "1800 руб.", 1800],
    ["images/products/Sticker.png", "Стикер", "50 руб.", 50]
]

if (localStorage.getItem('cart_id') == null)
localStorage.setItem('cart_id', '');

var cart_products = [];

var products_array = localStorage.getItem('cart_id').split('');
var t = '', c = '';
var subtotal = 0;

for(var i = 0; i < products_array.length; i++) {
    if (products_array[i] == '_') {
        t = c;
        c = '';
    }
    else if (products_array[i] == ' ') {
        cart_products.push([Number(t), Number(c)]);
        create_card_cart();
        t = '';
        c = '';
    }
    else {
        c += products_array[i];
    }
}
console.log(cart_products);
document.querySelector('.subtotal_text').innerHTML = "Итог: " + subtotal + " руб.";

function create_card_cart() {
    var _cc = document.getElementById('product_form').cloneNode(true);
    document.querySelector('.row').append(_cc);
    _cc.querySelector('.img').src = text[t][0];
    _cc.querySelector('.name').innerHTML = text[t][1];
    _cc.querySelector('.cost').innerHTML = text[t][2];
    _cc.querySelector('.count').innerHTML = c;
    _cc.querySelector('.product_block_cart').id = cart_products.length - 1;
    subtotal += text[t][3] * c;
    _cc.style.display='inline';
}

window.addEventListener('DOMContentLoaded', function(){ 
    var buttons = document.getElementsByTagName('button'); 
    for (var i = 0; i < buttons.length; i++) { 
        buttons[i].addEventListener('click', function(e){
            if (e.target.getAttribute('id') == "cart_plus_button")
                plus(e.target);
            if (e.target.getAttribute('id') == "cart_minus_button")
                minus(e.target);
        }) 
    } 
    });

    var _count = 1;

function plus(button) {
    cart_products[button.closest('.product_block_cart').id][1] += _count;
    button.closest('.product_block_cart').querySelector('.count').innerHTML = cart_products[button.closest('.product_block_cart').id][1];
    subtotal += text[cart_products[button.closest('.product_block_cart').id][0]][3];
    document.querySelector('.subtotal_text').innerHTML = "Итог: " + subtotal + " руб.";
    save();
}

function minus(button) {
    cart_products[button.closest('.product_block_cart').id][1] -= _count;
    button.closest('.product_block_cart').querySelector('.count').innerHTML = cart_products[button.closest('.product_block_cart').id][1];
    subtotal -= text[cart_products[button.closest('.product_block_cart').id][0]][3];
    document.querySelector('.subtotal_text').innerHTML = "Итог: " + subtotal + " руб.";
    console.log(button.closest('.product_block_cart').id);
    if (cart_products[button.closest('.product_block_cart').id][1] <= 0) {
    cart_products.splice(button.closest('.product_block_cart').id, 1);

    var child = button.closest('.product_card_cart');
    document.querySelector('.row').removeChild(child);

    var j = 0;
    document.querySelectorAll('div.row div.product_card_cart div.product_block_cart').forEach((elem) => {
        elem.id = j;
        j++;
      });
    console.log(cart_products);
    }
    save();
}

function save() {
    localStorage.setItem('cart_id', '');
    for(var i = 0; i < cart_products.length; i++) {
    localStorage.setItem('cart_id', localStorage.getItem('cart_id') + cart_products[i][0] + '_' + cart_products[i][1] + ' ');       
    }
}