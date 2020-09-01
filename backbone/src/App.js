define([
    'underscore',
    'jquery',
    'Views/HomeView',
], (_, $, HomeView) => {
    const homeView = new(HomeView())({
        el: $('#main')
    })

    return this
})
