var text = [ 
    [
    ["Дак значит ты знакомый Мии, так?", "Кира", "khaki", "Sprites/Characters/Girl_0_0.png"],
    ["Я тебя представляля немного по-другому. Всё-таки она умеет удивить.", "Кира", "khaki", "Sprites/Characters/Girl_0_0.png"],
    ["Так, что ты хотел?", "Кира", "khaki", "Sprites/Characters/Girl_0_0.png"],  
    ["Мия просила вернуть те тетради, что она тебе одолжила неделю назад, вот я и пришел.", "Игрок", "lightslategray", "Sprites/Characters/Girl_0_0.png"],
    ["А почему она сама не пришла их забрать, а отправила тебя?", "Кира", "khaki", "Sprites/Characters/Girl_0_1.png"], 
    ["Просто она сильно занята, а эти тетради ей нужны уже сегодня. Я был свободен, поэтому решил помочь своей подруге.", "Игрок", "lightslategray", "Sprites/Characters/Girl_0_0.png"],
    ["Тоже мне, помощничек нашелся.", "Кира", "khaki", "Sprites/Characters/Girl_0_1.png"],
    ["Ладно. Пошли в мою комнату, только ничего там не трогай, а то получишь!", "Кира", "khaki", "Sprites/Characters/Girl_0_0.png"],
    ],
    [
    ["Так, тетрадки, они должны быть где-то тут. Сейчас найдем.", "Кира", "khaki", "Sprites/Characters/Girl_0_0.png"],
    ["*Звуки перебирания предметов*", "", "", ""],
    ["Какая странная девченка...", "", "", ""],
    ["От ее взгляда аж муражки по коже бегут.", "", "", ""],
    ["Такс, надо успокоится...", "", "", ""],
    ["*Звук падения чего-то тяжелого*", "", "", ""],
    ["Забираю тетрадки и ухожу.", "", "", ""],
    ["А вот и они!", "Кира", "khaki", "Sprites/Characters/Girl_0_2.png"],
    ["Мия тебе случайно не говорила, сколько их должно быть?", "Кира", "khaki", "Sprites/Characters/Girl_0_2.png"],
    ["Да я как то забыл про это спросить.", "Игрок", "lightslategray", "Sprites/Characters/Girl_0_2.png"],
    ["Ясно, тут все должны быть.", "Кира", "khaki", "Sprites/Characters/Girl_0_0.png"],
    ["Окей.", "Игрок", "lightslategray", "Sprites/Characters/Girl_0_0.png"],
    ["Кстати, у тебя здесь довольно уютно.", "Игрок", "lightslategray", "Sprites/Characters/Girl_0_0.png"],
    ["Что, правда! С-спасибо.", "Кира", "khaki", "Sprites/Characters/Girl_0_3.png"],
    ["Ну правильно, я же девушка. Это только у вас - парней в комнате не пойми что. А я убираюсь часто и слежу за порядком.", "Кира", "khaki", "Sprites/Characters/Girl_0_1.png"],
    ],
    [
    ["Ты там это. Передай Мие привет. И скажи, что ее тетради мне очень помогли.", "Кира", "khaki", "Sprites/Characters/Girl_0_0.png"],
    ["Хорошо, передам.", "Игрок", "lightslategray", "Sprites/Characters/Girl_0_0.png"],
    ["...", "Игрок", "lightslategray", "Sprites/Characters/Girl_0_0.png"],      
    ["Хотел спросить, ты так со всем обращаешься? Или я какой-то особенный?", "Игрок", "lightslategray", "Sprites/Characters/Girl_0_0.png"],
    ["А что, я тебя как то задела?", "Кира", "khaki", "Sprites/Characters/Girl_0_4.png"],
    ["Да нет, просто, не представилась, чаю не предложила. Еще и с самого порога начала хамить.", "Игрок", "lightslategray", "Sprites/Characters/Girl_0_0.png"],
    ["Ах-хах.", "Кира", "khaki", "Sprites/Characters/Girl_0_4.png"], 
    ["Не бери близко к сердцу.", "Кира", "khaki", "Sprites/Characters/Girl_0_4.png"], 
    ["Я со всеми такая.", "Кира", "khaki", "Sprites/Characters/Girl_0_4.png"], 
    ["Тут ничего не поделаешь, какая есть.", "Кира", "khaki", "Sprites/Characters/Girl_0_0.png"],
    ["Понятно.", "Игрок", "lightslategray", "Sprites/Characters/Girl_0_0.png"],
    ["Мия там тебя не заждалась с тетрадями?", "Кира", "khaki", "Sprites/Characters/Girl_0_0.png"], 
    ["Да, мне нужно спешить.", "Игрок", "lightslategray", "Sprites/Characters/Girl_0_0.png"],    
    ]
];

var choice = [
    [
        ["► Ничего не обещаю", "/Scene_2.html"],
        ["► Хорошо", "/Scene_2.html"],
    ],
    [
        ["► Ну, мне уже пора", "/Scene_3.html"],
        ["► Тогда, я наверно пойду", "/Scene_3.html"],
    ],
    [
        ["► Пока", "/Scene_end.html"],
        ["► До встречи", "/Scene_end.html"],
    ]
];

var background = ["Sprites/Backgrounds/Living_Room.png", "Sprites/Backgrounds/Room.png", "Sprites/Backgrounds/Living_Room.png"];

var delay = 40; // Скорость печатания
var elem = document.getElementById("character_speech"); // id элемента для вывода результата

var isPrint = false, isQuestion = false;
var sentence = 0;
var level = sessionStorage.getItem('level');
var portretNumber = false;
var isAnimate = false;

