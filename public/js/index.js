'use strict';

SystemJS.import('../js/praise.js').then(function (m) {
    $.extend({
        thumb: m.default.Thumb
    });

    var btn = new $.thumb({
        limit: 300
    });
});
