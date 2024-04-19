import React from "react";
import BannerBackground from "../Assets/home-banner-background.png";
import BannerImage from "../Assets/home-banner-image.png";
import Navbar from "./Navbar";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import ItemComponent from "./Utils/ItemComponent";
import Footer from "./Footer";
import { Grid, Typography } from "@mui/material";
import products from "../Helpers/Products/products.json";
import { configurations } from "../Configurations/enums";
import { Fragment } from "react";
import CarouselComponent from "./Utils/CarouselComponent";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import BackGroundLandingPage from "../Assets/BackgroundLandingPage.png";
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const Home = () => {
  return (
    <Fragment>
      <Grid container>
        <Grid item xs={12}>
          <Navbar />
        </Grid>
        <Grid container alignItems="center" justifyContent="center">
          <Grid item xs={8}>
            {" "}
            <div className="home-text-section">
              <h1 className="primary-heading">¡Bienvenidos!</h1>
              <p className="primary-text">
                En comercializadora REEM, te damos la más cordial bienvenida a
                nuestro sitio web, en el cual podrás saber más acerca de
                nuestros servicios y productos que ofrecemos, estamos felices de
                tenerte aquí, para nosotros es muy importante tu opinión,
                contáctanos.
              </p>
            </div>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <CarouselComponent products={products} />
        </Grid>
        <Footer />
      </Grid>
    </Fragment>
  );
};

export default Home;
