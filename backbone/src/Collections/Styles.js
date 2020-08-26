define(['backbone', '../Models/Style'], function(Backbone, Style) {
    const Styles = Backbone.Collection.extend({
        model: Style,
    })

    return Styles
})
