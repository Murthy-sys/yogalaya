import { Arrow } from "./Arrow";

export function Location() {
  return <section className="location" id="location"><div className="location-map" data-reveal><iframe title="Suresh's Yogalaya location on Google Maps" src="https://maps.google.com/maps?q=14.6724758,77.5895235&z=18&output=embed" loading="lazy" referrerPolicy="no-referrer-when-downgrade" /></div><div className="location-copy" data-reveal data-reveal-delay="1"><p className="eyebrow">Visit the Yogalaya</p><h2>Find your way<br /><em>to practice.</em></h2><p>Suresh’s Yogalaya<br />MeeSeva Road, Ramnagar<br />Opposite MeeSeva office<br />Anantapur, Andhra Pradesh 515004</p><a className="primary-button" href="https://maps.app.goo.gl/3gdoCaoVG5oW6FWSA?g_st=awb" target="_blank" rel="noreferrer">Open in Google Maps <Arrow /></a></div></section>;
}
