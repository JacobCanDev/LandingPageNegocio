import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import IconButton from "@mui/material/IconButton";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { configurations } from "../../Configurations/enums";

const CustomButtonGroupCarousel = ({ next, previous, goToSlide, ...rest }) => {
  const {
    carouselState: { currentSlide },
  } = rest;
  return (
    <div
      style={{ textAlign: "center", marginTop: "2rem" }}
      className="carousel-button-group"
    >
      <IconButton
        className={currentSlide === 0 ? "disable" : ""}
        size="small"
        sx={{
          "&:hover": {
            opacity: "0.7 !important",
          },
          backgroundColor: configurations.companyColor + " !important",
          marginLeft: "2rem",
        }}
        onClick={() => previous()}
      >
        <ArrowBackIosIcon
          style={{
            fontSize: "2rem",
            color: "white",
          }}
        />
      </IconButton>

      <IconButton
        size="small"
        onClick={() => next()}
        sx={{
          "&:hover": {
            opacity: "0.7 !important",
          },
          backgroundColor: configurations.companyColor + " !important",
          marginLeft: "2rem",
        }}
      >
        <ArrowForwardIosIcon
          style={{
            fontSize: "2rem",
            color: "white",
          }}
        />
      </IconButton>
    </div>
  );
};
export default CustomButtonGroupCarousel;
