define([
    'underscore',
    'backbone',
    'tpl!../Templates/Home.tpl',
    '../../../../react/dist/bundle'
], (_, Backbone, homeTpl) => {
    return () => {
        const HomeView = Backbone.View.extend({
            el: 'main',

            initialize: function() {
                this.render()
            },

            render: function() {
                this.$el.html(
                    homeTpl()
                )
            },
        })

        return HomeView
    }
})
