import { Paper, Button } from "@mui/material";
import { configurations } from "../Configurations/enums";
const Item = (props) => {
  return (
    <Paper>
      <img
        src={props.item.image}
        alt={props.item.name}
        style={{
          display: "block",
          marginLeft: "auto",
          marginRight: "auto",
        }}
      />
      <h2 style={{ textAlign: "center", width: "100%" }}>{props.item.name}</h2>

      <Button
        variant="contained"
        sx={{
          borderRadius: 50,
          backgroundColor: configurations.companyColor,
          "&:hover": {
            backgroundColor: "#ffd870",
            color: "#3c52b2",
          },
        }}
        buttonStyle={{ borderRadius: "50" }}
        style={{
          margin: 0,
          position: "absolute",
          top: "75%",
          left: "75%",
          msTransform: "translate(-50%, -50%)",
          transform: "translate(-50%, -50%)",
        }}
      >
        IR
      </Button>
    </Paper>
  );
};

export default Item;
