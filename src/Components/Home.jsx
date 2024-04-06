import React from "react";
import BannerBackground from "../Assets/home-banner-background.png";
import BannerImage from "../Assets/home-banner-image.png";
import Navbar from "./Navbar";
import Item from "./Item";
import Footer from "./Footer";
import { Grid, Typography } from "@mui/material";
import products from "../Helpers/Products/products.json";
import { configurations } from "../Configurations/enums";
import { Fragment } from "react";
import CarouselComponent from "./Utils/CarouselComponent";
const Home = () => {
  return (
    <Fragment>
      <Grid container>
        <Grid item xs={12}>
          <Navbar />
        </Grid>

        <Grid item xs={12}>
          <div className="home-container">
            <div className="home-banner-container">
              <div className="home-bannerImage-container">
                <img src={BannerBackground} alt="" />
              </div>
              <div className="home-text-section">
                <h1 className="primary-heading">Home page</h1>
                <p className="primary-text">
                  Healthy switcher chefs do all the prep work, like peeding,
                  chopping & marinating, so you can cook a fresh food.
                </p>
              </div>
              <div className="home-image-section">
                <img src={BannerImage} alt="" />
              </div>
            </div>
          </div>
        </Grid>

        <Grid item xs={12}>
          <CarouselComponent products={products} />
        </Grid>
      </Grid>
    </Fragment>
  );
};

export default Home;
