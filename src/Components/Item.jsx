import { Paper, Button } from "@mui/material";

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
      <h2>{props.item.name}</h2>
      <p>{props.item.description}</p>

      <Button className="CheckButton">Check it out!</Button>
    </Paper>
  );
};

export default Item;
