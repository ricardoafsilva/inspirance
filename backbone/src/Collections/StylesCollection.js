define(['backbone', '../Models/StyleModel'], function(Backbone, Model) {
    const StylesCollection = Backbone.Collection.extend({
        model: Model,
    })

    return StylesCollection
})
