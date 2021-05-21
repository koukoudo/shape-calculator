import jquery from 'jquery';
import * as THREE from 'three';
import whiteImagePath from './images/horus_white.jpg';
import blueImagePath from './images/horus_blue.jpg';
import logoPath from './images/horus_logo.jpg';

var base = 5;
var height = 5;
var xVal, zVal, points, input;

function setPoints() {
    xVal = base / 2;
    zVal = Math.sqrt(3/4) * base;
    points = [
        new THREE.Vector3(-xVal, 0, -zVal/3),//c
        new THREE.Vector3(xVal, 0, -zVal/3),//b
        new THREE.Vector3(0, height, 0),//a
    
        new THREE.Vector3(0, height, 0),//a
        new THREE.Vector3(0, 0, zVal/3*2),//d
        new THREE.Vector3(-xVal, 0, -zVal/3),//c
    
        new THREE.Vector3(xVal, 0, -zVal/3),//b
        new THREE.Vector3(0, 0, zVal/3*2),//d
        new THREE.Vector3(0, height, 0),//a
    
        new THREE.Vector3(-xVal, 0, -zVal/3),//c
        new THREE.Vector3(0, 0, zVal/3*2),//d
        new THREE.Vector3(xVal, 0, -zVal/3),//b
    ]
}

const scene = new THREE.Scene();
var texture = new THREE.TextureLoader().load(logoPath);
scene.background = texture;
const camera = new THREE.PerspectiveCamera( 75, window.innerHeight / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerHeight/2, window.innerHeight/2 );

setPoints();
const geometry = new THREE.BufferGeometry();
texture = new THREE.TextureLoader().load(whiteImagePath);
// texture.wrapS = THREE.RepeatWrapping;
// texture.wrapT = THREE.RepeatWrapping;
// texture.repeat.set( 4, 4 );
const material = new THREE.MeshPhongMaterial( { map: texture } );
geometry.setFromPoints(points);
geometry.computeVertexNormals();
const triangle = new THREE.Mesh( geometry, material );
scene.add(triangle);

const lightPoint = new THREE.PointLight( 0xffffff, 1, 100 );
lightPoint.position.set( 10, 10, 10 );
scene.add(lightPoint);

const lightAmbient = new THREE.AmbientLight( 0x404040 ); // soft white light
scene.add(lightAmbient);

camera.position.z = 15;
camera.position.y = -5;
camera.lookAt(0, height / 2, 0);

function animate() {
	requestAnimationFrame( animate );

    triangle.scale.set( base/3, height/3, base/3 );
    triangle.rotation.y += 0.01;

	renderer.render( scene, camera );
}

animate();

jQuery(function(){
    $('#scene').append(renderer.domElement);

    $('#triangle_size_base').on('input', function() {
        input = $(this).val();
        if (input <= 10 && input >= 1) {
            base = input;
        }
    });

    $('#triangle_size_height').on('input', function() {
        input = $(this).val();
        if (input <= 10 && input >= 1) {
            height = input;
        }
    });

    $(window).on('resize', function() {
        renderer.setSize( window.innerHeight/2, window.innerHeight/2 );
    })
});