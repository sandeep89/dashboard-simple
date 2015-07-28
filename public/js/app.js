/**
 * Created by sandepan on 7/28/2015.
 */
define(['ember'],
    function(Ember) {
        var app = Ember.Application.create({
            LOG_TRANSITIONS: true
        });

        app.Router.map(function() {
            this.route('dashboard', { path: '/' });
            this.route('drilled', {path:'/drilled'})
        });
        window.App = app;

        return app;
    }
);
