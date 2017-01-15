(function($){

  $.fn.extend({

    addTemporaryClass: function(className, duration, delay) {

      duration = (typeof duration !== "undefined") ? duration : 1;

      delay = (typeof delay !== "undefined") ? delay : null;

      var elements = this;

      if ( typeof delay == "number" ) {
        setTimeout(function() {

          $(elements).addClass(className);

          setTimeout(function() {
            elements.removeClass(className);
          }, duration*1000);

        }, delay*1000);
      } else {

        $(elements).addClass(className);

        setTimeout(function() {
          elements.removeClass(className);
        }, duration*1000);
      }
    }

  });

})(jQuery);
