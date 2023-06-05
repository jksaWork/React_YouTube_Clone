import React from "react";

import { useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import ReactWOW from "react-wow";
import { Link } from "react-router-dom";
import {
  demoThumbnailUrl,
  demoChannelUrl,
  demoVideoUrl,
  demoChannelTitle,
  demoVideoTitle,
  demoProfilePicture,
} from "../utlis/constants";
import FetchFromApi from "../utlis/FetchFromApi";

function VideoCard({ vedio }) {
  //   console.log("res");
  return (
    <div class="text-white min-w-[150px] max-w-[320px]">
      {" "}
      <ActionAreaCard vedio={vedio} />{" "}
    </div>
  );
}

export default VideoCard;

export function ActionAreaCard({ vedio }) {
  // console.log(vedio, "Vedios ------------");
  const [ChanelImage, setChanelImage] = useState(demoProfilePicture);
  const {
    channelId,
    channelTitle,
    description,
    publishTime,
    title,
    thumbnails,
  } = vedio.snippet;
  return (
    <>
      <Card variant="dark" sx={{ background: "#161515" }}>
        <CardActionArea>
          <Link to={`/vedio/${vedio.id.videoId}`}>
            <CardMedia
              component="img"
              // height="100"
              sx={{
                height: 170,
              }}
              image={thumbnails?.high?.url}
              alt="green iguana"
            />
          </Link>

          <CardContent>
            <div className="flex">
              <div className="w-[30px]  mr-3">
                {/* {getIamge(channelId)} */}
                <img
                  src={ChanelImage}
                  className="w-[30px] h-[30px] rounded-full"
                  loading="lazy"
                />
              </div>
              <div className="flex-1">
                <Typography gutterBottom component="div" color="white">
                  <div className="text-ellipsis line-clamp-2 min-h-[50px]">
                    {title}
                  </div>
                </Typography>
              </div>
            </div>

            <Typography variant="body2" color="gray">
              <div className="text-ellipsis line-clamp-2"> {description}</div>
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </>
  );
}
