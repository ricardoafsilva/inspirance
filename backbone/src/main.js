requirejs.config({
    paths: {
        backbone: '../lib/backbone-min',
        jquery: '../lib/jquery-3.5.1.min',
        tpl: '../lib/tpl',
        underscore: '../lib/underscore-min',
        core_bundle: '../../core/dist/bundle',
        react_bundle: '../../react/dist/bundle'
    },
    shim: {
        jquery: {
            exports: '$'
        },
        underscore: {
            exports: '_',
        },
        backbone: {
            exports: 'backbone',
            deps: ['jquery', 'underscore']
        },
    }
});

requirejs(['App'])
