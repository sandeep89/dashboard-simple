/**
 * Created by sandepan on 7/28/2015.
 */

define(['../app', "text!templates/dashboard.hbs", 'd3', 'services/dashboardServices'], function(app, dashboardTemplate, d3, dashboardServices){
    app.DashboardView = Ember.View.extend({
        template: Ember.Handlebars.compile(dashboardTemplate),
        didInsertElement:function(){
            dashboardServices.fetchSummaryReport().then(function(dataset){
                var width = 360;
                var height = 360;
                var radius = Math.min(width, height) / 2;
                var color = d3.scale.category20b();
                var svg = d3.select('#chart')
                    .append('svg')
                    .attr('width', width)
                    .attr('height', height)
                    .append('g')
                    .attr('transform', 'translate(' + (width / 2) +
                        ',' + (height / 2) + ')');
                var arc = d3.svg.arc()
                    .outerRadius(radius);
                var pie = d3.layout.pie()
                    .value(function(d) { return d.count; })
                    .sort(null);
                var path = svg.selectAll('path')
                    .data(pie(dataset))
                    .enter()
                    .append('path')
                    .attr('d', arc)
                    .attr('fill', function(d, i) {
                        return color(d.data.label);
                    });
            })
        }
    })
})