print_text = function(text, elem, delay) {

    if(text.length > 0 && isPrint) {
    
        elem.innerHTML += text[0];
        
        setTimeout(
        
            function() {
            
                print_text(text.slice(1), elem, delay);  
                
            }, delay
            
        );
        
    }
    else {
        isPrint = false;
        sentence += 1;
        return console.log("end sentence");
    }
}

reset_sentence = function() {
    isPrint = true; 
    elem.innerHTML = '';
    var img = sentence;
    document.getElementById('block_name').style.color = text[level][sentence][2];
    if (text[level][sentence][1] == "") {
        document.getElementById("block_name").style.display='none';
    }
    else {
        document.getElementById("block_name").style.display='';
        document.getElementById('character_name').innerHTML = text[level][sentence][1];
    }
    print_text(text[level][sentence][0], elem, delay);
    if(img != 0)
    {
        if (text[level][img][3] != text[level][img-1][3])
        {
            portretNumber = !portretNumber;

            document.getElementById('character_portret_' + portretNumber).style.zIndex= '-1';
            document.getElementById('character_portret_' + !portretNumber).style.zIndex= '1';


            var animation = document.getElementById('character_portret_' + !portretNumber).animate([
                {opacity: '1'},
                {opacity: '0'}
              ], 300);

              animation.addEventListener('finish', function() {
                document.getElementById('character_portret_' + !portretNumber).style.opacity = 0;
                if (img < text[level].length)
                {
                    if (text[level][img+1][3] != "")
                    {
                        document.getElementById('character_portret_' + !portretNumber).style.background ='url(' + text[level][img+1][3] +')';
                        document.getElementById('character_portret_' + !portretNumber).style.backgroundSize = 'auto 100vh';
                        document.getElementById('character_portret_' + !portretNumber).style.backgroundPosition= 'center';
                        document.getElementById('character_portret_' + !portretNumber).style.backgroundRepeat= 'no-repeat';
                    }
                    else
                    {
                        document.getElementById('character_portret_' + !portretNumber).style.background ='url(' + "" +')';
                    }
                }     
              });

              if (text[level][img-1][3] == '')
              {
              var animation_two = document.getElementById('character_portret_' + portretNumber).animate([
                {opacity: '0'},
                {opacity: '1'}
              ], 300);
            }
            else
            {
                document.getElementById('character_portret_' + portretNumber).style.opacity = 1;
            }

              animation_two.addEventListener('finish', function() {
                document.getElementById('character_portret_' + portretNumber).style.opacity = 1;
            }); 
        }
        else
        {
            if (text[level][img][3] != text[level][img+1][3] && text[level][img+1][3] != "")
            {
                document.getElementById('character_portret_' + !portretNumber).style.background ='url(' + text[level][img+1][3] +')';
                document.getElementById('character_portret_' + !portretNumber).style.backgroundSize = 'auto 100vh';
                document.getElementById('character_portret_' + !portretNumber).style.backgroundPosition= 'center';
                document.getElementById('character_portret_' + !portretNumber).style.backgroundRepeat= 'no-repeat';
            }
            else
            {
                document.getElementById('character_portret_' + !portretNumber).style.background ='url(' + "" +')';
            }
        }
    }
    else
    {
        document.getElementById('character_portret_' + portretNumber).style.background ='url(' + text[level][img][3] +')';
        document.getElementById('character_portret_' + portretNumber).style.backgroundSize = 'auto 100vh';
        document.getElementById('character_portret_' + portretNumber).style.backgroundPosition= 'center';
        document.getElementById('character_portret_' + portretNumber).style.backgroundRepeat= 'no-repeat';
        if (img < text[level].length && text[level][img][3] != text[level][img+1][3])
        {
        document.getElementById('character_portret_' + !portretNumber).style.background ='url(' + text[level][img+1][3] +')';
        document.getElementById('character_portret_' + !portretNumber).style.backgroundSize = 'auto 100vh';
        document.getElementById('character_portret_' + !portretNumber).style.backgroundPosition= 'center';
        document.getElementById('character_portret_' + !portretNumber).style.backgroundRepeat= 'no-repeat';
        }
        else
        {
            document.getElementById('character_portret_' + !portretNumber).style.background ='url(' + "" +')';
        }
    }
    
}

level_create = function() {
document.getElementById("html").style.background='url(' + background[level] + ') no-repeat center center fixed';
document.getElementById("html").style.backgroundSize= 'cover';
document.getElementById('form').action = choice[level][0][1];
document.getElementById('choice').childNodes[0].innerHTML = choice[level][0][0];
for (let i = 1; i < choice[level].length; i++) {
var _ch = document.getElementById('form').cloneNode(true);
document.getElementById('questions').append(_ch);
_ch.action = choice[level][i][1];
var _bt = _ch.childNodes[1];
_bt.childNodes[0].innerHTML = choice[level][i][0] + '  ';
}
document.getElementById('questions').style.marginTop=42-(4.5*(choice[level].length-1)) + 'vh';
}

level_create();
reset_sentence();

setInterval(
    document.body.onmousedown = function(e) {
        try {
            if (e.which == 1) {
                if (sentence >= text[level].length && !isQuestion)
                {
                  isQuestion = true;
                  document.getElementById("footer").style.display='none';
                  document.getElementById("questions").style.display='block';
                  return console.log("question");
                }
                else
                {
                if (isPrint)
                {
                    isPrint = false;
                    elem.innerHTML = text[level][sentence][0];
            }
            else
            {
                    reset_sentence();
          }
            }
        }
          } catch (e) {
            return 0;
          }
    
    },1000);