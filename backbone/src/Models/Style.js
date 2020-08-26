define(['backbone'], function(Backbone) {
    const Style = Backbone.Model.extend({
        defaults: {
            index: 0,
            title: 'Style'
        },
    })

    return Style
})
