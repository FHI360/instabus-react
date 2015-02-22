var React = require('React');

var AppViewActionCreators = require('../actions/AppViewActionCreators');
var RouteStore = require('../stores/RouteStore');
var RouteListItem = require('./RouteListItem.react');


var RouteSection = React.createClass({

    propTypes: {
        routes: React.PropTypes.objectOf(React.PropTypes.object).isRequired,
    },

    render() {
        var routeIds = Object.keys(this.props.routes).map(Number);

        var routeListItems = routeIds.map((routeId) => {
            var route = this.props.routes[routeId];
            var visible = RouteStore.isCurrent(routeId);

            return (
                <RouteListItem route={route} key={'routelistitem:' + routeId} visible={visible} />
            );
        }, this);

        return (
            <ul>{routeListItems}</ul>
        );
    }

});

module.exports = RouteSection;
