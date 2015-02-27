var fs = require('fs');
var React = require('react');
var Leaflet = require('leaflet');
var ReactLeaflet = window.ReactLeaflet = require('react-leaflet');
var {Map, Marker, Popup, TileLayer, Polyline, CircleMarker} = ReactLeaflet;

var AppConstants = require('../constants/AppConstants');
var VehicleMarker = require('./VehicleMarker.react');
var StopMarker = require('./StopMarker.react');


function getStopMarker(stop) {
    return (
        <StopMarker
            center={{lat: stop.stop_lat, lng: stop.stop_lon}}
            key={'stop:' + stop.direction_id + ':' + stop.stop_id}
            label={stop.stop_name}
            radius={12}
            opacity={1}
            weight={3}
            color='white'
            fillColor='rgb(199,16,22)'
            fill={true}
            fillOpacity={1} >
        </StopMarker>
    );
}

function getPolylineLayer(polyline) {
    return (
        <Polyline
            positions={polyline.positions}
            key={'polyline:' + polyline.shapeId}
            color='rgb(199,16,22)'
            stroke={true}
            weight={5}
            opacity={0.5}
            smoothFactor={1} />
    );
}

function getVehicleMarker(vehicle) {
    var icon = Leaflet.divIcon({
        className: 'vehicle-icon',
        html: AppConstants.Icons.VEHICLE_ICON.replace('{svg-transform}', 'rotate(' + vehicle.heading + ' 15 15)')
    });

    return (
        <VehicleMarker
            label={vehicle.updateTime}
            position={vehicle.position}
            key={'vehicle:' + vehicle.vehicleId}
            className='vehicle-marker'
            icon={icon}
            animateSteps={200} >
        </VehicleMarker>
    );
}


var MapSection = React.createClass({
    propTypes: {
        routes: React.PropTypes.arrayOf(React.PropTypes.object).isRequired,
        stops: React.PropTypes.arrayOf(React.PropTypes.object).isRequired,
        poylines: React.PropTypes.arrayOf(React.PropTypes.object).isRequired,
        vehicles: React.PropTypes.arrayOf(React.PropTypes.object).isRequired,
    },

    render() {
        var stopLayers = this.props.stops.map(getStopMarker);
        var polylineLayers = this.props.poylines.map(getPolylineLayer);
        var vehicleLayers = this.props.vehicles.map(getVehicleMarker);

        return (
            <Map center={this.props.initialPosition} zoom={13} id='map'>
                <TileLayer
                    url='https://{s}.tiles.mapbox.com/v3/{id}/{z}/{x}/{y}.png'
                    attribution='<a href="http://openstreetmap.org">OpenStreetMap</a> | <a href="http://mapbox.com">Mapbox</a>'
                    id='drmaples.ipbindf8' />
                {polylineLayers}
                {stopLayers}
                {vehicleLayers}
            </Map>
        );
    },

});

module.exports = MapSection;
