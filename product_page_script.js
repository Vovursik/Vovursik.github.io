import {OrbitControls} from "./OrbitControls.js"
import {GLTFLoader} from "./GLTFLoader.js"

var scene = new THREE.Scene;
var camera = new THREE.PerspectiveCamera(75, 1/1, 0.01, 1000);
var renderer = new THREE.WebGLRenderer({alpha: true, antialias: true});
var container = document.querySelector('.container')
var manager = new THREE.LoadingManager();

if (localStorage.getItem('theme') == 1) {
        document.getElementById("body").style.background='url(images/Background.png) no-repeat';
        document.getElementById("body").style.backgroundColor='black';
        document.getElementById("body").style.backgroundAttachment='fixed';
        document.getElementById("body").style.backgroundSize='cover';
        document.getElementById("color_button").style.background='url(images/outline_invert_black.png) no-repeat center';
        document.getElementById("color_button").style.backgroundSize='auto 80%';
        document.getElementById("helper").style.color='gray';
        document.getElementById("helper_click").src='images/helper_click.png';
        document.getElementById("helper_scroll").src='images/helper_scroll.png';
        document.getElementById("cart_button_dark").style.display='none';
        document.getElementById("cart_button_light").style.display='inline';
    } 
else
{
    localStorage.setItem('theme', 0);
}

if(localStorage.getItem('infShow') == null) {
    localStorage.setItem('infShow', 1);
    document.getElementById("information").style.visibility='visible';
}

manager.onLoad = function()
{
    renderer.render( scene, camera );
    console.log(renderer.domElement.toDataURL());
}

renderer.setClearColor(0x000000, 0)

if (window.outerWidth < window.outerHeight)
{
    document.getElementById("product").style.display='block';
    document.getElementById("model").style.width='100%';
    document.getElementById("sale").style.width='100%';
    renderer.setSize(window.innerWidth/1.1, window.innerWidth/1.1);
}
else
{
    document.getElementById("product").style.display='flex';
    document.getElementById("model").style.width='50%';
    document.getElementById("sale").style.width='50%';
    renderer.setSize(window.innerWidth/2.3, window.innerWidth/2.3);       
}  
container.appendChild(renderer.domElement);

var loader = new GLTFLoader(manager);

loader.load('/models/' + document.getElementById("product_id").textContent + '.gltf', function(gltf){
    scene.add(gltf.scene);
});

const controls = new OrbitControls(camera, renderer.domElement);
controls.update();
controls.enableDamping = true;
controls.enablePan = false;
controls.minDistance = 0.9;
controls.maxDistance = 3;

var aLight = new THREE.AmbientLight(0x404040, 1);
scene.add(aLight);

var light = new THREE.HemisphereLight(0xffffff, 0x000000, 1.5);
scene.add(light);

camera.position.set(0, 0, 0.9);

window.addEventListener('resize', function (){
    camera.aspect = 1/1;
    camera.updateProjectionMatrix();

    if (window.outerWidth < window.outerHeight)
    {
        document.getElementById("product").style.display='block';
        document.getElementById("model").style.width='100%';
        document.getElementById("sale").style.width='100%';
        renderer.setSize(window.innerWidth/1.1, window.innerWidth/1.1);
    }
    else if (window.outerWidth >= window.outerHeight)
    {
        document.getElementById("product").style.display='flex';
        document.getElementById("model").style.width='50%';
        document.getElementById("sale").style.width='50%';
        renderer.setSize(window.innerWidth/2.3, window.innerWidth/2.3);        
    }
});

function change_theme() {
    if (localStorage.getItem('theme') == 0) {
        localStorage.setItem('theme', 1);
        document.getElementById("body").style.background='url(images/Background.png) no-repeat';
        document.getElementById("body").style.backgroundColor='black';
        document.getElementById("body").style.backgroundAttachment='fixed';
        document.getElementById("body").style.backgroundSize='cover';
        document.getElementById("color_button").style.background='url(images/outline_invert_black.png) no-repeat center';
        document.getElementById("color_button").style.backgroundSize='auto 80%';
        document.getElementById("helper").style.color='gray';
        document.getElementById("helper_click").src='images/helper_click.png';
        document.getElementById("helper_scroll").src='images/helper_scroll.png';
        document.getElementById("cart_button_dark").style.display='none';
        document.getElementById("cart_button_light").style.display='inline';
    } 
    else {
        localStorage.setItem('theme', 0);
        document.getElementById("body").style.background='url(images/Background1.png) no-repeat';
        document.getElementById("body").style.backgroundColor='white';
        document.getElementById("body").style.backgroundAttachment='fixed';
        document.getElementById("body").style.backgroundSize='cover';
        document.getElementById("color_button").style.background='url(images/outline_invert_white.png) no-repeat center';
        document.getElementById("color_button").style.backgroundSize='auto 80%';
        document.getElementById("helper").style.color='black';
        document.getElementById("helper_click").src='images/helper_click1.png';
        document.getElementById("helper_scroll").src='images/helper_scroll1.png';
        document.getElementById("cart_button_dark").style.display='inline';
        document.getElementById("cart_button_light").style.display='none';
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

function animate(){
        requestAnimationFrame(animate);
        controls.update();
        renderer.render(scene, camera);
    }
    animate();