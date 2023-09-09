import { Button } from "@mui/material";
import arrowUp from "../assets/icons/arrow-up.png";

const Change = ({ close, uad_percent, kd = 0 }) => {
  return (
    <Button
      variant="contained"
      color={close ? "success" : "error"}
      style={{ width: "100px" }}
      startIcon={
        <img
          src={arrowUp}
          width={16}
          height={16}
          style={{ transform: close ? "" : "rotate(180deg)" }}
        />
      }
    >
      {uad_percent}%%
    </Button>
  );
};

export default Change;
