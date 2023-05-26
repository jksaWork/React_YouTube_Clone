import React from "react";
import { Stack, Box, Typography } from "@mui/material";
import SideBar from "./SideBar";
function Feed() {
  return (
    <Stack
      sx={{
        flexDirection: { sm: "row", xs: "col" },
        mt: "20px",
      }}
    >
      <Box
        sx={{
          height: { sm: "auto", md: "92vh" },
          // wdith: { sx: "auto", sm: "25%" },
          width: "300px",
          pl: 3,
        }}
      >
        <SideBar />
        <Typography
          sx={{
            textAlign: "center",
            color: "white",
            p: 2,
            fontFamily: "italc",
          }}
        >
          copyright Jksa altigani
        </Typography>
      </Box>
      {/* <Flex  */}
    </Stack>
  );
}

export default Feed;
