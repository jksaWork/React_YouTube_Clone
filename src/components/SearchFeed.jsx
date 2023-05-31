import { useState, useEffect } from "react";
import { Stack, Box, Typography } from "@mui/material";
import { SideBar, VediosComponents } from "./index";
import { useParams } from "react-router-dom";

import FetchFromApi from "../utlis/FetchFromApi";
import AppLayouts from "./AppLayouts";
function SearchFeed() {
  const { searchTrem } = useParams();
  const [selectCategory, setSelectCategory] = useState(searchTrem);
  const [Vedios, setVedios] = useState({});
  const [Loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(true);
    setSelectCategory(searchTrem);
    FetchFromApi(`search?part=snippet&q=${searchTrem}`).then((res) => {
      setVedios(res.data.items);
      setLoading(false);
      setSelectCategory(searchTrem);
    });
  }, [searchTrem]);

  return (
    <AppLayouts setSearch={() => setSelectCategory}>
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

export default SearchFeed;
