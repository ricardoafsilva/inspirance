requirejs.config({
    baseUrl: '../lib',
    paths: {
        backbone: './backbone-min',
        jquery: './jquery-3.5.1.min',
        tpl: './tpl',
        underscore: './underscore-min',
    }
});

requirejs(['App'])
