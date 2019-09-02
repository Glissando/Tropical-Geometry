const scene = new  THREE.Scene();

const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
);

const renderer = new THREE.WebGLRenderer();

renderer.setSize(window.innerWidth, window.innerHeight);

document.body.appendChild(renderer.domElement);

const geometry = new THREE.BoxGeometry(2, 2, 2);
const material = new THREE.MeshBasicMaterial( {color: 0x0000ff} );
const cube = new THREE.Mesh( geometry, material );
//const texture = new THREE.TextureLoader().load('texture/crate.gif');
scene.add(cube);

camera.position.z = 5;

function update() {
    requestAnimationFrame(update);
    
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;

    renderer.render(scene, camera);
}

document.addEventListener("keydown", onDocumentKeyDown, false);
function onDocumentKeyDown(event) {
    var keyCode = event.which;
    if (keyCode == 87) {
        cube.position.y += 1;
    } else if (keyCode == 83) {
        cube.position.y -= 1;
    } else if (keyCode == 65) {
        cube.position.x -= 1;
    } else if (keyCode == 68) {
        cube.position.x += 1;
    } else if (keyCode == 32) {
        cube.position.set(0, 0, 0);
    }
};
// Changes to the vertices
//sphere.geometry.verticesNeedUpdate = true;

// Changes to the normals
//sphere.geometry.normalsNeedUpdate = true;
update();