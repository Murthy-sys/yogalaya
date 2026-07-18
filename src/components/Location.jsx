import { useEffect, useRef } from "react";
import { Arrow } from "./Arrow";

export function Location() {
  const mapContainerRef = useRef(null);

  useEffect(() => {
    if (!mapContainerRef.current) return undefined;

    let map;
    let disposed = false;

    async function initialiseMap() {
      const [{ default: maplibregl }] = await Promise.all([
        import("maplibre-gl"),
        import("maplibre-gl/dist/maplibre-gl.css"),
      ]);
      if (disposed || !mapContainerRef.current) return;

      const coordinates = [77.5895235, 14.6724758];
      map = new maplibregl.Map({
        container: mapContainerRef.current,
        style: "https://tiles.openfreemap.org/styles/liberty",
        center: coordinates,
        zoom: 16.4,
        bearing: -10,
        pitch: window.matchMedia("(max-width: 760px)").matches ? 24 : 36,
        cooperativeGestures: true,
        attributionControl: true,
      });

      map.addControl(new maplibregl.NavigationControl({ showCompass: false }), "top-right");
      new maplibregl.Marker({ color: "#d59a43", scale: 1.08 }).setLngLat(coordinates).addTo(map);
    }

    initialiseMap();
    return () => {
      disposed = true;
      map?.remove();
    };
  }, []);

  return <section className="location" id="location">
    <div className="location-map" data-reveal>
      <div className="location-map-header"><span>Ramnagar · Anantapur</span><span>Verified studio location</span></div>
      <div className="location-map-canvas">
        <div ref={mapContainerRef} className="location-vector-map" role="region" aria-label="Interactive map showing Suresh's Yogalaya in Ramnagar, Anantapur" />
        <div className="location-map-label"><strong>Suresh’s Yogalaya</strong><span>Opposite MeeSeva office</span></div>
      </div>
    </div>
    <div className="location-copy" data-reveal data-reveal-delay="1">
      <p className="eyebrow">Visit the Yogalaya</p>
      <h2>Find your way<br /><em>to practice.</em></h2>
      <div className="location-address"><span>Studio address</span><p>MeeSeva Road, Ramnagar<br />Opposite MeeSeva office<br />Anantapur, Andhra Pradesh 515004</p></div>
      <a className="primary-button" href="https://maps.app.goo.gl/3gdoCaoVG5oW6FWSA?g_st=awb" target="_blank" rel="noreferrer">Open in Google Maps <Arrow /></a>
    </div>
  </section>;
}
