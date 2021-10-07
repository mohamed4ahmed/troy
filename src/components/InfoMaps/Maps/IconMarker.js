import L from "leaflet";
import iconUrl from "../../../assets/img/logo-circle.png";

const iconTroy = new L.Icon({
	iconUrl: iconUrl,
	iconSize: [32, 64],
	iconAnchor: [32, 64],
	shadowUrl: null,
	shadowSize: null,
	shadowAnchor: null,
});

export { iconTroy };