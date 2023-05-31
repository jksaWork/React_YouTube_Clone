import { useState, useEffect } from "react";
import { Stack, Box, Typography } from "@mui/material";
import { SideBar, VediosComponents } from "./index";
import FetchFromApi from "../utlis/FetchFromApi";
import AppLayouts from "./AppLayouts";
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
    <AppLayouts>
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
    </AppLayouts>
  );
}

export default Feed;
