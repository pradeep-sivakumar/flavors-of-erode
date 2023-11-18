import React, { useEffect, useState } from "react";
import { Paper, Typography } from "@mui/material";
import logo from "../../../assets/Logos/small-logo.jpg";
import star from "../../../assets/Logos/star-3.png";
import "./footer.css";
import Copyright from "./Copyright";
import axios from "axios";
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';



const Footer = () => {
  const [details, setDetails] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/more/details/64872bfb6cce3ce696738e2b")
      .then((res) => setDetails(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
    <Paper
      className="footer"
      sx={{
        borderRadius: "0",
        backgroundColor: "#121212",
        color: "#FFFFFF",
        padding: "1.5rem",
        textAlign: "center",
      }}
      elevation={0}
    >
      <img src={logo} alt="logo" className="footer-logo" /> <br />
      <img src={star} alt="star" className="star-logo" />
      <Typography variant="h5" gutterBottom>
        {details && details.landmark}
      </Typography>
      <Typography
        variant="subtitle1"
        sx={{
          width: "16rem",
          margin: "auto",
        }}
        gutterBottom
      >
        {details && details.address}
      </Typography>
      <Typography
        variant="h6"
        sx={{
          marginTop: "1.5rem",
          color: "#967B4E",
        }}
        gutterBottom
      >
        <a style={{color : '#967B4E',textDecoration: 'none'}} href = {`tel: ${details && details.phoneNumber}`}>+91 - {details && details.phoneNumber}</a>
      </Typography>
      <Typography
        variant="h6"
        sx={{
          color: "#967B4E",
          marginBottom : '1.5rem'
          
        }}
        gutterBottom
      >
        <a style={{color : '#967B4E',textDecoration: 'none'}} href = {`mailto: ${details && details.email}`}>{details && details.email}</a>
      </Typography>
      <Typography variant="body1" sx={{}} gutterBottom>
        <b>Monday - Thursday</b> : {details && details.weekDayStartTime} - {details && details.weekDayCloseTime}
      </Typography>
      <Typography variant="body1" sx={{}} gutterBottom>
        <b>Friday - Sunday</b> : {details && details.weekEndStartTime} - {details && details.weekEndCloseTime}
      </Typography>

      <Typography
        variant="h6"
        sx={{
          
          color: "#967B4E",
        }}
        gutterBottom
      >
      <b> <i>Reservations Available</i></b>
      </Typography>
      <div className="icons-flex">
        <a target="_blank" href={details&&details.whatsappURL}><WhatsAppIcon /></a>
        <a target="_blank" href={details&&details.instagramURL}><InstagramIcon /></a>
        <a target="_blank" href={details&&details.facebookURL}><FacebookIcon /></a>
      </div>
    </Paper>
    <Copyright />
    </>
  );
};

export default Footer;
