$(document).ready(function() {
  var $container = $('.container');
  var $leftSection = $('.one-half.left');
  var $rightSection = $('.one-half.right');
  var $h1l = $('.h1-l');
  var $h1r = $('.h1-r');

  $leftSection.click(function() {
    if ($container.hasClass('left-is-hovered')) {
      $container.removeClass('left-is-hovered');
    } else {
      $container.removeClass('right-is-hovered');
      $container.addClass('left-is-hovered');
    }
  });

  $rightSection.click(function() {
    if ($container.hasClass('right-is-hovered')) {
      $container.removeClass('right-is-hovered');
    } else {
      $container.removeClass('left-is-hovered');
      $container.addClass('right-is-hovered');
    }
  });

  function adjustSectionSize() {
    var screenWidth = $(window).width();
    if (screenWidth > 768) {
      $leftSection.off('mouseenter mouseleave').hover(
        function() {
          if (!$container.hasClass('left-is-hovered')) {
            $leftSection.css('width', '70%');
            $rightSection.css('width', '30%');
            $h1l.css('font-size', '3vw');
            $h1r.css('font-size', '2vw');
          }
        },
        function() {
          if (!$container.hasClass('left-is-hovered')) {
            $leftSection.css('width', '50%');
            $rightSection.css('width', '50%');
            $h1l.css('font-size', '2vw');
            $h1r.css('font-size', '2vw');
          }
        }
      );

      $rightSection.off('mouseenter mouseleave').hover(
        function() {
          if (!$container.hasClass('right-is-hovered')) {
            $rightSection.css('width', '70%');
            $leftSection.css('width', '30%');
            $h1r.css('font-size', '3vw');
            $h1l.css('font-size', '2vw');
          }
        },
        function() {
          if (!$container.hasClass('right-is-hovered')) {
            $rightSection.css('width', '50%');
            $leftSection.css('width', '50%');
            $h1l.css('font-size', '2vw');
            $h1r.css('font-size', '2vw');
          }
        }
      );


    } else {
      $leftSection.off('mouseenter mouseleave').hover(
        function() {
          if (!$container.hasClass('left-is-hovered')) {
            $leftSection.css('height', '60%');
            $rightSection.css('height', '40%');
            $h1l.css('font-size', '9vw');
          }
        },
        function() {
          if (!$container.hasClass('left-is-hovered')) {
            $leftSection.css('height', '50%');
            $rightSection.css('height', '50%');
            $h1l.css('font-size', '8vw');
          }
        }
      );

      $rightSection.off('mouseenter mouseleave').hover(
        function() {
          if (!$container.hasClass('right-is-hovered')) {
            $rightSection.css('height', '60%');
            $leftSection.css('height', '40%');
            $h1r.css('font-size', '9vw');
          }
        },
        function() {
          if (!$container.hasClass('right-is-hovered')) {
            $rightSection.css('height', '50%');
            $leftSection.css('height', '50%');
            $h1l.css('font-size', '8vw');
          }
        }
      );
    }
  }

  $(window).on('load resize', adjustSectionSize);
});
