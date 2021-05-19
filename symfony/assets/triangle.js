import jquery from 'jquery';
import * as THREE from 'three';

var base = 5;
var height = 5;
var xVal, zVal, zValTop, points, input;

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
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

setPoints();
const geometry = new THREE.BufferGeometry();
const material = new THREE.MeshStandardMaterial( { color: 0x00ff00 } );
material.side = THREE.FrontSide;
geometry.setFromPoints(points)
geometry.computeVertexNormals()
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

    triangle.scale.set( base/4, height/4, base/4 );
    triangle.rotation.y += 0.01;

	renderer.render( scene, camera );
}

animate();

jQuery(function(){
    $('.triangle-slider-input').on('input', function() {
        input = $(this).val();
        $(this).siblings('.triangle-slider').val(input);
    });

    $('.triangle-slider').on('input', function() {
        input = $(this).val();
        $(this).siblings('.triangle-slider-input').val(input);
    });

    $('.slider-base').on('input', function() {
        base = $(this).val();
    });

    $('.slider-height').on('input', function() {
        height = $(this).val();
    });
});