SystemJS.import('../js/praise.js').then((m) => {
    $.extend({
        thumb: m.default.Thumb
    });

    const btn = new $.thumb({
        limit: 300
    });
})