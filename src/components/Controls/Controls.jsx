import React from "react";
import RepeatIcon from "@mui/icons-material/Repeat";
import RepeatOneIcon from "@mui/icons-material/RepeatOne";
import PauseIcon from "@mui/icons-material/Pause";
import SkipPrevious from "@mui/icons-material/SkipPrevious";
import PlayArrow from "@mui/icons-material/PlayArrow";
import SkipNext from "@mui/icons-material/SkipNext";
import QueueMusic from "@mui/icons-material/QueueMusic";
import ShuffleIcon from "@mui/icons-material/Shuffle";
import VolumeUpIcon from "@mui/icons-material/VolumeUp";
import "./Controls.scss";
import { useSelector } from "react-redux";

const Controls = ({
  showMusicList,
  setShowMusicList,
  resetDuration,
  play,
  pause,
  setVolume,
}) => {

  const playing =  useSelector((state)=> state.playing);

  const onClickPlay = () => {
    play();
  }

  const onClickPause = () => {
    pause();
  }

  return (
    <div className="control-area">
      <QueueMusic
        sx={{ fontSize: 30, cursor: "pointer" }}
    
      />
      <RepeatIcon sx={{ fontSize: 30, cursor: "pointer" }} />
      <SkipPrevious
        sx={{ fontSize: 30, cursor: "pointer" }}

      />
      {playing ? (
        <PauseIcon
          sx={{ fontSize: 30, cursor: "pointer" }}
          onClick={onClickPause}
        />
      ) : (
        <PlayArrow
          className="play"
          sx={{ fontSize: 30, cursor: "pointer" }}
          onClick={onClickPlay}
    
        />
      )}
      <SkipNext
        sx={{ fontSize: 30, cursor: "pointer" }}

      />
      <div className="volume-container">
        <VolumeUpIcon sx={{ fontSize: 20 }} />
        <input
          type="range"
          style={{ cursor: "pointer" }}
          defaultValue={1}
          min="0"
          max="1"
          step="0.1"
        />
      </div>
    </div>
  );
};

export default Controls;
