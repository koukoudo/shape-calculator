import jquery from 'jquery';
import * as THREE from 'three';

var radius = 5;

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

const geometry = new THREE.SphereGeometry(1, 50, 50);
const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
const sphere = new THREE.Mesh( geometry, material );
scene.add( sphere );

const lightPoint = new THREE.PointLight( 0xffffff, 1, 100 );
lightPoint.position.set( 10, 10, 10 );
scene.add(lightPoint);

const lightAmbient = new THREE.AmbientLight( 0x404040 ); // soft white light
scene.add(lightAmbient);

camera.position.z = 15;
camera.lookAt(0, 0, 0);

function animate() {
	requestAnimationFrame( animate );

    sphere.scale.set( radius/2, radius/2, radius/2);
    sphere.rotation.y += 0.01;

	renderer.render( scene, camera );
}

animate();

jQuery(function(){
    var rad, circum, vol;

    $('.circle-slider-input').on('input', function() {
        $(this).siblings('.circle-slider').val($(this).val());
    });

    $('.circle-slider').on('input', function() {
        $(this).siblings('.circle-slider-input').val($(this).val());
    });

    $('#slider-radius').on('input', function() {
        rad = $(this).val();
        radiusUpdate();
    });

    $('#slider-input-radius').on('input', function() {
        rad = $(this).val();
        radiusUpdate();
    });

    $('#slider-circumference').on('input', function() {
        circum = $(this).val();
        circumferenceUpdate();
    });

    $('#slider-input-circumference').on('input', function() {
        circum = $(this).val();
        circumferenceUpdate();
    });

    $('#slider-volume').on('input', function() {
        vol = $(this).val();
        volumeUpdate();
    });

    $('#slider-input-volume').on('input', function() {
        vol = $(this).val();
        volumeUpdate();
    });

    function radiusUpdate() {
        circum = Math.round(rad * 2 * Math.PI);
        vol =  Math.round(4/3 * Math.PI * rad ** 3);
        $('#slider-circumference').val(circum);
        $('#slider-input-circumference').val(circum);
        $('#slider-volume').val(vol);
        $('#slider-input-volume').val(vol);
        radius = rad;
    }

    function circumferenceUpdate() {
        rad = Math.round(circum / (2 * Math.PI));
        vol = Math.round(4/3 * Math.PI * (circum / (2 * Math.PI)) ** 3);
        $('#slider-radius').val(rad);
        $('#slider-input-radius').val(rad);
        $('#slider-volume').val(vol);
        $('#slider-input-volume').val(vol);
        radius = rad;
    }

    function volumeUpdate() {
        rad = Math.round(Math.cbrt((3 * vol) / (4 * Math.PI)));
        circum = Math.round(2 * Math.PI * Math.cbrt((3 * vol) / (4 * Math.PI)));
        $('#slider-radius').val(rad);
        $('#slider-input-radius').val(rad);
        $('#slider-circumference').val(circum);
        $('#slider-input-circumference').val(circum);
        radius = rad;
    }
});