/*!
 * laxicon.js v1.4
 * Crazy simple parallaxing
 * Jeannie Stevenson
 * @JSDesign (github)
 * Licensed under the MIT license
 */

(function($) {

    'use strict';

    $.fn.laxicon = function(options) {

        // declare default options
        var settings = $.extend({
            speed: 0.15,
            bgImgPath: 'https://download.unsplash.com/photo-1434145175661-472d90344c15',
            bgXPos: 'center',
            bgSize: 'cover',
            bgRepeat: 'no-repeat',
            overlay: false,
            overlayType: 'shade',
            overlayPatternPath: 'http://16secondstare.com/admin/wp-content/themes/rockit1/images/pattern/pattern5-bg.png',
            breakpoint: 769
        }, options);

        return this.each( function() {
            // set "this" to a variable
            var $element = $(this);
            // initialize some empty variables
            var xPos,
                windowHeight,
                winScrollTop,
                elemOffsetTop,
                elemHeight,
                bgImage;

            // set xPos variable to default background x position setting
            xPos = settings.bgXPos;

            if ($(window).width() >= settings.breakpoint) {

                $(window).on('load resize scroll', function() {

                    // constantly set variables for math
                    windowHeight = $(window).height();
                    winScrollTop = $(window).scrollTop();
                    elemOffsetTop = $element.offset().top;
                    elemHeight = $element.outerHeight();

                    // if above or below viewport, stop
                    if (elemOffsetTop + elemHeight <= winScrollTop || elemOffsetTop >= winScrollTop + windowHeight) {
                        return;
                    }

                    // css for tint, shad, or none
                    function setCssTSN() {
                        $element.css({
                            backgroundImage: bgImage,
                            backgroundPosition: xPos + ' ' + (Math.round((elemOffsetTop - winScrollTop) * settings.speed)) + 'px',
                            backgroundSize: settings.bgSize,
                            backgroundRepeat: settings.bgRepeat,
                            backgroundAttachment: 'fixed'
                        });
                    }

                    // css for pattern
                    function setCssP() {
                        $element.css({
                            backgroundImage: bgImage,
                            backgroundPosition: 'top left, ' + xPos + ' ' + (Math.round((elemOffsetTop - winScrollTop) * settings.speed)) + 'px',
                            backgroundSize: 'auto, ' + settings.bgSize,
                            backgroundRepeat: 'repeat, ' + settings.bgRepeat,
                            backgroundAttachment: 'fixed'
                        });
                    }

                    // if overlay
                    if (settings.overlay === true) {
                        if (settings.overlayType === 'shade') {
                            bgImage = 'linear-gradient(to bottom, rgba(0,0,0,0.6) 0%,rgba(0,0,0,0.6) 100%), url(' + settings.bgImgPath + ')';
                            setCssTSN();
                        } else if (settings.overlayType === 'tint') {
                            bgImage = 'linear-gradient(to bottom, rgba(255,255,255,0.6) 0%,rgba(255,255,255,0.6) 100%), url(' + settings.bgImgPath + ')';
                            setCssTSN();
                        } else if (settings.overlayType === 'pattern') {
                            bgImage = 'url(' + settings.overlayPatternPath + '), url(' + settings.bgImgPath + ')';
                            setCssP();
                        }
                    } else {
                        bgImage = 'url(' + settings.bgImgPath + ')';
                        setCssTSN();
                    }

                });

            } else {

                $(window).on('load resize scroll', function() {

                   // constantly set variables for math
                    windowHeight = $(window).height();
                    winScrollTop = $(window).scrollTop();
                    elemOffsetTop = $element.offset().top;
                    elemHeight = $element.outerHeight();

                    // if above or below viewport, stop
                    if (elemOffsetTop + elemHeight <= winScrollTop || elemOffsetTop >= winScrollTop + windowHeight) {
                        return;
                    }

                    // if overlay
                    if (settings.overlay === true) {
                        if (settings.overlayType === 'shade') {
                            bgImage = 'linear-gradient(to bottom, rgba(0,0,0,0.6) 0%,rgba(0,0,0,0.6) 100%), url(' + settings.bgImgPath + ')';
                        } else if (settings.overlayType === 'tint') {
                            bgImage = 'linear-gradient(to bottom, rgba(255,255,255,0.6) 0%,rgba(255,255,255,0.6) 100%), url(' + settings.bgImgPath + ')';
                        } else if (settings.overlayType === 'pattern') {
                            bgImage = 'url(' + settings.overlayPatternPath + '), url(' + settings.bgImgPath + ')';
                        }
                    } else {
                        bgImage = 'url(' + settings.bgImgPath + ')';
                    }

                    // constantly set css
                    $element.css({
                        backgroundPosition: xPos + ' top',
                        backgroundSize: 'auto 100%',
                        backgroundRepeat: settings.bgRepeat,
                        backgroundImage: bgImage,
                        // for now :(
                        backgroundAttachment: 'scroll'
                    });

                });

            }

        }); // end plugin loop

    }; // end plugin function

}(jQuery));
