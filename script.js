$(function() {
  var $container = $('.container');
  var $leftSection = $('.one-half.left');
  var $rightSection = $('.one-half.right');
  var $h1l = $('.h1-l');
  var $h1r = $('.h1-r');
  var $bg = $('body');

  const checkbox = document.getElementById("checkbox");

  checkbox.addEventListener("change", () => {
    if (checkbox.checked) {
      $bg.css({ 'background': 'linear-gradient(90deg, rgba(104,88,63,1) 0%, rgba(76,98,83,1) 75%)' });
    } else {
      $bg.css({ 'background': 'linear-gradient(90deg, rgba(255,216,156,0.5) 0%, rgba(162,205,176,0.5) 75%)' });
    }
  });

  $leftSection.click(function() {
    $container.toggleClass('left-is-hovered', !$container.hasClass('left-is-hovered'));
    $container.removeClass('right-is-hovered');
  });

  $rightSection.click(function() {
    $container.toggleClass('right-is-hovered', !$container.hasClass('right-is-hovered'));
    $container.removeClass('left-is-hovered');
  });

  function adjustSectionSize() {
    var screenWidth = $(window).width();
    var isLargeScreen = screenWidth > 768;

    if (isLargeScreen) {
      $leftSection.off('mouseenter mouseleave').hover(function() {
        if (!$container.hasClass('left-is-hovered')) {
          $leftSection.css({ 'width': '70%', 'filter': 'brightness(100%)' });
          $rightSection.css({ 'width': '30%', 'filter': 'brightness(50%)' });
          $h1l.css('font-size', '3vw');
          $h1r.css('font-size', '2vw');
        }
      }, function() {
        if (!$container.hasClass('left-is-hovered')) {
          $leftSection.css({ 'width': '50%', 'filter': 'brightness(100%)' });
          $rightSection.css({ 'width': '50%', 'filter': 'brightness(100%)' });
          $h1l.css('font-size', '2vw');
          $h1r.css('font-size', '2vw');
        }
      });

      $rightSection.off('mouseenter mouseleave').hover(function() {
        if (!$container.hasClass('right-is-hovered')) {
          $rightSection.css({ 'width': '70%', 'filter': 'brightness(100%)' });
          $leftSection.css({ 'width': '30%', 'filter': 'brightness(50%)' });
          $h1r.css('font-size', '3vw');
          $h1l.css('font-size', '2vw');
        }
      }, function() {
        if (!$container.hasClass('right-is-hovered')) {
          $rightSection.css({ 'width': '50%', 'filter': 'brightness(100%)' });
          $leftSection.css({ 'width': '50%', 'filter': 'brightness(100%)' });
          $h1l.css('font-size', '2vw');
          $h1r.css('font-size', '2vw');
        }
      });
    } else {
      $leftSection.off('mouseenter mouseleave').hover(function() {
        if (!$container.hasClass('left-is-hovered')) {
          $leftSection.css({ 'height': '60%', 'filter': 'brightness(100%)' });
          $rightSection.css({ 'height': '40%', 'filter': 'brightness(50%)' });
        }
      }, function() {
        if (!$container.hasClass('left-is-hovered')) {
          $leftSection.css({ 'height': '50%' });
          $rightSection.css({ 'height': '50%' });
        }
      });

      $rightSection.off('mouseenter mouseleave').hover(function() {
        if (!$container.hasClass('right-is-hovered')) {
          $rightSection.css({ 'height': '60%', 'filter': 'brightness(100%)' });
          $leftSection.css({ 'height': '40%', 'filter': 'brightness(50%)' });
        }
      }, function() {
        if (!$container.hasClass('right-is-hovered')) {
          $rightSection.css({ 'height': '50%' });
          $leftSection.css({ 'height': '50%' });
        }
      });
    }
  }

  $(window).on('load resize', adjustSectionSize);
});







