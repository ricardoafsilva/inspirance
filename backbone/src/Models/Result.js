define(['backbone'], function(Backbone) {
    const Result = Backbone.Model.extend({
        defaults: {
            title: 'Room result',
            link: '/',
            image: {
                contextLink: '/',
                height: 0,
                width: 0,
                thumbnailLink: '/',
                thumbnailHeight: 0,
                thumbnailWidth: 0
            }
        },
    })

    return Result
})
