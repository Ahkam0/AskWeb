jQuery(document).ready(function() {
  var $current = $('.visible'),
    animate = false;

  function nextSlide() {
    if (animate === false) {
      animate = true;

      if ($current.index() + 1 == $('article').length) {
        var $next = $('article:first-child');
      } else {
        $next = $current.next('article');
      }

      $current.removeClass('visible');
      $next.addClass('visible');
      $current = $next;

      window.location.hash = 'slide' + ($current.index() + 1);
    }
  }

  function prevSlide() {
    if (animate === false) {
      animate = true;

      if ($current.index() === 0) {
        var $prev = $('article:last-child');
      } else {
        var $prev = $current.prev('article');
      }

      $current.removeClass('visible');
      $prev.addClass('visible');
      $current = $prev;
      window.location.hash = 'slide' + ($current.index() + 1);
    }
  }

  $('#up').click(function() {
    prevSlide();

    setTimeout(function() {
      animate = false;
    }, 1000);
  });

  $('#down').click(function() {
    nextSlide();

    setTimeout(function() {
      animate = false;
    }, 1000);
  });

  $('body').bind('mousewheel DOMMouseScroll MozMousePixelScroll', function(event) {
    if (event.originalEvent.wheelDelta >= 0) {
      prevSlide();

      setTimeout(function() {
        animate = false;
      }, 1000);
    } else {
      if (animate == false) {
        nextSlide();

        setTimeout(function() {
          animate = false;
        }, 1000);
      }
    }
  });
});