# Glyph

**Glyph** is a jQuery plugin that appends a decorative symbol to the last paragraph or list item of a block of text, creating a professional appearance like those in newspapers and magazines.

A lot of CMSs are ill equipped to handle the task, and rightfully so. The glyph is decorative and should not be inserted into the original text. This makes it a perfect case for a [JavaScript DOM insertion](http://api.jquery.com/append/).

## Demo

[Please see the demo](http://richardcornish.github.io/jquery-glyph/) to see these examples in action.

    // Demo 1: Default entity (a black square)
    $('.article-1').glyph();

    // Demo 2: A red snowman
    $('.article-2').glyph({ entity: '&#9731;', color: '#f00' });

    // Demo 3: Apple favicon
    $('.article-3').glyph({ domain: 'apple.com' });

    // Demo 4: White House favicon
    $('.article-4').glyph({ favicon: 'http://www.whitehouse.gov/sites/default/themes/whitehouse/favicon.ico' });

## Installation

Download and unzip the [ZIP archive file](https://github.com/richardcornish/jquery-glyph/archive/master.zip). Alternatively, if you're using the [Bower](http://bower.io/) package manager, you can install via the command line:

```
bower install git@github.com:richardcornish/jquery-glyph.git
```

Then in your HTML:

1. Link to jQuery:

        <script src="/path/to/jquery.min.js"></script>

2. Link to the plugin:

        <script src="/path/to/jquery.glyph.min.js"></script>

3. Call the plugin in your jQuery code:

        $(document).ready(function(){
            $('article').glyph();
        });

## Options

The plugin comes with reasonable default options: A black square of 100% size with a left positioning of five pixels is appended to the end. Feel free to customize it with these options:

- `entity`

    Any [HTML entity](http://www.fileformat.info/info/unicode/char/a.htm), default of `'&#9632;'`, a [square](http://www.fileformat.info/info/unicode/char/25a0/index.htm).

- `color`

    Any CSS color, default of `'#000'`, black

- `size`

    Any CSS font size, default of `'100%'`

- `position`

    Any CSS positioning, default of `'relative'`

- `left`

    Any CSS left positioning, default of `'5px'`

- `top`

    Any CSS top positioning, default of `'0'`

- `lineheight`

    Any CSS line height, default of `'0'`, which neutralizes gaps in between lines of text

- `align`

    Any CSS vertical alignment, default of `'top'`; only works if using images, i.e. `favicon` or `domain`

- `favicon`

    The URL of an image, default of `false`. Uses a simple `<img>` element. You can link to the favicon (`.ico`) of your site, but this approach isn't recommended because Internet Explorer doesn't display images whose source files are `.ico`; see `domain`

- `domain`

    The URL of a website whose favicon you want to use, default of `false`. Hopefully this is your own website. :p I recommend using `domain` instead of `favicon` because `domain` takes advantage of [Google's undocumented favicon-to-PNG conversion](https://web.archive.org/web/20080831193809/http://simonwillison.net/2008/Aug/30/favicons/), which means your glyph will appear in Internet Explorer browsers. However, this approach assumes `favicon.ico` is served at the root of the URL. Strictly speaking, the `domain` that Google takes should be in the form of `example.com` or `www.example.com`, but the plugin will strip "http://", "https://," and any other protocol and any trailing slash, so feel free to use whichever. How is that for convenience?

The glyph is wrapped in a `<span class="glyph"></span>`. The glyph class is for your custom CSS style if you need customization beyond the provided options.

## What it won't do

Glyphs are only appropriate at the end of text-based works, and thus this plugin will look for the last paragraph. If the work ends in an unordered list, ordered list or definition list, the plugin will look for the last element node in that list, which will either be a list item or definition description, and append the glyph to that item. If lists are nested, the plugin will still find the last list item or definition description in the nested lists.

A glyph appended to a table, image or non-text-based work doesn't make much sense, and so this plugin won't insert the glyph on elements that aren't paragraphs, list items or definition descriptions.