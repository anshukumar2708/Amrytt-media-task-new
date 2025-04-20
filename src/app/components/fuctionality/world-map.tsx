"use client";

import React, { useCallback } from "react";
import GoogleMapReact from "google-map-react";

export default function WorldMap() {
  const defaultProps = {
    center: {
      lat: 37.0902,
      lng: -95.7129,
    },
    zoom: 4.2,
  };

  // Example of drawing a rectangle over the continental USA (simplified)
  const handleApiLoaded = useCallback(
    ({ map, maps }: { map: google.maps.Map; maps: typeof google.maps }) => {
      const usaBounds = {
        north: 49.38,
        south: 24.52,
        west: -124.77,
        east: -66.95,
      };

      const usaRect = new maps.Rectangle({
        strokeColor: "#0000FF",
        strokeOpacity: 0.8,
        strokeWeight: 2,
        fillColor: "#4285F4",
        fillOpacity: 0.35,
        map,
        bounds: usaBounds,
      });
    },
    []
  );

  return (
    <div style={{ height: "200px", width: "100%" }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "" }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
        yesIWantToUseGoogleMapApiInternals
        onGoogleApiLoaded={handleApiLoaded}
      />
    </div>
  );
}
