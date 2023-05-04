import {
  FormHelperText,
  Input,
  InputLabel,
  TextField,
} from "@material-ui/core";
import { FormControl } from "@mui/base";
import React, { Component } from "react";
import { useGeolocated } from "react-geolocated";
import './about.css'



const Demo = () => {
  const { coords, isGeolocationAvailable, isGeolocationEnabled } =
    useGeolocated({
      positionOptions: {
        enableHighAccuracy: false,
      },
      userDecisionTimeout: 5000,
    });

    const defaultPosition = {
        lat: 27.9878,
        lng: 86.925,
      };

  return !isGeolocationAvailable ? (
    <div>Your browser does not support Geolocation</div>
  ) : !isGeolocationEnabled ? (
    <div>Geolocation is not enabled</div>
  ) : coords ? (<div>




    <table style={{border:'1px solid black'}} >
      <tbody>
        <tr>
          <td>latitude</td>
          <td>{coords.latitude}</td>
        </tr>
        <tr>
          <td>longitude</td>
          <td>{coords.longitude}</td>
        </tr>
        <tr>
          <td>altitude</td>
          <td>{coords.altitude}</td>
        </tr>
        <tr>
          <td>heading</td>
          <td>{coords.heading}</td>
        </tr>
        <tr>
          <td>speed</td>
          <td>{coords.speed}</td>
        </tr>
      </tbody>
    </table>

    </div>
  ) : (
    <div>Getting the location data&hellip; </div>
  );
};

const About = () => {
  return (
    <div style={{ backgroundColor: "white", marginLeft:'auto', marginRight:'auto', width:'80%' }}>
      <h1> About Page </h1>

      
      <Demo />
      <div className="google-map-code" style={{marginLeft:'auto', marginRight:'auto'}} >
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15282225.79979123!2d73.7250245393691!3d20.750301298393563!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30635ff06b92b791%3A0xd78c4fa1854213a6!2sIndia!5e0!3m2!1sen!2sin!4v1587818542745!5m2!1sen!2sin" width="600" height="450" frameborder="0" style={{border:0}} allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
        </div>
    </div>
  );
};

export default About;
