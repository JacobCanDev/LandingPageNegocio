import { Paper, Button } from "@mui/material";
import { configurations } from "../../Configurations/enums";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

const ItemComponent = (props) => {
  return (
    <Card
      sx={{
        boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2) !important",
        maxWidth: "320px",
        margin: "auto 1rem",
        textAlign: "center",
        fontFamily: "arial",
      }}
    >
      <CardContent>
        <img
          style={{ width: "100%", height: "16em", objectFit: "scale-down" }}
          src={props.item.image}
        />
        <h2>{props.item.name}</h2>
        <p>{props.item.description}</p>
      </CardContent>
      <CardActions>
        <Button
          sx={{
            border: "none",
            outline: 0,
            padding: "12px",
            textAlign: "center",
            cursor: "pointer",
            width: "100%",
            fontSize: "18px",
            "&:hover": {
              opacity: "0.7 !important",
            },
            color: "white !important",
            backgroundColor: configurations.companyColor + " !important",
          }}
          size="small"
        >
          IR
        </Button>
      </CardActions>
    </Card>
  );
};

export default ItemComponent;
