/**
=========================================================
* Material Dashboard 2 React - v2.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// @mui material components
import Grid from "@mui/material/Grid";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";

// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";

//Data MapContainer
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
delete L.Icon.Default.prototype._getIconUrl;

let markers = [ // Just an example this should probably be in your state or props. 
  {
    name: "marker1",
    position: { lat: 49.17655, lng: 8.138564 }
  },
  {
    name: "marker2",
    position: { lat: 49.16659, lng: 3.113569 }
  },
  {
    name: "marker4",
    position: { lat: 49.15659, lng: 13.143569 }
  },
  {
    name: "marker5",
    position: { lat: 32.15659, lng: 21.143569 }
  },
  {
    name: "marker6",
    position: { lat: 43.15659, lng: 32.143569 }
  },
  {
    name: "marker7",
    position: { lat: 12.15659, lng: 13.143569 }
  },
  {
    name: "marker8",
    position: { lat: 23.15659, lng: 23.143569 }
  },
  {
    name: "marker9",
    position: { lat: 32.15659, lng: 73.143569 }
  },
  {
    name: "marker10",
    position: { lat: 50.15659, lng: 83.143569 }
  },
  {
    name: "marker11",
    position: { lat: 32.15659, lng: 23.143569 }
  },
];

L.Icon.Default.mergeOptions({
    iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png').default,
    iconUrl: require('leaflet/dist/images/marker-icon.png').default,
    shadowUrl: require('leaflet/dist/images/marker-shadow.png').default,
});

function DataMap() {
  const position = [21.28362, -157.7189]

  const position2 = [21.2840, -157.7189]
  const position3 = [21.2830, -157.7180]

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <p >Explore Databases</p>
      <MapContainer center={position} zoom={17} style={{ height: '80vh', width: '100wh' }} scrollWheelZoom={false}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

    <Marker position={position} >
    <Popup>
        Maunalua Bay Fish Database <br /> 200 Annotated Images  <br />
        <img src="https://www.mass.gov/files/styles/1670x/public/2020-05/smallmouth.jpg?itok=kNX7NTcE" height="150px" width="150px"/>
      </Popup>
      </Marker>
    <Marker position={position2} >
    <Popup>
    Maunalua Bay Fish Database <br /> 321 Annotated Images <br />
    <img src="http://www.hatchmag.com/sites/default/files/styles/extra-large/public/field/image/SmallieUW.jpg" height="150px" width="150px"/>
      </Popup>
      </Marker>
    <Marker position={position3} >
    <Popup>
    Maunalua Bay Fish Database <br /> 131 Annotated Images <br />
    <img src="https://images.squarespace-cdn.com/content/v1/53965e16e4b0c7f8f26369bb/1531717892264-HO7P8ZTKY8HOBLBLY7Z6/Underwater+Thumb.jpg?format=1000w" height="150px" width="150px"/>
      </Popup>
      </Marker>
      {markers.map((marker, index) => (
      <Marker
        key={index} // Need to be unique
        name={marker.name}
        position={marker.position}
      />
    ))}
  </MapContainer>
      <Footer />
    </DashboardLayout>
  );
}

export default DataMap;
