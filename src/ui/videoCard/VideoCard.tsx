import React from "react";
import s from "./VideoCard.module.scss";
import banner from "@/assets/img/video_banner.png";
import Image from "next/image";
import { RxLockClosed } from "react-icons/rx";
import { Video } from "@/types/types";

interface VideoCardProps {
  video: Video;
}

const VideoCard: React.FC<VideoCardProps> = ({ video }) => {
  return (
    <div id={s.video}>
      <div className={s.video_banner}>
        <Image src={banner} alt="img" />
        {video.locked && (
          <span>
            <RxLockClosed />
          </span>
        )}
        <h6>{video.duration}</h6>
      </div>
      <h5>{video.title}</h5>
      <p>{video.description}</p>
    </div>
  );
};

export default VideoCard;
