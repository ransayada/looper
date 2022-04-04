import { useState, useRef } from "react";
//Tracks
import Track1 from "./assets/audio/_tambourine_shake_higher.mp3";
import Track2 from "./assets/audio/ALL TRACK.mp3";
import Track3 from "./assets/audio/B VOC.mp3";
import Track4 from "./assets/audio/DRUMS.mp3";
import Track5 from "./assets/audio/HE HE VOC.mp3";
import Track6 from "./assets/audio/HIGH VOC.mp3";
import Track7 from "./assets/audio/JIBRISH.mp3";
import Track8 from "./assets/audio/LEAD 1.mp3";
import Track9 from "./assets/audio/UUHO VOC.mp3";
//Components
import Slider from "./components/slider/Slider";
import ControlPanel from "./components/controls/ControlPanel";
import Channel from "./components/channels/Channel";
import Button from "./components/special-button/Button";

const App = () => {
  const [percentage, setPercentage] = useState(0);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLooping, setIsLooping] = useState(false);

  //audio refs
  const audioRef1 = useRef();
  const audioRef2 = useRef();
  const audioRef3 = useRef();
  const audioRef4 = useRef();
  const audioRef5 = useRef();
  const audioRef6 = useRef();
  const audioRef7 = useRef();
  const audioRef8 = useRef();
  const audioRef9 = useRef();

  const tracks = [
    {
      id: 1,
      name: "_tambourine_shake_higher",
      color: "#f87171",
    },
    {
      id: 2,
      name: "ALL TRACK",
      color: "#fb923c",
    },
    {
      id: 3,
      name: "B VOC",
      color: "#a3e635",
    },
    {
      id: 4,
      name: "DRUMS",
      color: "#34d399",
    },
    {
      id: 5,
      name: "HE HE VOC",
      color: "#2dd4bf",
    },
    {
      id: 6,
      name: "HIGH VOC",
      color: "#22d3ee",
    },
    {
      id: 7,
      name: "JIBRISH",
      color: "#60a5fa",
    },
    {
      id: 8,
      name: "LEAD 1",
      color: "#818cf8",
    },
    {
      id: 9,
      name: "UUHO VOC",
      color: "#fb7185",
    },
  ];

  //audio slider-time handler
  const onChange = (e) => {
    const audio1 = audioRef1.current;
    audio1.currentTime = (audio1.duration / 100) * e.target.value;
    const audio2 = audioRef2.current;
    audio2.currentTime = (audio2.duration / 100) * e.target.value;
    const audio3 = audioRef3.current;
    audio3.currentTime = (audio3.duration / 100) * e.target.value;
    const audio4 = audioRef4.current;
    audio4.currentTime = (audio4.duration / 100) * e.target.value;
    const audio5 = audioRef5.current;
    audio5.currentTime = (audio5.duration / 100) * e.target.value;
    const audio6 = audioRef6.current;
    audio6.currentTime = (audio6.duration / 100) * e.target.value;
    const audio7 = audioRef7.current;
    audio7.currentTime = (audio7.duration / 100) * e.target.value;
    const audio8 = audioRef8.current;
    audio8.currentTime = (audio8.duration / 100) * e.target.value;
    const audio9 = audioRef9.current;
    audio9.currentTime = (audio9.duration / 100) * e.target.value;
    setPercentage(e.target.value);
  };

  const play = () => {
    //if we stopped the slider on minute > 00:00
    const audio1 = audioRef1.current;
    const audio2 = audioRef2.current;
    const audio3 = audioRef3.current;
    const audio4 = audioRef4.current;
    const audio5 = audioRef5.current;
    const audio6 = audioRef6.current;
    const audio7 = audioRef7.current;
    const audio8 = audioRef8.current;
    const audio9 = audioRef9.current;

    if (!isPlaying) {
      setIsPlaying(true);
      !tracks[0].isMute ? (audio1.volume = 0.3) : (audio1.volume = 0);
      audio1.play();
      !tracks[1].isMute ? (audio2.volume = 0.3) : (audio2.volume = 0);
      audio2.play();
      !tracks[2].isMute ? (audio3.volume = 0.3) : (audio3.volume = 0);
      audio3.play();
      !tracks[3].isMute ? (audio4.volume = 0.3) : (audio4.volume = 0);
      audio4.play();
      !tracks[4].isMute ? (audio5.volume = 0.3) : (audio5.volume = 0);
      audio5.play();
      !tracks[5].isMute ? (audio6.volume = 0.3) : (audio6.volume = 0);
      audio6.play();
      !tracks[6].isMute ? (audio7.volume = 0.3) : (audio7.volume = 0);
      audio7.play();
      !tracks[7].isMute ? (audio8.volume = 0.3) : (audio8.volume = 0);
      audio8.play();
      !tracks[8].isMute ? (audio9.volume = 0.3) : (audio9.volume = 0);
      audio9.play();
    }

    if (isPlaying) {
      setIsPlaying(false);
      audio1.pause();
      audio2.pause();
      audio3.pause();
      audio4.pause();
      audio5.pause();
      audio6.pause();
      audio7.pause();
      audio8.pause();
      audio9.pause();
    }
  };

  const loop = () => {
    setIsLooping(!isLooping);
  };

  const stop = () => {
    const audio1 = audioRef1.current;
    audio1.currentTime = 0;
    audio1.pause();
    const audio2 = audioRef2.current;
    audio2.currentTime = 0;
    audio2.pause();
    const audio3 = audioRef3.current;
    audio3.currentTime = 0;
    audio3.pause();
    const audio4 = audioRef4.current;
    audio4.currentTime = 0;
    audio4.pause();
    const audio5 = audioRef5.current;
    audio5.currentTime = 0;
    audio5.pause();
    const audio6 = audioRef6.current;
    audio6.currentTime = 0;
    audio6.pause();
    const audio7 = audioRef7.current;
    audio7.currentTime = 0;
    audio7.pause();
    const audio8 = audioRef8.current;
    audio8.currentTime = 0;
    audio8.pause();
    const audio9 = audioRef9.current;
    audio9.currentTime = 0;
    audio9.pause();
    setIsPlaying(false);
  };

  const getCurrDuration = (e) => {
    const percent = (
      (e.currentTarget.currentTime / e.currentTarget.duration) *
      100
    ).toFixed(2);
    const time = e.currentTarget.currentTime;

    setPercentage(+percent);
    setCurrentTime(time.toFixed(2));
  };

  return (
    <div className="app-container">
      <div className="div"></div>
      <h1>
        Looper<span className="dot">.</span>
      </h1>
      <Slider percentage={percentage} onChange={onChange} />
      <ControlPanel
        duration={duration}
        currentTime={currentTime}
      />
      <audio
        loop={isLooping}
        ref={audioRef1}
        onTimeUpdate={getCurrDuration}
        onLoadedData={(e) => {
          setDuration(e.currentTarget.duration.toFixed(2));
        }}
        src={Track1}
      ></audio>
      <audio
        loop={isLooping}
        ref={audioRef2}
        onTimeUpdate={getCurrDuration}
        onLoadedData={(e) => {
          setDuration(e.currentTarget.duration.toFixed(2));
        }}
        src={Track2}
      ></audio>
      <audio
        loop={isLooping}
        ref={audioRef3}
        onTimeUpdate={getCurrDuration}
        onLoadedData={(e) => {
          setDuration(e.currentTarget.duration.toFixed(2));
        }}
        src={Track3}
      ></audio>
      <audio
        loop={isLooping}
        ref={audioRef4}
        onTimeUpdate={getCurrDuration}
        onLoadedData={(e) => {
          setDuration(e.currentTarget.duration.toFixed(2));
        }}
        src={Track4}
      ></audio>
      <audio
        loop={isLooping}
        ref={audioRef5}
        onTimeUpdate={getCurrDuration}
        onLoadedData={(e) => {
          setDuration(e.currentTarget.duration.toFixed(2));
        }}
        src={Track5}
      ></audio>
      <audio
        loop={isLooping}
        ref={audioRef6}
        onTimeUpdate={getCurrDuration}
        onLoadedData={(e) => {
          setDuration(e.currentTarget.duration.toFixed(2));
        }}
        src={Track6}
      ></audio>
      <audio
        loop={isLooping}
        ref={audioRef7}
        onTimeUpdate={getCurrDuration}
        onLoadedData={(e) => {
          setDuration(e.currentTarget.duration.toFixed(2));
        }}
        src={Track7}
      ></audio>
      <audio
        loop={isLooping}
        ref={audioRef8}
        onTimeUpdate={getCurrDuration}
        onLoadedData={(e) => {
          setDuration(e.currentTarget.duration.toFixed(2));
        }}
        src={Track8}
      ></audio>
      <audio
        loop={isLooping}
        ref={audioRef9}
        onTimeUpdate={getCurrDuration}
        onLoadedData={(e) => {
          setDuration(e.currentTarget.duration.toFixed(2));
        }}
        src={Track9}
      ></audio>
      {tracks.map((track) => (
        <Channel track={track} key={track.id} />
      ))}
      <div className="buttons">
        <Button play={play} isPlaying={isPlaying} />
        <button className="stop-btn" onClick={stop}>stop</button>
        <button
          onClick={loop}
          className={isLooping ? "btn-loop" : "btn-no-loop"}
        >
          Loop
        </button>
      </div>
    </div>
  );
};

export default App;