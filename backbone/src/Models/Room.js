define(['backbone'], function(Backbone) {
    const Room = Backbone.Model.extend({
        defaults: {
            index: 0,
            title: 'Room'
        },
    })

    return Room
})
