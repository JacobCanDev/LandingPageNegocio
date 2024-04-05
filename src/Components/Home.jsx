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
const Home = () => {
  return (
    <Grid container>
      <Grid item lg={12}>
        <Navbar />
      </Grid>

      <Grid item lg={12}>
        <Carousel>
          {products.map((item) => (
            <Item key={item.id} item={item} />
          ))}
        </Carousel>
      </Grid>
      <Grid item lg={12}>
        <Footer></Footer>
      </Grid>
    </Grid>
  );
};

export default Home;
