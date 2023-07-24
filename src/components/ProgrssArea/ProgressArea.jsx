import React, {useRef, useImperativeHandle, forwardRef, useState } from "react";
import "./ProgressArea.scss";
import music1 from "../../music/music-1.mp3";
import { useDispatch } from "react-redux";
import { playMusic, stopMusic } from "../../store/musicPlayerReducer";

function ProgressArea(props, ref) {
  const audio = useRef()
  const progressBar = useRef()
  const dispatch = useDispatch()
  const [currentTime, setcurrentTime] = useState("00:00")
  const [duration, setduration] = useState("00:00")

  useImperativeHandle(ref, ()=>({
    play:()=>{
      audio.current.play()
    },
    pause:()=>{
      audio.current.pause()
    },
    changeVolume:(volume) => {
      audio.current.volume = volume
    }
  }))

  const onPlay = ()=>{
    dispatch(playMusic())
  }

  const getTime = (time) => {
    const minute = `0${parseInt(time/60,10)}`
    const seconds = `0${parseInt(time%60)}`
    return `${minute}:${seconds.slice(-2)}`
  }

  const onClickProgress = (event) => {
    const progressBarWidth = event.currentTarget.clientWidth;
    const offsetX = event.nativeEvent.offsetX;
    const duration = audio.current.duration;
    audio.current.currentTime = (offsetX/progressBarWidth) * duration
  }

  const onTimeUpdate = (event) => {
    if(event.target.readyState === 0) return;
    const currentTime = event.target.currentTime;
    const duration = event.target.duration;
    const progressBarWidth = (currentTime/duration) * 100;
    progressBar.current.style.width = `${progressBarWidth}%`;
    setcurrentTime(getTime(currentTime))
    setduration(getTime(duration))
  }

  const onPause = () => {
    dispatch(stopMusic())
  }

  return (
    <div className="progress-area" onMouseDown={onClickProgress}>
      <div className="progress-bar" ref={progressBar}>
        <audio
          autoPlay
          ref={audio}
          src={music1}
          onPlay={onPlay}
          onPause={onPause}
          onTimeUpdate={onTimeUpdate}
        ></audio>
      </div>
      <div className="music-timer">
        <span>{currentTime}</span>
        <span>{duration}</span>
      </div>
    </div>
  );
}

export default forwardRef(ProgressArea);
