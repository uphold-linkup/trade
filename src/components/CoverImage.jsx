import { Typography } from "@mui/material";

const CoverImage = () => {
  return (
    <div className="img-container" style={{ padding: "4px" }}>
      <img
        style={{ width: "100%", borderRadius: "4px" }}
        src="https://plus.unsplash.com/premium_photo-1663931932637-e30332303b71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
      />
      <div class="top-left">
        <Typography fontWeight={800} variant="h4">
          BONUS
        </Typography>
        <Typography fontSize={14} fontWeight={800}>
          SPECIAL OFFER
        </Typography>
        <Typography fontSize={14} fontWeight={800}>
          become our official employee and
        </Typography>
        <Typography fontSize={14} fontWeight={800}>
          enjoy per video task for
        </Typography>
        <Typography fontSize={14} fontWeight={800}>
          500rs lifetime.
        </Typography>
        <br />
        <Typography fontSize={14} fontWeight={800}>
          get upgraded to VIP membership
        </Typography>
        <Typography fontSize={14} fontWeight={800}>
          and get up to 10,000Rs
        </Typography>
      </div>
    </div>
  );
};

export default CoverImage;
