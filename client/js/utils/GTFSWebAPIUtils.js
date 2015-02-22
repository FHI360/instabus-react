var AppServerActionCreators = require('../actions/AppServerActionCreators');


module.exports = {
    getAllRoutes: function() {
        var rawRoutes = require('../../data/routes.json');

        AppServerActionCreators.receiveRoutes(rawRoutes);
    },
    getStopsForRoute: function(routeId) {
        var staticStops = {
            801: require('../../data/stops_801_0.json').concat(require('../../data/stops_801_1.json')),
            550: require('../../data/stops_550_0.json').concat(require('../../data/stops_550_1.json')),
            803: require('../../data/stops_803_0.json').concat(require('../../data/stops_803_1.json')),
        };

        var rawStops = staticStops[routeId];

        AppServerActionCreators.receiveStops(routeId, rawStops);
    }
};
