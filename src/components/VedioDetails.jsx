import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import FetchFromApi from "../utlis/FetchFromApi";
import { CardActionArea, Button } from "@mui/material";
import { MdNotificationsNone } from "react-icons/md";
import { Triangle } from "react-loader-spinner";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import VediosComponents from "./VediosComponents";
import ReactPlayer from "react-player";
function VedioDetails() {
  const { id } = useParams();
  console.log(id);
  const [Loading, setLoading] = useState(true);
  const [Vedios, setVedios] = useState({});
  const [vedio, setVedio] = useState({});
  const [ChannelId, setChannelId] = useState();
  const [Channel, setChannel] = useState({});
  const [ChanelImage, setChanelImage] = useState("");
  console.log(Vedios, vedio, "--------------chanel ------------");

  useEffect(() => {
    FetchFromApi(`videos?id=${id}&part=contentDetails,snippet,statistics`).then(
      (res) => {
        setVedio(res.data.items[0]);
      }
    );
  }, [id]);

  useEffect(() => {
    if (ChannelId) {
      console.log("Fetch Chanel Data");
      FetchFromApi(`channels?id=${ChanelId}&part=snippet`).then((res) => {
        setChannel(res.data.items[0]);
      });
    }
  }, [ChannelId]);

  useEffect(() => {
    FetchFromApi(`search?part=snippet`).then((res) => {
      setVedios(res.data.items);
      setLoading(false);
    });
  }, [id]);
  // return ;
  return Loading ? (
    <div className="w-full h-[100vh] flex justify-center items-center">
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
    (() => {
      const {
        snippet: {
          channelId,
          channelTitle,
          description,
          publishTime,
          title,
          thumbnails,
        },
      } = vedio;
      return (
        <div class="flex  w-[80vw] mx-auto">
          <div className="w-3/5">
            <Card variant="dark" sx={{ background: "#161515" }}>
              <CardActionArea>
                <ReactPlayer
                  url={`https://www.youtube.com/watch?v=${id}`}
                  width="100"
                />
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
                      <ChanelDetatilsComponents channel="Channel" />
                    </div>
                  </div>
                </CardContent>
              </CardActionArea>
            </Card>
            <Typography variant="body2" color="gray">
              <div className="text-ellipsis line-clamp-2"> {description}</div>
            </Typography>
          </div>
          <div className="mt-3 w-2/5 mx-auto">
            <VediosComponents videos={Vedios} Loading={Loading} />
          </div>
        </div>
      );
    })()
  );
}

const ChanelDetatilsComponents = (channel) => {
  const {
    snippet: { thumbnails },
  } = channel;
  return (
    <div className="text-white w-full bg-[#161515] p-5   rounded-xl">
      <div className="flex no-wrap justify-between items-center">
        <div className="flex items-center justify-center">
          <img
            src={thumbnails?.high?.url}
            class=" max-w-[20px]  min-w-[20px] mx-3  rounded-full"
          />
          <div className="max-w-[400px] mx-4">
            <h1 class="text-bold text-2xl mt-2">
              <Link to={`chanels/${Channel.id.channelId}`}>
                {Channel.snippet.title}
              </Link>
            </h1>
            <h5 class="text-bold text-md mt-2">
              {Channel.snippet.description}
            </h5>
            <p class="text-bold mt-5">{Channel.snippet.publishTime}</p>
          </div>
        </div>
        {/* Descrption Section */}

        <div class="md:block hidden">
          <Button
            variant="text"
            sx={{ color: "white", px: "30px" }}
            startIcon={<MdNotificationsNone />}
          >
            subscribe
          </Button>

          <Button
            variant="contained"
            sx={{ color: "white", px: "30px" }}
            //     startIcon={<MdNotificationsNone />}
          >
            Join
          </Button>
        </div>
      </div>
    </div>
  );
};
export default VedioDetails;
