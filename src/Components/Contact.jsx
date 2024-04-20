import React from "react";
import {Grid,Icon,IconButton, Tooltip, Typography} from "@mui/material";
import { Fragment } from "react";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import MailOutlineIcon from '@mui/icons-material/MailOutline';

const Contact = () => {
  const textTittle = "Consultoría gratuita, ¡Tu primer paso hacia el éxito!";
  const textContact = "Nuestro equipo de expertos estará encantado de brindarte asesoramiento personalizado y responder a todas tus preguntas."
  return (
    <Grid container>
      <Grid item xs={12} className="ContentContact">
        <Typography className="Contact-title">{textTittle}</Typography>
        <Typography className="Contact-text">{textContact}</Typography>
      </Grid>
      <Grid item xs={12} className="title-orange">
					<h2>Contacto</h2>
          <h2 className="title-orange-hr"></h2>
      </Grid>
      <Grid container className="content-icon-contact">
        <Grid item xs={4}>
          <Grid className="Imagen-Contact">
            <LocationOnIcon className="icon-contact"></LocationOnIcon>
            <Typography color="black">{"1"}</Typography>
          </Grid>
        </Grid>
        <Grid item xs={4}>
          <Grid className="Imagen-Contact">
          <PhoneIcon className="icon-contact"></PhoneIcon>
            <Typography color="black">{"2"}</Typography>
          </Grid>
        </Grid>
        <Grid item xs={4}>
          <Grid className="Imagen-Contact">
            <MailOutlineIcon className="icon-contact"></MailOutlineIcon>
            <Typography color="black">{"3"}</Typography>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Contact;
