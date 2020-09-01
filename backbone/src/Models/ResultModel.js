define(['backbone'], function(Backbone) {
    const ResultModel = Backbone.Model.extend({
        defaults: {
            title: 'Inspiration result',
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

    return ResultModel
})
