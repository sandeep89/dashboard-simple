/**
 * Created by sandepan on 7/28/2015.
 */

define(['../app', "text!templates/dashboard.hbs"], function(app, dashboardTemplate){
    app.DashboardView = Ember.View.extend({
        template: Ember.Handlebars.compile(dashboardTemplate)
    })
})