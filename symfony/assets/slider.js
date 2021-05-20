jQuery(function () {
    $('.slider-input').on('input', function () {
      input = $(this).val();
      $(this).siblings('.slider').val(input);
    });
    $('.slider').on('input', function () {
      input = $(this).val();
      $(this).siblings('.slider-input').val(input);
    });
});