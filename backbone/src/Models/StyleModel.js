define(['backbone'], function(Backbone) {
    const StyleModel = Backbone.Model.extend({
        defaults: {
            title: 'Default Style'
        },
    })

    return StyleModel
})
