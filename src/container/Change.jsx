import { Button } from "@mui/material";

const Change = ({ close, uad_percent }) => {
  return (
    <Button
      variant="contained"
      color={close ? "success" : "error"}
      style={{ width: "100px" }}
      startIcon={
        <img
          src={`./assets/icons/arrow-up.png`}
          width={16}
          height={16}
          style={{ transform: close ? "" : "rotate(180deg)" }}
        />
      }
    >
      {uad_percent}%
    </Button>
  );
};

export default Change;
