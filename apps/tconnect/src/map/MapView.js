import React, { Component } from 'react';
import {
  StyleSheet,
  View
} from 'react-native';

import MapView from 'react-native-maps';
import PropTypes from 'prop-types';

class Map extends Component<{}> {

  render() {

    return (
      <View style={styles.map_container}>
        {
          this.props.region &&
          <MapView
            style={styles.map}
            region={this.props.region}
          >
            <MapView.Marker
              coordinate={{
                latitude: this.props.region.latitude,
                longitude: this.props.region.longitude
              }}
            />
          </MapView>
        }
      </View>
    );

  }

}

// add the styles
const styles = StyleSheet.create({
  map_container: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'flex-end'
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});

// specify the required props
Map.propTypes = {
  region: PropTypes.shape({
    latitude: PropTypes.number.isRequired,
    longitude: PropTypes.number.isRequired,
    latitudeDelta: PropTypes.number.isRequired,
    longitudeDelta: PropTypes.number.isRequired
  })
};

export default Map;
