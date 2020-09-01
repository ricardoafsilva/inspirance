define(['backbone', '../Models/ResultModel'], function(Backbone, Model) {
    const ResultsCollection = Backbone.Collection.extend({
        model: Model,
    })

    return ResultsCollection
})
