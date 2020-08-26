define([
    "underscore",
    "backbone",
    "tpl!../Templates/Home.tpl"
], (_, Backbone, homeTpl) => {
    return (selectedRooms) => {
        const HomeView = Backbone.View.extend({
            tagName: "div",

            initialize: function() {
                _.bindAll(this, "render");
            },

            render: function() {
                this.$el.html(
                    homeTpl()
                );
            },
        });

        return HomeView;
    };
});
