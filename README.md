# laxicon

**A jQuery Plugin**

Crazy simple parallax plugin.

## Usage

**[Demo](http://jsdesign.me/projects/laxicon/)**

This will add very basic parallax function to background images. Set up the section with HTML/CSS (height, padding, whatever), this plugin won't do that for you. The image path goes inside the plugin options when you call it. Otherwise the plugin will load up this image from unsplash: https://download.unsplash.com/photo-1434145175661-472d90344c15

I like to use smoothscroll.js whenever I use parallax because of Chrome on Windows being anti-smooth scrolling. That's a lot of users. https://gist.github.com/galambalazs/6477177

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
<script defer src="js/laxicon.js"></script>
````

**Call Function With Just Image Path Option**

````javascript
$('.parallax').laxicon({
    bgImgPath: 'images/stock-ferris-wheel.jpg'
});
````

**Or Call Function With More Options**

````javascript
$('.parallax').laxicon({
    speed: 0.25,
    bgImgPath: 'images/stock-ferris-wheel.jpg',
    gradOverlay: 'tint'
});
````

Option `gradOverlay` can have a value of `'tint'` or `'shade'` to add a white-ish or black-ish transparent overlay to the image using a CSS linear gradient. It can be left out and will default to `'none'`.

Other CSS options are `bgXPos` for placement of the background image on the x-axis (default is `'center'`), `bgSize` (default is `'cover'`), and `bgRepeat` (default is `'no-repeat'`).

### License
Licensed under the terms of the MIT license.

#### Notes

Built by Jeannie Stevenson using oxford commas, enthusiasm, and brains.


















