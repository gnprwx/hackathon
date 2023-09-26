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

let firstInput = Math.floor(Math.random() * 6 + 1);
let secondInput = Math.floor(Math.random() * 6 + 1);
let thirdInput = Math.floor(Math.random() * 6 + 1);

const geometry = new THREE.BoxGeometry(firstInput, secondInput, thirdInput);
const material = new THREE.MeshBasicMaterial({ color: rColors });
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

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
    renderer.render(scene, camera);
}
animate();
