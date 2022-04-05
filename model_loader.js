import {OrbitControls} from "./OrbitControls.js"
import {GLTFLoader} from "./GLTFLoader.js"

var scene = new THREE.Scene;
var camera = new THREE.PerspectiveCamera(75, 1/1, 0.01, 1000);
var renderer = new THREE.WebGLRenderer({alpha: true, antialias: true});
var container = document.querySelector('.container')
var manager = new THREE.LoadingManager();

var _size = .0;

manager.onLoad = function()
{
    renderer.render( scene, camera );
    document.getElementById("loading").style.display='none';
}

renderer.setClearColor(0x000000, 0)

if (window.innerWidth <= 768)
    _size = 1.1;
else if (window.innerWidth > 768)
    _size = 2.3;

renderer.setSize(window.innerWidth/_size, window.innerWidth/_size);   

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

var aLight = new THREE.AmbientLight(0xffffff, .6);
scene.add(aLight);

var light = new THREE.PointLight(0xc4c4c4, 1);
light.position.set(-500, 300, -500);
scene.add(light);

var light2 = new THREE.PointLight(0xc4c4c4, 1);
light2.position.set(500, 300, 500);
scene.add(light2);

camera.position.set(0, 0, 0.9);

window.addEventListener('resize', function (){     
    camera.aspect = 1/1;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth/_size, window.innerWidth/_size); 
});

function animate(){
        requestAnimationFrame(animate);
        controls.update();
        renderer.render(scene, camera);

        if (window.innerWidth <= 768)
            _size = 1.1; 
        else if (window.innerWidth > 768)
            _size = 2.3;       
    }
    animate();