/*!
 * laxicon.js v1.5.2
 * Very simple jQuery parallax plugin with background image overlay options.
 * Jeannie Stevenson
 * @JSDesign (github)
 * Licensed under the MIT license
 * https://github.com/JSDesign/laxicon
 */

(function($) {

    'use strict';

    $.fn.laxicon = function(options) {

        // declare default options
        var settings = $.extend({
            speed: 0.15,
            bgImgPath: 'http://jsdesign.me/projects/laxicon/images/sheep.jpg',
            bgXPos: 'center',
            bgSize: 'cover',
            bgRepeat: 'no-repeat',
            overlay: false,
            overlayType: 'shade',
            overlayPercent: 60,
            overlayPatternPath: 'http://jsdesign.me/projects/laxicon/images/screening3.png',
            breakpoint: 769,
            mobileBgImgPath: 'http://jsdesign.me/projects/laxicon/images/sheep-sm.jpg',
            mobileBgSize: '100%'
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
                bgImage,
                overlayFactor,
                viewportMin;

            // set viewport variable to breakpoitn option
            viewportMin = window.matchMedia('(min-width: ' + settings.breakpoint + 'px)');

            // set xPos variable to default background x position setting
            xPos = settings.bgXPos;

            // set overlayFactor to a decimal
            overlayFactor = parseFloat(settings.overlayPercent / 100);

            $(window).on('load resize scroll', function() {

                if (viewportMin.matches) {

                    // constantly set variables for math
                    windowHeight = $(window).height();
                    winScrollTop = $(window).scrollTop();
                    elemOffsetTop = $element.offset().top;
                    elemHeight = $element.outerHeight();

                    // if above or below viewport, stop
                    if (elemOffsetTop + elemHeight <= winScrollTop || elemOffsetTop >= winScrollTop + windowHeight) {
                        return;
                    }

                    // css for tint, shade, or none
                    var setCSS1 = function() {
                        $element.css({
                            backgroundImage: bgImage,
                            backgroundPosition: xPos + ' ' + (Math.round((elemOffsetTop - winScrollTop) * settings.speed)) + 'px',
                            backgroundSize: settings.bgSize,
                            backgroundRepeat: settings.bgRepeat,
                            backgroundAttachment: 'fixed'
                        });
                    }

                    // css for pattern
                    var setCSS2 = function() {
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
                            bgImage = 'linear-gradient(to bottom, rgba(0,0,0,' + overlayFactor.toFixed(1) + ') 0%,rgba(0,0,0,' + overlayFactor.toFixed(1) + ') 100%), url(' + settings.bgImgPath + ')';
                            setCSS1();
                        } else if (settings.overlayType === 'tint') {
                            bgImage = 'linear-gradient(to bottom, rgba(255,255,255,' + overlayFactor.toFixed(1) + ') 0%,rgba(255,255,255,' + overlayFactor.toFixed(1) + ') 100%), url(' + settings.bgImgPath + ')';
                            setCSS1();
                        } else if (settings.overlayType === 'pattern') {
                            bgImage = 'url(' + settings.overlayPatternPath + '), url(' + settings.bgImgPath + ')';
                            setCSS2();
                        }
                    } else {
                        bgImage = 'url(' + settings.bgImgPath + ')';
                        setCSS1();
                    }

                } else {

                   // constantly set variables for math
                    windowHeight = $(window).height();
                    winScrollTop = $(window).scrollTop();
                    elemOffsetTop = $element.offset().top;
                    elemHeight = $element.outerHeight();

                    // if above or below viewport, stop
                    if (elemOffsetTop + elemHeight <= winScrollTop || elemOffsetTop >= winScrollTop + windowHeight) {
                        return;
                    }

                    // css for tint, shade, or none
                    var setCSS3 = function() {
                        $element.css({
                            backgroundImage: bgImage,
                            backgroundPosition: xPos + ' top',
                            backgroundSize: settings.mobileBgSize,
                            backgroundRepeat: settings.bgRepeat,
                            // for now :(
                            backgroundAttachment: 'scroll'
                        });
                    }

                    // css for pattern
                    var setCSS4 = function() {
                        $element.css({
                            backgroundImage: bgImage,
                            backgroundPosition: 'top left, ' + xPos + ' top',
                            backgroundSize: 'auto, ' + settings.mobileBgSize,
                            backgroundRepeat: 'repeat, ' + settings.bgRepeat,
                            // for now :(
                            backgroundAttachment: 'scroll'
                        });
                    }

                    // if overlay
                    if (settings.overlay === true) {
                        if (settings.overlayType === 'shade') {
                            bgImage = 'linear-gradient(to bottom, rgba(0,0,0,' + overlayFactor.toFixed(1) + ') 0%,rgba(0,0,0,' + overlayFactor.toFixed(1) + ') 100%), url(' + settings.mobileBgImgPath + ')';
                            setCSS3();
                        } else if (settings.overlayType === 'tint') {
                            bgImage = 'linear-gradient(to bottom, rgba(255,255,255,' + overlayFactor.toFixed(1) + ') 0%,rgba(255,255,255,' + overlayFactor.toFixed(1) + ') 100%), url(' + settings.mobileBgImgPath + ')';
                            setCSS3();
                        } else if (settings.overlayType === 'pattern') {
                            bgImage = 'url(' + settings.overlayPatternPath + '), url(' + settings.mobileBgImgPath + ')';
                            setCSS4();
                        }
                    } else {
                        bgImage = 'url(' + settings.mobileBgImgPath + ')';
                        setCSS3();
                    }

                }

            });

        }); // end plugin loop

    }; // end plugin function

}(jQuery));
