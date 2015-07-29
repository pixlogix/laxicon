/*!
 * laxicon.js v1.2
 * Crazy simple parallaxing
 * Jeannie Stevenson
 * @JSDesign (github)
 * Licensed under the MIT license
 */

(function($) {

    "use strict";

    $.fn.laxicon = function(options) {

        // declare default options
        var settings = $.extend({
            speed: 0.15,
            bgImgPath: "",
            bgXPos: "center",
            bgSize: "cover",
            bgRepeat: "no-repeat"
        }, options);

        return this.each( function() {
            // set "this" to a variable
            var $element = $(this);
            // initialize some empty variables
            var xPos,
                windowHeight,
                scrollTop,
                elemOffsetTop,
                elemHeight;

            $(window).on("load resize scroll", function() {

                // set xPos variable to default background x position setting
                xPos = settings.bgXPos;

                // constantly set variables for math
                windowHeight = $(window).height();
                scrollTop = $(window).scrollTop();
                elemOffsetTop = $element.offset().top;
                elemHeight = $element.outerHeight();

                // if above or below viewport, stop
                if (elemOffsetTop + elemHeight <= scrollTop || elemOffsetTop >= scrollTop + windowHeight) {
                    return;
                }
                // constantly set css
                $element.css({
                    backgroundPosition: xPos + " " + (Math.round((elemOffsetTop - scrollTop) * settings.speed)) + "px",
                    backgroundSize: settings.bgSize,
                    backgroundRepeat: settings.bgRepeat,
                    backgroundImage: "url(" + settings.bgImgPath + ")",
                    backgroundAttachment: "fixed"
                });

            });

        }); // end plugin loop

    }; // end plugin function

}(jQuery));
