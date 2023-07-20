import React, {useRef, useImperativeHandle, forwardRef } from "react";
import "./ProgressArea.scss";
import music1 from "../../music/music-1.mp3";
import { useDispatch } from "react-redux";
import { playMusic, stopMusic } from "../../store/musicPlayerReducer";

function ProgressArea(props, ref) {
  const audio = useRef()
  const dispatch = useDispatch()

  useImperativeHandle(ref, ()=>({
    play:()=>{
      audio.current.play()
    },
    pause:()=>{
      audio.current.pause()
    }
  }))

  const onPlay = ()=>{
    dispatch(playMusic())
  }

  const onPause = () => {
    dispatch(stopMusic())
  }

  return (
    <div className="progress-area">
      <div className="progress-bar">
        <audio
          autoPlay
          ref={audio}
          src={music1}
          onPlay={onPlay}
          onPause={onPause}
        ></audio>
      </div>
      <div className="music-timer">
        <span>00:00</span>
        <span>00:00</span>
      </div>
    </div>
  );
}

export default forwardRef(ProgressArea);
