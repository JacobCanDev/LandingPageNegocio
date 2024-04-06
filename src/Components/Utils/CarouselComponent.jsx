import React from "react";
import Carousel from "react-material-ui-carousel";
import ItemComponent from "./ItemComponent";
import { Grid, Typography } from "@mui/material";
import { configurations } from "../../Configurations/enums";
import { Fragment } from "react";
const CarouselComponent = (props) => {
  console.log(props);
  return (
    <Fragment>
      <Grid container>
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
