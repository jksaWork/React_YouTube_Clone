import React from "react";
import { Triangle } from "react-loader-spinner";
import { Stack, Box } from "@mui/material";
import { ChannelCard, VideoCard } from "./";
function VediosComponents({ videos, Loading }) {
  let unSortingVediosComponets = false;
  // Sort Give Chanle Fist
  const handleVedios = (videos) => {
    const unSortingVedios = videos.map((item) => item);

    let Channels = unSortingVedios.filter((el) => el.id.videoId == null);
    let vedios = unSortingVedios.filter((el) => el.id.videoId);
    let SortsItems = [...Channels, ...vedios];
    //  Sort Give Chanel First
    let unSortingVediosComponets = SortsItems.map((item) => {
      if (item.id.videoId) {
        return <VideoCard vedio={item} key={item.id.videoId} />;
      } else {
        return <ChannelCard chanel={item} key={item.id.channelId} />;
      }
    });
    return unSortingVediosComponets;
  };
  return Loading ? (
    <div className="w-full h-[50vh] flex justify-center items-center">
      <Triangle
        height="180"
        width="180"
        color="#fc1503"
        ariaLabel="triangle-loading"
        wrapperStyle={{}}
        wrapperClassName=""
        visible={true}
      />
    </div>
  ) : (
    <div className="w-full ">
      <Stack gap={2} flexWrap="wrap" justifyContent={"center"} direction="row">
        {handleVedios(videos)}
      </Stack>
    </div>
  );
}

export default VediosComponents;
