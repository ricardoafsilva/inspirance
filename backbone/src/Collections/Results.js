define(['backbone', '../Models/Result'], function(Backbone, Result) {
    const Results = Backbone.Collection.extend({
        model: Result,
    })

    return Results
})
