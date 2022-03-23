import {OrbitControls} from "./OrbitControls.js"
import {GLTFLoader} from "./GLTFLoader.js"

var scene = new THREE.Scene;
var camera = new THREE.PerspectiveCamera(75, 1/1, 0.01, 1000);
var renderer = new THREE.WebGLRenderer({alpha: true, antialias: true});
var container = document.querySelector('.container')
var manager = new THREE.LoadingManager();

manager.onLoad = function()
{
    renderer.render( scene, camera );
    document.getElementById("loading").style.display='none';
    console.log(renderer.domElement.toDataURL());
}

renderer.setClearColor(0x000000, 0)

if (window.innerWidth <= 768)
{
    document.getElementById("product").style.display='block';
    document.getElementById("model").style.width='100%';
    document.getElementById("sale").style.width='100%';
    renderer.setSize(window.innerWidth/1.1, window.innerWidth/1.1);
}
else if (window.innerWidth > 768)
{
    document.getElementById("product").style.display='flex';
    document.getElementById("model").style.width='50%';
    document.getElementById("sale").style.width='50%';
    if (window.innerWidth/2.3 <= 834)
    renderer.setSize(window.innerWidth/2.3, window.innerWidth/2.3);        
    else
    renderer.setSize(834, 834);
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

    if (window.innerWidth <= 768)
    {
        document.getElementById("product").style.display='block';
        document.getElementById("model").style.width='100%';
        document.getElementById("sale").style.width='100%';
        renderer.setSize(window.innerWidth/1.1, window.innerWidth/1.1);
    }
    else if (window.innerWidth > 768)
    {
        document.getElementById("product").style.display='flex';
        document.getElementById("model").style.width='50%';
        document.getElementById("sale").style.width='50%';
        if (window.innerWidth/2.3 <= 834)
        renderer.setSize(window.innerWidth/2.3, window.innerWidth/2.3);        
        else
        renderer.setSize(834, 834);
    }
});

function animate(){
        requestAnimationFrame(animate);
        controls.update();
        renderer.render(scene, camera);
    }
    animate();