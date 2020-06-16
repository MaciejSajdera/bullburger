import React, { Component } from 'react'
import { Map, TileLayer, Marker, Popup } from 'react-leaflet'
import PropTypes from 'prop-types';
import "../styles/leaflet-map.scss"

export default class MyMap extends Component {

  static propTypes = {
    /** Latitude and Longitude of the map centre in an array, eg [51, -1] **/
    position: PropTypes.array,


    /** Initial zoom level for the map (default 13) **/
    zoom: PropTypes.number,


    /** If set, will display a marker, which when clicked will display this text **/
    markerText: PropTypes.string
  }

  static defaultProps = {
    position: [50.0618307, 19.9406646],
    zoom: 30,
    markerText: "We are here! | BULL BURGER GRILL"
  }
  
  render() {

    if (typeof window !== 'undefined') {
      return (
          <Map center={this.props.position} zoom={this.props.zoom}>
          <TileLayer
            url="https://{s}.tile.osm.org/{z}/{x}/{y}.png"
            attribution="&copy; <a href=&quot;https://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
          />
          {this.props.markerText !== "" &&
          <Marker position={this.props.position}>
            <Popup>{this.props.markerText}</Popup>
          </Marker>
          }
        </Map>
      )
    }
    return null
  }
}
