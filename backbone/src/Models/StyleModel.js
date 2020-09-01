define(['backbone'], function(Backbone) {
    const StyleModel = Backbone.Model.extend({
        defaults: {
            index: 0,
            title: 'Style'
        },
    })

    return StyleModel
})
