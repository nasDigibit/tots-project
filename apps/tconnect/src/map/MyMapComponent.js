import {
  compose,
  withProps
} from 'recompose';
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker
} from 'react-google-maps';

const MyMapComponent = compose(
  withProps({
    googleMapURL: 'https://maps.googleapis.com/maps/api/js?key=***',
    //'https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places',
    loadingElement: < div style={
      {
        height: `100%`
      }
    }
    />,
    containerElement: < div style={
      {
        height: `400px`
      }
    }
    />,
    mapElement: < div style={
      {
        height: `100%`
      }
    }
    />
  }),
  withScriptjs,
  withGoogleMap
)(props => (<
  GoogleMap defaultZoom={
    12
  }
  defaultCenter={
    {
      lat: '',
      lng: ''
    }
  } > {
    props.isMarkerShown && (<
      Marker position={
        {
          lat: '',
          lng: ''
        }
      }
      onClick={
        props.onMarkerClick
      }
    />
    )
  } <
  /GoogleMap>
));

class MyFancyComponent extends React.PureComponent {
    state = {
      isMarkerShown: false
    };

  componentDidMount() {
    this.delayedShowMarker();
  }

  delayedShowMarker = () => {
    setTimeout(() => {
      this.setState({
        isMarkerShown: true
      });
    }, 3000);
  };

  handleMarkerClick = () => {
    this.setState({
      isMarkerShown: false
    });
  this.delayedShowMarker();
  };

  render() {
    console.log(props.userCords[0]);
  return ( <
    MyMapComponent isMarkerShown={
      this.state.isMarkerShown
    }
    onMarkerClick={
      this.handleMarkerClick
    }
  />
  );
  }
}
export default MyMapComponent;