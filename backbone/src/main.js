requirejs.config({
    paths: {
        backbone: '../lib/backbone-min',
        jquery: '../lib/jquery-3.5.1.min',
        tpl: '../lib/tpl',
        underscore: '../lib/underscore-min'
    },
    shim: {
        jquery: {
            exports: '$'
        },
        underscore: {
            exports: '_',
        },
        backbone: {
            exports: 'Backbone',
            deps: ['jquery', 'underscore']
        },
    }
});

requirejs(['App'])
