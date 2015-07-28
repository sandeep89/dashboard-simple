/**
 * Created by sandepan on 7/28/2015.
 */
define(['ember'],
    function(Ember, jabberService, encryptionService, userDetails) {
        var app = Ember.Application.create({
            LOG_TRANSITIONS: true
        });

        app.Router.map(function() {
            this.route('dashboard', { path: '/' });
        });
        window.App = app;

        return app;
    }
);
