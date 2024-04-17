import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ItemComponent from "./ItemComponent";
import { Grid, Typography } from "@mui/material";
import { configurations } from "../../Configurations/enums";
import { Fragment } from "react";
const CarouselComponent = (props) => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 2,
      slidesToSlide: 1,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 2,
      slidesToSlide: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
      slidesToSlide: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1,
    },
  };

  return (
    <Fragment>
      <Grid container>
        <Grid item xs={12}>
          <Carousel
            centerMode={true}
            keyBoardControl={true}
            autoPlay={true}
            responsive={responsive}
            infinite={true}
          >
            {props.products.map((item) => (
              <ItemComponent key={item.id} item={item} />
            ))}
          </Carousel>
        </Grid>
      </Grid>
    </Fragment>
  );
};

export default CarouselComponent;
