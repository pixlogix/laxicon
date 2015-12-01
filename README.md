# laxicon

**A jQuery Plugin**

Crazy simple parallax plugin.

## Usage

**[Demo](http://jsdesign.me/projects/laxicon/)**

This will add very basic parallax function to background images. Set up the section with HTML/CSS (height, padding, whatever), this plugin won't do that for you. The image path goes inside the plugin options when you call it. Otherwise the plugin will load up this image from unsplash: https://download.unsplash.com/photo-1434145175661-472d90344c15

**HTML & CSS**

````html
<section class="parallax">
    <h1 class="awesome-title">Compelling</h1>
</section>
````
````css
.parallax {
    padding: 280px 0;
    text-align: center;
}
````

**Include Scripts**

````html
<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>
<script src="js/laxicon.js"></script>
````

**Call Function with Just Image Path**

````javascript
$('.parallax').laxicon({
    bgImgPath: 'images/stock-ferris-wheel.jpg'
});
````

**Call Function with Speed and Gradient Overlay With Alpha Percentage**

````javascript
$('.parallax').laxicon({
    speed: 0.40,
    bgImgPath: 'images/stock-bus.jpg',
    overlay: true,
    overlayType: 'shade',
    overlayPercent: 60
});
````


**Call Function with Speed and Pattern Overlay**

````javascript
$('.parallax').laxicon({
    speed: 0.15,
    bgImgPath: 'images/stock-lighthouse.jpg',
    overlay: true,
    overlayType: 'pattern',
    overlayPatternPath: 'images/screening.png'
});
````

Set `overlay` to true for a tint, shade, or pattern overlay. Option `overlayType` can have a value of `'tint'`,  `'shade'`, or `'pattern'` to add a white transparent, black transparent, or repeating pattern image overlay to the background image. Tints and shades use a CSS linear gradient with alpha set by the `overlayPercent` setting.

Other CSS options are `bgXPos` for placement of the background image on the x-axis (default is `'center'`), `bgSize` (default is `'cover'`), and `bgRepeat` (default is `'no-repeat'`). If using the pattern overlay option, there is no need to set it to repeat - it will repeat automatically.

### License
Licensed under the terms of the MIT license.

#### Notes

Built by Jeannie Stevenson using oxford commas, enthusiasm, and brains.


















