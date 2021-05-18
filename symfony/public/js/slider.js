$(document).ready(function(){
    var rad, circum, vol;

    $(".slider-input").on("input", function() {
        $(this).siblings('.slider').val($(this).val());
     });

     $(".slider").on("input", function() {
        $(this).siblings('.slider-input').val($(this).val());
     });

     $("#slider-radius").on("input", function() {
        radiusUpdate($(this).val());
     });

     $("#slider-input-radius").on("input", function() {
        radiusUpdate($(this).val());
     });

     $("#slider-circumference").on("input", function() {
        circumferenceUpdate($(this).val());
     });

     $("#slider-input-circumference").on("input", function() {
        circumferenceUpdate($(this).val());
     });

     $("#slider-volume").on("input", function() {
        volumeUpdate($(this).val());
     });

     $("#slider-input-volume").on("input", function() {
        volumeUpdate($(this).val());
     });

     function radiusUpdate(radius) {
        circum = radius * 2 * Math.PI;
        vol =  4/3 * Math.PI * radius ** 3;
        $('#slider-circumference').val(circum);
        $('#slider-input-circumference').val(circum);
        $('#slider-volume').val(vol);
        $('#slider-input-volume').val(vol);
     }

     function circumferenceUpdate(circumference) {
        rad = circumference / (2 * Math.PI);
        vol = 4/3 * Math.PI * (circumference / (2 * Math.PI)) ** 3;
        $('#slider-radius').val(rad);
        $('#slider-input-radius').val(rad);
        $('#slider-volume').val(vol);
        $('#slider-input-volume').val(vol);
     }

     function volumeUpdate(volume) {
        rad = Math.cbrt((3 * volume) / (4 * Math.PI));
        circum = 2 * Math.PI * Math.cbrt((3 * volume) / (4 * Math.PI));
        $('#slider-radius').val(rad);
        $('#slider-input-radius').val(rad);
        $('#slider-circumference').val(circum);
        $('#slider-input-circumference').val(circum);
     }
  });