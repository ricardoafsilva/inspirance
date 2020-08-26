define([
    "underscore",
    "jquery",
    "Views/Home",
], (_, $, HomeView) => {
    const homeView = new(HomeView())({
        el: $("#main")
    });

    return this;
});
