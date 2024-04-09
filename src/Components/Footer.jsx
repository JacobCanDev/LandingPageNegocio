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
import LocationOnIcon from '@mui/icons-material/LocationOn';
import MarkunreadIcon from '@mui/icons-material/Markunread';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import {
  navbarSectionsNames,
  routes,
  companyData,configurations
} from "../Configurations/enums";
const Footer = (props) => {
  return (
    <Fragment>
      <Grid item xs={12} className="footer-wrapper">
        <Grid xs={4} className="footer-section-one" >
          <img src={Logo2} alt="" />
           <Grid className="footer-icons" >
              <BsTwitter />
              <SiLinkedin />
              <BsYoutube />
              <FaFacebookF />

           </Grid>
        </Grid>
      
        
          
            <Grid xs={4}>
              <Link
                to={routes.HomeRoute}
                component="button"
                variant="body2"
                onClick={() => {
                  console.info("I'm a button.");
                }}
                style={{ textDecoration: "none", color: "black" }}
              >
                <Typography>{navbarSectionsNames.HomeLabel}</Typography>
              </Link>
              <Link
                to={routes.AboutRoute}
                component="button"
                variant="body2"
                onClick={() => {
                  console.info("I'm a button.");
                }}
                style={{ textDecoration: "none", color: "black" }}
              >
                <Typography>{navbarSectionsNames.AboutLabel}</Typography>
              </Link>
              <Link
                to={routes.ProductsRoute}
                component="button"
                variant="body2"
                onClick={() => {
                  console.info("I'm a button.");
                }}
                style={{ textDecoration: "none", color: "black" }}
              >
                <Typography>{navbarSectionsNames.OursProductsLabel}</Typography>
              </Link>
              <Link
                to={routes.ClientsRoute}
                component="button"
                variant="body2"
                onClick={() => {
                  console.info("I'm a button.");
                }}
                style={{ textDecoration: "none", color: "black" }}
              >
                <Typography>{navbarSectionsNames.OursClients}</Typography>
              </Link>
              <Link
                to={routes.ContactRoute}
                component="button"
                variant="body2"
                onClick={() => {
                  console.info("I'm a button.");
                }}
                style={{ textDecoration: "none", color: "black" }}
              >
                <Typography>{navbarSectionsNames.ContactUsLabel}</Typography>
              </Link>
            </Grid>

            <Grid xs={4}>
                      <Grid>
                    <LocalPhoneIcon> </LocalPhoneIcon> <Typography variant="caption">{companyData.PhoneNumber}</Typography>
                    </Grid>
                    <Grid>
                      <MarkunreadIcon ></MarkunreadIcon>
                    <Typography variant="caption">{companyData.Email}</Typography>
                    </Grid>
                    <Grid>
                      <LocationOnIcon ></LocationOnIcon>
                      <Typography variant="caption">{companyData.Address}</Typography>
                    </Grid>
            </Grid>
            
      
      </Grid>
  <Grid item xs={12}   sx={{ alignContent: "center",textAlign:"center",backgroundColor:configurations.companyColor }} >
        <Typography  variant="caption" color="white" >
          &copy; {new Date().getFullYear()} {companyData.Name}
        </Typography>
      </Grid>
    
    </Fragment>
  );
};

export default Footer;
