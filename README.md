# jQuery Glyph

## Description

This plugin inserts a magazine-like glyph to the last paragraph or list item of your article or blog post, just like printed publications such as magazines and newspapers do, giving the text a more professional feel.

A lot of CMSs are ill-equipped to handle this task, and rightfully so. The glyph is decorative and should not be inserted into the original text. This makes it a perfect case for a JavaScript DOM insertion.

## What it won't do

Glyphs are only appropriate at the end of text-based works, and thus this plugin will look for the last paragraph. If the work ends in an unordered list, ordered list or definition list, the plugin will look for the last element node in that list, which will either be a list item or definition description, and append the glyph to that item. If lists are nested, the plugin will still find the last list item or definition description in the nested lists.

A glyph appended to a table, image or non-text-based work doesn't make much sense, and so this plugin won't insert the glyph on elements that aren't paragraphs, list items or definition descriptions.

## How to use

1. Link to jQuery:

        <script type="text/javascript" src="/path/to/jquery.min.js"></script>

2. Link to the plugin:

        <script type="text/javascript" src="/path/to/jquery.glyph.min.js"></script>

3. Call the plugin in your jQuery code:

        $(document).ready(function(){
            $('.article').glyph();
        });

## Options

The plugin comes with reasonable default options: A black square of 100% size with a left positioning of five pixels is appended to the end. Feel free to customize it with these options:

- `entity`: Any [HTML entity](http://www.fileformat.info/info/unicode/char/a.htm) instead of the square
- `color`: Any CSS color instead of black
- `size`: Any CSS font size instead of 100%
- `position`: Any CSS positioning instead of relative
- `left`: Any CSS left positioning instead of five pixels
- `top`: Any CSS top positioning instead of zero pixels
- `lineheight`: Any CSS line height instead of zero, which neutralizes gaps in between lines of text
- `align`: Any CSS vertical alignment instead of top (only works if using images, i.e. `favicon` or `domain`)
- `favicon`: The URL of an image. Uses a simple `<img>` element. You can link to the favicon (`.ico`) of your site, but this approach isn't recommended because Internet Explorer doesn't display images whose source files are `.ico`; see `domain`
- `domain`: The URL of a website whose favicon you want to use. Hopefully this is your own website. :p I recommend using `domain` instead of `favicon` because `domain` takes advantage of [Google's undocumented favicon-to-PNG conversion](http://simonwillison.net/2008/Aug/30/favicons/), which means your glyph will appear in Internet Explorer browsers. However, this approach assumes `favicon.ico` is served at the root of the URL. Strictly speaking, the `domain` that Google takes should be in the form of `example.com` or `www.example.com`, but the plugin will strip "http://", "https://," and any other protocol and any trailing slash, so feel free to use whichever. How is that for convenience?

The glyph is wrapped in a `<span class="glyph"></span>`. The glyph class is for your custom CSS style if you need customization beyond the provided options. Note that previous versions of the plugin added the glyph class to the image without a `<span>`; now the glyph&#8212;regardless of being an entity, image, or favicon&#8212;is wrapped in the `<span>`

## Examples

Please see the demo to see these examples in action.

An example with no customization (a black square):

    $('.article').glyph();

An example with a red snowman:

    $('.article').glyph({ entity: '&#9731;', color: '#f00' });

An example with Apple's favicon:

    $('.article').glyph({ domain: 'apple.com' });

An example with the White House's favicon (the `favicon` method isn't recommended; see earlier notes):

    $('.article').glyph({ favicon: 'http://www.whitehouse.gov/sites/default/themes/whitehouse/favicon.ico' });

## Feature requests, bug reports, adoration, etc.

[File an issue](https://github.com/richardcornish/jQuery-Glyph/issues) or just e-mail me at [rich@richardcornish.com](mailto:rich@richardcornish.com).