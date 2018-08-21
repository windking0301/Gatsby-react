import React from "react"
import styled from 'styled-components'
import { below } from "../styles/functions";


import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react"

export class GoogleMap extends React.Component {
  constructor() {
    super()
  }
  fitBounds(mapProps, map) {
    const south = Math.max(
      ...this.props.markers.map(m => parseFloat(m.node.lat))
    )

    const east = Math.max(
      ...this.props.markers.map(m => parseFloat(m.node.lng))
    )

    const north = Math.min(
      ...this.props.markers.map(m => parseFloat(m.node.lat))
    )

    const west = Math.min(
      ...this.props.markers.map(m => parseFloat(m.node.lng))
    )
    var googleMap = window["google"]

    let googleBounds = new googleMap.maps.LatLngBounds(
      { lat: south, lng: west },
      { lat: north, lng: east }
    )

    map.fitBounds(googleBounds)

    let listener = googleMap.maps.event.addListener(map, "idle", function() { 
		  if (map.getZoom() > 14) map.setZoom(14); 
		  googleMap.maps.event.removeListener(listener); 
		});
  }

  render() {
    if (!this.props.loaded) {
      return <div>Loading</div>
    } else {
      return (
				<MapWrap>
					<Map
						google={this.props.google}
						zoom={8}
						style={{ width: "100%", height: "100%", position: "relative" }}
						scrollwheel= {false}
						onReady={this.fitBounds.bind(this)}
						styles={[
    {
        "featureType": "water",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#d3d3d3"
            }
        ]
    },
    {
        "featureType": "transit",
        "stylers": [
            {
                "color": "#808080"
            },
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "geometry.stroke",
        "stylers": [
            {
                "visibility": "on"
            },
            {
                "color": "#b3b3b3"
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#ffffff"
            }
        ]
    },
    {
        "featureType": "road.local",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "visibility": "on"
            },
            {
                "color": "#ffffff"
            },
            {
                "weight": 1.8
            }
        ]
    },
    {
        "featureType": "road.local",
        "elementType": "geometry.stroke",
        "stylers": [
            {
                "color": "#d7d7d7"
            }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "visibility": "on"
            },
            {
                "color": "#ebebeb"
            }
        ]
    },
    {
        "featureType": "administrative",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#a7a7a7"
            }
        ]
    },
    {
        "featureType": "road.arterial",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#ffffff"
            }
        ]
    },
    {
        "featureType": "road.arterial",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#ffffff"
            }
        ]
    },
    {
        "featureType": "landscape",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "visibility": "on"
            },
            {
                "color": "#efefef"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#696969"
            }
        ]
    },
    {
        "featureType": "administrative",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "visibility": "on"
            },
            {
                "color": "#737373"
            }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "labels.icon",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "labels",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "road.arterial",
        "elementType": "geometry.stroke",
        "stylers": [
            {
                "color": "#d6d6d6"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "labels.icon",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {},
    {
        "featureType": "poi",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#dadada"
            }
        ]
    }
]}
					>
						{this.props.markers.map((marker, index) => (
							<Marker
								key={index}
								position={{
									lat: parseFloat(marker.node.lat),
									lng: parseFloat(marker.node.lng)
								}}
								name={marker.node.name}
								icon={{
									url: "/images/marker-v2.png",
									size: new google.maps.Size(75, 34),
									anchor: new google.maps.Point(13, 36),
									scaledSize: new google.maps.Size(75, 34)
								}}
							/>
						))}
					</Map>
				</MapWrap>
      )
    }
  }
}

const MapWrap = styled.div`
	height:600px;
	position:relative;

	${below.tablet`
		height:400px;
	`};

`
let MapExport;
if (typeof window !== `undefined`) {	
	MapExport = GoogleApiWrapper({
		apiKey: "AIzaSyC9Dn49n6cgyTLPI0wZ5u0QanW3OLItgLs"
	})(GoogleMap)
} else {
	MapExport = ''
}

export default MapExport
