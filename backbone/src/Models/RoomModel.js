define(['backbone'], function(Backbone) {
    const RoomModel = Backbone.Model.extend({
        defaults: {
            index: 0,
            title: 'Room'
        },
    })

    return RoomModel
})
