define(['backbone'], function(Backbone) {
    const RoomModel = Backbone.Model.extend({
        defaults: {
            title: 'Default Room'
        },
    })

    return RoomModel
})
