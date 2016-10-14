(function($){

  $.fn.extend({

    addTemporaryClass: function(className, duration) {

      duration = (typeof duration !== "undefined") ? duration : 1;

      var elements = this;
      setTimeout(function() {
          elements.removeClass(className);
      }, duration*1000);

      return this.each(function() {
          $(this).addClass(className);
      });
    }

  });

})(jQuery);
