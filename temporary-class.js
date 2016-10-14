(function($){

    $.fn.extend({

        addTemporaryClass: function(className, duration) {
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
