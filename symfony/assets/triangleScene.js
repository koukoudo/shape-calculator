import * as THREE from 'three';

var radius = 1;

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

const geometry = new THREE.TetrahedronGeometry(radius);
const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
const triangle = new THREE.Mesh( geometry, material );
scene.add( triangle );

camera.position.z = 5;

function animate() {
	requestAnimationFrame( animate );

    triangle.scale.set( radius, radius, radius);
    triangle.rotation.x += 0.01;
    triangle.rotation.y += 0.01;

	renderer.render( scene, camera );
}

animate();

function setTriangleRadius(rad) {
    radius = rad;
}