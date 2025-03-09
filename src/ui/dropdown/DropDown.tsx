import React, { FC, useState } from "react";
import s from "./DropDown.module.scss";
import { IoIosArrowDown } from "react-icons/io";
import VideoCard from "../videoCard/VideoCard";
import { Lesson } from "@/types/types";

interface DropDownProps {
  lesson: Lesson;
}

const DropDown: FC<DropDownProps> = ({ lesson }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div id={s.dropdown}>
      <div className={`${s.dropdown_title}`} onClick={() => setIsOpen(!isOpen)}>
        <h2>{lesson.title}</h2>
        <span className={isOpen ? s.rotate : ""}>
          <IoIosArrowDown />
        </span>
      </div>

      {isOpen && (
        <div className={s.dropdown_content}>
          {lesson.videos.map((video) => (
            <VideoCard key={video.id} video={video} />
          ))}
        </div>
      )}
    </div>
  );
};

export default DropDown;
