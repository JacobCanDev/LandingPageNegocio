import React from "react";
import Logo2 from "../Assets/logo2.svg";
import { BsTwitter } from "react-icons/bs";
import { SiLinkedin } from "react-icons/si";
import { BsYoutube } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import { Copyright } from "@mui/icons-material";
import { Typography, Grid } from "@mui/material";
import { Fragment } from "react";
import { Link } from "react-router-dom";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import MarkunreadIcon from "@mui/icons-material/Markunread";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import {
  navbarSectionsNames,
  routes,
  companyData,
  configurations,
} from "../Configurations/enums";
const Footer = (props) => {
  return (
    <Fragment>
      <Grid container xs={12} alignItems="center" justifyContent="center">
        <Grid md={2}>
          <img src={Logo2} alt="" />
          <Grid>
            <BsTwitter />
            <SiLinkedin />
            <BsYoutube />
            <FaFacebookF />
          </Grid>
        </Grid>

        <Grid md={3}>
          <Grid>
            <Typography variant="h4" align="center">
              Visítanos
            </Typography>
          </Grid>
          <Grid>
            {/* <LocationOnIcon></LocationOnIcon> */}
            <Typography variant="h7" align="center">
              {companyData.Address}
            </Typography>
          </Grid>
        </Grid>
        <Grid md={3}>
          <Grid>
            {/* <LocalPhoneIcon> </LocalPhoneIcon> */}
            <Typography variant="h7" align="center">
              {companyData.PhoneNumber}
            </Typography>
          </Grid>
          <Grid>
            <Typography variant="h7" align="center">
              {companyData.Email}
            </Typography>
          </Grid>
        </Grid>
      </Grid>
      <Grid
        item
        xs={12}
        sx={{
          alignContent: "center",
          textAlign: "center",
          backgroundColor: configurations.companyColor,
        }}
      >
        <Typography variant="caption" color="white">
          &copy; {new Date().getFullYear()} {companyData.Name}
        </Typography>
      </Grid>
    </Fragment>
  );
};

export default Footer;
