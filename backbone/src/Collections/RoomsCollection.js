define(['backbone', '../Models/RoomModel'], function(Backbone, Model) {
    const RoomsCollection = Backbone.Collection.extend({
        model: Model,
    })

    return RoomsCollection
})
