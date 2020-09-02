define([
    'underscore',
    'backbone',
    'tpl!../Templates/HomeTemplate.tpl',
    '../../../../core/dist/bundle',
    '../../../../react/dist/bundle'
], (_, Backbone, HomeTemplate, Core) => {
    return () => {
        const HomeView = Backbone.View.extend({
            el: 'main',

            initialize: function() {
                Core.default.getData().then((response) => {
                    console.log(response)
                    this.render()
                })
            },

            render: function() {
                this.$el.html(
                    HomeTemplate()
                )
            },
        })

        return HomeView
    }
})
