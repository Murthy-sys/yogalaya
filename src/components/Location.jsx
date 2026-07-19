import { useEffect, useRef } from "react";
import { Arrow } from "./Arrow";
import { locationContent } from "../constants/locationConstants";

export function Location() {
  const sectionRef = useRef(null);
  const mapContainerRef = useRef(null);

  useEffect(() => {
    if (!sectionRef.current || !mapContainerRef.current) return undefined;

    let map;
    let disposed = false;
    let observer;

    async function initialiseMap() {
      const [{ default: maplibregl }] = await Promise.all([
        import("maplibre-gl"),
        import("maplibre-gl/dist/maplibre-gl.css"),
      ]);
      if (disposed || !mapContainerRef.current) return;

      const coordinates = locationContent.coordinates;
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

    if ("IntersectionObserver" in window) {
      observer = new IntersectionObserver(([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();
        initialiseMap();
      }, { rootMargin: "600px 0px" });
      observer.observe(sectionRef.current);
    } else {
      initialiseMap();
    }

    return () => {
      disposed = true;
      observer?.disconnect();
      map?.remove();
    };
  }, []);

  return <section ref={sectionRef} className="location" id="location">
    <div className="location-map" data-reveal>
      <div className="location-map-header"><span>{locationContent.region}</span><span>{locationContent.verification}</span></div>
      <div className="location-map-canvas">
        <div ref={mapContainerRef} className="location-vector-map" role="region" aria-label="Interactive map showing Suresh's Yogalaya in Ramnagar, Anantapur" />
        <div className="location-map-label"><strong>Suresh’s Yogalaya</strong><span>Opposite MeeSeva office</span></div>
      </div>
    </div>
    <div className="location-copy" data-reveal data-reveal-delay="1">
      <p className="eyebrow">{locationContent.eyebrow}</p>
      <h2>{locationContent.title}<br /><em>{locationContent.emphasizedTitle}</em></h2>
      <div className="location-address"><span>Studio address</span><p>{locationContent.address.map((line) => <span key={line}>{line}</span>)}</p></div>
      <a className="primary-button" href={locationContent.directionsUrl} target="_blank" rel="noreferrer">Open in Google Maps <Arrow /></a>
    </div>
  </section>;
}
