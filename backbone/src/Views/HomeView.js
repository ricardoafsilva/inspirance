define([
    'underscore',
    'backbone',
    'tpl!../Templates/HomeTemplate.tpl',
    'core_bundle',
    'react_bundle'
], (_, Backbone, HomeTemplate, Core) => {
    return () => {
        const HomeView = Backbone.View.extend({
            el: 'main',
            initialize: function() {
                this.render()
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
