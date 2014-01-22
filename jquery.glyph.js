/**
 * jQuery Glyph  https://github.com/richardcornish/jQuery-Glyph
 *
 * @author       Richard Cornish <http://richardcornish.com>
 * @version      2.0
 * @description  Appends a decorative symbol to a block of text
 *
 *  (c) Richard Cornish, licensed under the MIT License:
 *  http://www.opensource.org/licenses/mit-license.php
 */

(function ($) {

    'use strict';

    $.fn.glyph = function (user_options) {

        var defaults, options;

        defaults = {
            entity: '&#9632;',
            color: '#000',
            size: '100%',
            left: '5px',
            top: '0',
            align: 'top',
            lineheight: '0',
            position: 'relative',
            favicon: false,
            domain: false
        };

        options = $.extend(defaults, user_options);

        return this.each(function () {

            var glyph, image, url, html;

            image = new Image();
            url = 'http://www.google.com/s2/favicons?domain=';

            if (options.favicon || options.domain) {

                // If favicon or domain options are set, use an image
                $(image).css({ verticalAlign: options.align });

                if (options.domain) {
                    url += options.domain.replace(/((\w)*:\/\/)?/gi, '').replace(/\//gi, '');
                    $(image).attr('src', url);
                } else {
                    $(image).attr('src', options.favicon);
                }

                glyph = $(image)[0];

            } else {

                // Otherwise use the HTML entity
                glyph = options.entity;

            }

            // Assemble HTML of glyph
            html = $('<span />').addClass('glyph').css({ color: options.color, fontSize: options.size, left: options.left, top: options.top, lineHeight: options.lineheight, position: options.position, fontStyle: 'normal', fontWeight: 'normal' }).append(glyph);

            // Loop through the DOM and insert glyph at the end
            $($('*', this).get().reverse()).each(function () {
                if ($(this).is('p') || $(this).is('li') || $(this).is('dd')) {
                    $(this).append('&nbsp;').append(html[0]);
                    return false;
                }
            });

        });

    };
}(jQuery));