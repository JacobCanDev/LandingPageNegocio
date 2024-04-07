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
import {
  navbarSectionsNames,
  routes,
  companyData,
} from "../Configurations/enums";
const Footer = (props) => {
  return (
    <Fragment>
      <Grid item xs={12}>
        <div className="footer-wrapper">
          <div className="footer-section-one">
            <div className="footer-logo-container">
              <img src={Logo2} alt="" />
            </div>
            <div className="footer-icons">
              <BsTwitter />
              <SiLinkedin />
              <BsYoutube />
              <FaFacebookF />
            </div>
          </div>
          <div className="footer-section-two">
            <Grid xs={12}>
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

            <Grid xs={12}>
              <Typography>{companyData.PhoneNumber}</Typography>
              <Typography>{companyData.Email}</Typography>
              <Typography>{companyData.Address}</Typography>
            </Grid>
          </div>
        </div>
      </Grid>

      <Grid item xs={12}>
        <Typography variant="caption" color="black">
          &copy; {new Date().getFullYear()} {companyData.Name}
        </Typography>
      </Grid>
    </Fragment>
  );
};

export default Footer;
