/**
 * Created by sandepan on 7/28/2015.
 */
require.config({
    baseUrl: 'js',
    waitSeconds: 0,
    paths: {
        jquery: 'libs/jquery.min',
        ember: 'libs/ember',
        handlebars: 'libs/handlebars',
        underscore: 'libs/underscore.min',
        text: 'libs/text-loader-plugin',
        ember_template: 'libs/ember-template-compiler'
    },

    shim: {
        ember: {
            deps: ['jquery','handlebars'],
            exports: 'Ember'
        },
        underscore: {
            exports: '_'
        },
        handlebars: {
            exports: 'handlebars'
        }
    }
});

require([
    'app',
    'controllers/dashboardController',
    'routes/dashboardRoute',
    'views/dashboardView'
]);