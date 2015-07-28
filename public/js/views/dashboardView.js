/**
 * Created by sandepan on 7/28/2015.
 */

define(['../app', "text!templates/dashboard.hbs", 'd3', 'services/dashboardServices'], function (app, dashboardTemplate, d3, dashboardServices) {
    app.DashboardView = Ember.View.extend({
        template: Ember.Handlebars.compile(dashboardTemplate),
        drillReport: function (label) {
            // we can do it using query params as well
            var drilledController = this.controller.controllerFor("drilled");
            drilledController.set("label", label);
            drilledController.transitionToRoute('drilled');
        },
        didInsertElement: function () {
            var self = this;
            dashboardServices.fetchSummaryReport().then(function (dataset) {
                var width = 360;
                var height = 360;
                var radius = Math.min(width, height) / 2;
                var donutWidth = 75;
                var legendRectSize = 18;
                var legendSpacing = 4;
                var color = d3.scale.category20b();
                var svg = d3.select('#chart')
                    .append('svg')
                    .attr('width', width)
                    .attr('height', height)
                    .append('g')
                    .attr('transform', 'translate(' + (width / 2) +
                        ',' + (height / 2) + ')');
                var arc = d3.svg.arc()
                    .innerRadius(radius - donutWidth)
                    .outerRadius(radius);
                var pie = d3.layout.pie()
                    .value(function (d) {
                        return d.count;
                    })
                    .sort(null);
                var path = svg.selectAll('path')
                    .data(pie(dataset))
                    .enter()
                    .append('path')
                    .attr('d', arc)
                    .attr('fill', function (d, i) {
                        return color(d.data.label);
                    })
                    .on('click', function (d) {
                        self.drillReport(d.data.label);
                    });
                var legend = svg.selectAll('.legend')
                    .data(color.domain())
                    .enter()
                    .append('g')
                    .attr('class', 'legend')
                    .attr('transform', function (d, i) {
                        var height = legendRectSize + legendSpacing;
                        var offset = height * color.domain().length / 2;
                        var horz = -2 * legendRectSize;
                        var vert = i * height - offset;
                        return 'translate(' + horz + ',' + vert + ')';
                    });
                legend.append('rect')
                    .attr('width', legendRectSize)
                    .attr('height', legendRectSize)
                    .style('fill', color)
                    .style('stroke', color)
                    .on('click', function (label) {
                        self.drillReport(label);
                    });

                legend.append('text')
                    .attr('x', legendRectSize + legendSpacing)
                    .attr('y', legendRectSize - legendSpacing)
                    .text(function (d) {
                        return d;
                    })
                    .on('click', function (label) {
                        self.drillReport(label);
                    });
            })
        }
    })
})