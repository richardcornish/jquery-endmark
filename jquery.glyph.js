/**
 * jQuery Glyph http://www.richardcornish.com/projects/glyph/
 *
 * @author              Richard Cornish <http://www.richardcornish.com/>
 * @version             2.0
 * @projectDescription  Adds a magazine-like glyph character to the last paragraph or list item child of any selector
 *
 * Built on the shoulders of giants:
 *   * John Resig      - http://jquery.com/
 *
 *
 * Copyright (c) 2010 Richard Cornish, licensed under the MIT License:
 *   * http://www.opensource.org/licenses/mit-license.php
 */
 
(function ($) {
    
    'use strict';
    
    $.fn.glyph = function (options) {

        var defaults = {
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
        }, options_extended = $.extend(defaults, options);
        
        return this.each(function () {

            var glyph, image = new Image(), url = 'http://www.google.com/s2/favicons?domain=', html;

            if (options_extended.favicon || options_extended.domain) {
                
                $(image).css({ verticalAlign: options_extended.align });

                if (options_extended.domain) {
                    url += options_extended.domain.replace(/((\w)*:\/\/)?/gi, '').replace(/\//gi, '');
                    $(image).attr('src', url);
                } else {
                    $(image).attr('src', options_extended.favicon);
                }
                
                glyph = $(image);
                
            } else {
                glyph = options_extended.entity;
            }

            html = $(window.document.createElement('span')).html(glyph);
            html.css({ color: options_extended.color, fontSize: options_extended.size, left: options_extended.left, top: options_extended.top, lineHeight: options_extended.lineheight, position: options_extended.position }).addClass('glyph');
            
            $($('*', this).get().reverse()).each(function () {
                if ($(this).is('p') || $(this).is('li') || $(this).is('dd')) {
                    $(this).append('&nbsp;' + html.html());
                    return false;
                }
            });

        });

    };
}(jQuery));