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

            /*rooms,
            styles,
            results,*/

            initialize: function() {
                // this.setRoomsList()
                // this.setStylesList()
                this.render()
            },

            /*setRoomsList: function() {
                window.dispatchEvent(
                    new CustomEvent('setRoomsItems', {
                        detail: {
                            rooms: this.rooms
                        },
                    })
                );
            },

            setStylesList: function() {
                window.dispatchEvent(
                    new CustomEvent('setStylesItems', {
                        detail: {
                            styles: this.styles
                        },
                    })
                );
            },

            setResultsList: function() {
                window.dispatchEvent(
                    new CustomEvent('setResultsItems', {
                        detail: {
                            results: this.results
                        },
                    })
                );
            },*/

            render: function() {
                this.$el.html(
                    HomeTemplate()
                )
            },
        })

        return HomeView
    }
})
