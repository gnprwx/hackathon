import * as THREE from "three";

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const colors = [
    "firebrick",
    "orangered",
    "lightcoral",
    "darkorange",
    "orange",
    "gold",
    "khaki",
    "papayawhip",
    "mediumseagreen",
    "lawngreen",
    "lightgreen",
    "dodgerblue",
    "skyblue",
    "lightblue",
    "mediumorchid",
    "plum",
    "lavender",
    "sienna",
    "tan",
    "slategray",
    "darkgray",
    "black",
    "whitesmoke",
];
const rColors = colors[Math.floor(Math.random() * colors.length)];

let width = Math.floor(Math.random() * 6 + 1);
let height = Math.floor(Math.random() * 6 + 1);
let depth = Math.floor(Math.random() * 6 + 1);

const color = 0xFFFFFF;
const intensity = 3;
const light = new THREE.DirectionalLight(color, intensity);
light.position.set(-1, 2, 4);
scene.add(light);

const geometry = new THREE.BoxGeometry(width, height, depth);
const geometry2 = new THREE.BoxGeometry(width, height, depth);
const material = new THREE.MeshPhongMaterial({ color: rColors });
const cube = new THREE.Mesh(geometry, material);
const cube2 = new THREE.Mesh(geometry2, material);
scene.add(cube);
scene.add(cube2);

camera.position.z = 10;

const speed = document.querySelector("#randomSpeed");

let rotateX = 0.01;
let rotateY = 0.01;

speed.addEventListener("click", () => {
    rotateX = Math.random() * 0.1;
    rotateY = Math.random() * 0.1;
});
  
function animate() {
    requestAnimationFrame(animate);
    cube.rotation.x += rotateX;
    cube.rotation.y += rotateY;
    cube.position.x = -3;
    cube2.rotation.x += rotateX;
    cube2.rotation.y += rotateY;
    cube2.position.x = 3;
    renderer.render(scene, camera);
}
animate();
