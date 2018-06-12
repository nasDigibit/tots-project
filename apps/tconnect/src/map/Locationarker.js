export default function LocationMarker({ position, className, noText }) {
  return (
    <IconMarker
      position={position}
      className={className}
      icon={{
        element: (
          <Icon
            img={noText ? 'icon-icon_place' : 'icon-icon_mapMarker-point'}
          />
        ),
        iconSize: [24, 24],
        iconAnchor: [12, 24],
        className,
      }}
    />
  );
}