
(function($) {
  $.fn.carousel = function(options){

    var leftUIEl = $('.left_arrow');
    var rightUIEl = $('.right_arrow');
    var elementsList = $('.carousel');

    var pixelsOffset = 26.6;
     var currentLeftValue = 0;
     var elementsCount = elementsList.find('li').length;
     var minimumOffset = - ((elementsCount - 3) * pixelsOffset);
     var maximumOffset = 0;

     leftUIEl.click(function() {
         if (currentLeftValue != maximumOffset) {
             currentLeftValue +=26.6
             elementsList.animate({ left : currentLeftValue + "vw"}, 200);
         }
     });

     rightUIEl.click(function() {
         if (currentLeftValue != minimumOffset) {
             currentLeftValue -= 26.6;
             elementsList.animate({ left : currentLeftValue + "vw"}, 200);
         }
     });

     return this;
  };
})(jQuery);
