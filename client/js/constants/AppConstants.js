
module.exports = {
    ActionTypes: {
        ROUTE_SHOW: 'ROUTE_SHOW',
        ROUTE_HIDE: 'ROUTE_HIDE',
        RECEIVE_RAW_ROUTES: 'RECEIVE_RAW_ROUTES',
        RECEIVE_RAW_STOPS: 'RECEIVE_RAW_STOPS',
        RECEIVE_RAW_POLYLINES: 'RECEIVE_RAW_POLYLINES',
        RECEIVE_RAW_VEHICLES: 'RECEIVE_RAW_VEHICLES',
    },
    PayloadSources: {
        SERVER_ACTION: 'SERVER_ACTION',
        VIEW_ACTION: 'VIEW_ACTION',
    },
    Icons: {
        VEHICLE_ICON: `
            <?xml version="1.0" encoding="UTF-8" standalone="no"?>
            <svg class="vehicle-icon-svg"  width="45px" height="45px" viewBox="0 0 45 45" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:sketch="http://www.bohemiancoding.com/sketch/ns">
                <defs></defs>
                <g transform="scale(1.5)" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" sketch:type="MSPage">
                   <circle id="Oval-1" stroke="#E1E1E1" opacity="0.95" fill="#FFFFFF" sketch:type="MSShapeGroup" cx="15" cy="15" r="15"></circle>
                    <path transform="{svg-transform}" d="M15,5 L22,23.6666667 L15,19 L15,5 L15,5 Z M15,5 L8,23.6666667 L15,19 L15,5 L15,5 Z" class="Arrow" fill="rgb(28,161,250)" sketch:type="MSShapeGroup"></path>
                    <mask id="mask-2" sketch:name="Path 2" fill="white">
                        <use xlink:href="#path-1"></use>
                    </mask>
                    <use id="Path-2" stroke="#979797" sketch:type="MSShapeGroup" xlink:href="#path-1"></use>
                </g>
            </svg>
        `
    }
};
