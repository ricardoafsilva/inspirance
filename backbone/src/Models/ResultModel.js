define(['backbone'], function(Backbone) {
    const ResultModel = Backbone.Model.extend({
        defaults: {
            kind: 'customsearch#result',
            title: 'Inspiration result',
            htmlTitle: 'Inspiration result',
            link: '/',
            displayLink: '/',
            snippet: '',
            htmlSnippet: '',
            mime: 'image/jpeg',
            fileFormat: 'image/jpeg',
            image: {
                contextLink: '/',
                height: 0,
                width: 0,
                byteSize: 0,
                thumbnailLink: '/',
                thumbnailHeight: 0,
                thumbnailWidth: 0,
            }
        },
    })

    return ResultModel
})
