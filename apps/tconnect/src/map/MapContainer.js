class MapContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      latCords: '',
      longCords: ''
    };
  }
  componentDidMount() {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(position => {
        this.setState({
          latCords: position.coords.latitude,
          longCords: position.coords.longitude
        });
        //return position.coords.latitude, position.coords.longitude;
      });
    } else {
      /* geolocation IS NOT available */
      alert(
        "We're sorry! Geolocation is not available for some reason..."
      );
    }
  }

  render() {
    const userCORDS = [this.state.latCords, this.state.longCords];
    return <MyMapComponent userCords={
      userCORDS
    }
    />;
  }
}
export default MapContainer;

<script src="https://cdnjs.cloudflare.com/ajax/libs/react/15.1.0/react.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/react/15.1.0/react-dom.min.js"></script>