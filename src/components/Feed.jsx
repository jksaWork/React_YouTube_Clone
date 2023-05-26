import { useState, useEffect } from "react";
import { Stack, Box, Typography } from "@mui/material";
import { SideBar, VediosComponents } from "./index";
import FetchFromApi from "../utlis/FetchFromApi";
function Feed() {
  const [selectCategory, setSelectCategory] = useState("New");
  const [Vedios, setVedios] = useState({});
  const [Loading, setLoading] = useState(true);
  useEffect(() => {
    FetchFromApi(`search?part=snippet&q=${selectCategory}`).then((res) => {
      setVedios(res.data.items);
      console.log(res.data.items);
      setLoading(false);
    });
  }, [selectCategory]);

  return (
    <Stack
      direction="row"
      sx={{
        flexDirection: { xs: "column", sm: "row" },
        mt: "20px",
        gap: 3,
      }}
    >
      <Box
        sx={{
          height: { sm: "auto", md: "92vh" },
          // wdith: { sx: "auto", sm: "25%" },
          // width: "350px",
          overflow: "hidden",
          pl: 3,
        }}
      >
        <SideBar
          selectCategory={selectCategory}
          setSelectCategory={setSelectCategory}
          setLoading={setLoading}
        />
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

      <Box
        sx={{
          flex: 1,
        }}
      >
        <Typography
          variant="h2"
          color="white"
          sx={{ fontWeight: "bold", textTransform: "capitalize" }}
        >
          {" "}
          <span>Vedios</span>{" "}
          <span className="text-primary">{selectCategory}</span>
        </Typography>
        <div className="mt-3">
          <VediosComponents videos={Vedios} Loading={Loading} />
        </div>
      </Box>
    </Stack>
  );
}

export default Feed;
