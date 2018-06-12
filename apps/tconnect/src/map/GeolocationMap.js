
class GeolocationMap extends React.Component {
constructor(props) {
  super(props);
  this.state = {
    position: getCurrentPosition,
  };
}

render() {
  return (
    <Geolocation
      lazy
      render={({ getCurrentPosition, fetchingPosition }) => (
        <div>
          <button onClick={getCurrentPosition}>Get Current Position</button>
          <div>Fetching Position: {fetchingPosition}</div>
        </div>
      )}
    /> 
  );
}
}