define(['backbone', '../Models/Room'], function(Backbone, Room) {
    const Rooms = Backbone.Collection.extend({
        model: Room,
    })

    return Rooms
})
