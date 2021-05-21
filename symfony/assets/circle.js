import jquery from 'jquery';
import * as THREE from 'three';
import whiteImagePath from './images/horus_white.jpg';
import blueImagePath from './images/horus_blue.jpg';
import logoPath from './images/horus_logo.jpg';

var radius = 5;

const scene = new THREE.Scene();
var texture = new THREE.TextureLoader().load(logoPath);
scene.background = texture;
const camera = new THREE.PerspectiveCamera( 75, window.innerHeight / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerHeight/2, window.innerHeight/2);

var geometry = new THREE.SphereGeometry(1, 50, 50);
texture = new THREE.TextureLoader().load(whiteImagePath);
var material = new THREE.MeshPhongMaterial( { map: texture } );
var sphere = new THREE.Mesh( geometry, material );
scene.add( sphere );

// geometry = new THREE.BoxGeometry(20, 20);
// var material = new THREE.MeshPhongMaterial( { color: 0xffffff } );
// var box = new THREE.Mesh( geometry, material );
// material.side = THREE.DoubleSide;
// scene.add(box);

const lightPoint = new THREE.PointLight( 0xffffff, 1, 100 );
lightPoint.position.set( 10, 10, 10 );
scene.add(lightPoint);

const lightAmbient = new THREE.AmbientLight( 0x404040 ); // soft white light
scene.add(lightAmbient);

camera.position.z = 15;
camera.lookAt(0, 0, 0);

function animate() {
	requestAnimationFrame( animate );

    sphere.scale.set( radius/1.5, radius/1.5, radius/1.5);
    sphere.rotation.y += 0.01;

	renderer.render( scene, camera );
}

animate();

jQuery(function(){
    var rad, circum, vol;

    $('#scene').append( renderer.domElement );

    $('#circle_size_radius').on('input', function() {
        rad = $(this).val();
        radiusUpdate();
    });

    $('#circle_size_circumference').on('input', function() {
        circum = $(this).val();
        circumferenceUpdate();
    });

    $('#circle_size_volume').on('input', function() {
        vol = $(this).val();
        volumeUpdate();
    });

    function radiusUpdate() {
        if (rad <= 10 && rad >= 1) {
            circum = Math.round(rad * 2 * Math.PI);
            vol =  Math.round(4/3 * Math.PI * rad ** 3);
            $('#circle_size_circumference').val(circum);
            $('#circle_size_volume').val(vol);
            radius = rad;
        }
    }

    function circumferenceUpdate() {
        rad = Math.round(circum / (2 * Math.PI));
        if (rad <= 10 && rad >= 1) {
            vol = Math.round(4/3 * Math.PI * (circum / (2 * Math.PI)) ** 3);
            $('#circle_size_radius').val(rad);
            $('#circle_size_volume').val(vol);
            radius = rad;
        }
    }

    function volumeUpdate() {
        rad = Math.round(Math.cbrt((3 * vol) / (4 * Math.PI)));
        if (rad <= 10 && rad >= 1) {
            circum = Math.round(2 * Math.PI * Math.cbrt((3 * vol) / (4 * Math.PI)));
            $('#circle_size_radius').val(rad);
            $('#circle_size_circumference').val(circum);
            radius = rad;
        }
    }

    $(window).on('resize', function() {
        renderer.setSize( window.innerHeight/2, window.innerHeight/2 );
    })
});