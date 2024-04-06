import React from "react";
import BannerBackground from "../Assets/home-banner-background.png";
import BannerImage from "../Assets/home-banner-image.png";
import Navbar from "./Navbar";
import { FiArrowRight } from "react-icons/fi";
import Carousel from "react-material-ui-carousel";
import Item from "./Item";
import Footer from "./Footer";
import { Grid, Typography } from "@mui/material";
import products from "../Helpers/Products/products.json";
import { configurations } from "../Configurations/enums";
import { Fragment } from "react";
const Home = () => {
  return (
    <Fragment>
      <Grid container>
        <Grid item xs={12}>
          <Navbar />
        </Grid>

        <Grid item xs={12}>
          <Carousel
            fullHeightHover={false}
            navButtonsProps={{
              style: {
                backgroundColor: configurations.companyColor,
                borderRadius: "50,50",
              },
            }}
          >
            {products.map((item) => (
              <Item key={item.id} item={item} />
            ))}
          </Carousel>
        </Grid>
      </Grid>
    </Fragment>
  );
};

export default Home;
