/**
 * Created by sandepan on 7/29/2015.
 */

define(['app', 'text!templates/drilled.hbs', 'd3', 'services/dashboardServices'], function(app, drilledTemplate, d3, dashboardServices){
    app.DrilledView = Ember.View.extend({
           template:Ember.Handlebars.compile(drilledTemplate),
           didInsertElement:function(){
               var self = this;
               dashboardServices.fetchDrilledReport(self.controller.get("label")).then(function(data){
                   var chart = d3.select("#graph")
                       .append("div")
                       .attr("class", "chart");

                   chart.selectAll("div")
                       .data(data)
                       .enter().append("div")
                       .style("width", function(d) { return d * 10 + "px"; })
                       .text(function(d) { return d; });
               })
           }
    })
})