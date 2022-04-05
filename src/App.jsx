//hooks
import { useState, useRef } from "react";
//Tracks
import Track1 from "./assets/audio/ALL TRACK.mp3";
import Track2 from "./assets/audio/tambourine_shake_higher.mp3";
import Track3 from "./assets/audio/B VOC.mp3";
import Track4 from "./assets/audio/UUHO VOC.mp3";
import Track5 from "./assets/audio/DRUMS.mp3";
import Track6 from "./assets/audio/HE HE VOC.mp3";
import Track7 from "./assets/audio/HIGH VOC.mp3";
import Track8 from "./assets/audio/JIBRISH.mp3";
import Track9 from "./assets/audio/LEAD 1.mp3";
//Components
import Slider from "./components/slider/Slider";
import TimePanel from "./components/time-panel/TimePanel";
import Channel from "./components/channels/Channel";
import MyButton from "./components/special-button/MyButton";

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

  //audio tracks State
  const [tracks, setTracks] = useState([
    {
      id: 1,
      name: "ALL TRACK",
      color: "#fb923c",
      isMute: false,
      audioRef: audioRef1,
      src: Track1,
    },
    {
      id: 2,
      name: "tambourine_shake_higher",
      color: "#f87171",
      isMute: false,
      audioRef: audioRef2,
      src: Track2,
    },
    {
      id: 3,
      name: "B VOC",
      color: "#f472b6",
      isMute: false,
      audioRef: audioRef3,
      src: Track3,
    },
    {
      id: 4,
      name: "UUHO VOC",
      color: "#e879f9",
      isMute: false,
      audioRef: audioRef4,
      src: Track4,
    },
    {
      id: 5,
      name: "DRUMS",
      color: "#34d399",
      isMute: false,
      audioRef: audioRef5,
      src: Track5,
    },
    {
      id: 6,
      name: "HE HE VOC",
      color: "#2dd4bf",
      isMute: false,
      audioRef: audioRef6,
      src: Track6,
    },
    {
      id: 7,
      name: "HIGH VOC",
      color: "#22d3ee",
      isMute: false,
      audioRef: audioRef7,
      src: Track7,
    },
    {
      id: 8,
      name: "JIBRISH",
      color: "#60a5fa",
      isMute: false,
      audioRef: audioRef8,
      src: Track8,
    },
    {
      id: 9,
      name: "LEAD 1",
      color: "#818cf8",
      isMute: false,
      audioRef: audioRef9,
      src: Track9,
    },
  ]);
  //audio slider-time handler
  // finite Check: chrome doesn't like the audio tag timeupdate event (it thinks the currentTime is not finite)
  const onChange = (e) => {
    for (let i = 0; i < tracks.length; i++) {
      const audio = tracks[i].audioRef.current;
      const audioCurr = (audio.duration / 100) * e.target.value;
      if (!isFinite(audioCurr)) {
        audio.currentTime = audioCurr;
      }
      audio.currentTime = audioCurr;
    }
    setPercentage(e.target.value);
  };

  //Play/Pause button toggle function
  const play = () => {
    for (let i = 0; i < tracks.length; i++) {
      const audio = tracks[i].audioRef.current;
      if (!isPlaying) {
        audio.play();
      } else {
        audio.pause();
      }
    }
    setIsPlaying(!isPlaying);
  };

  //Loop button toggle function
  const loop = () => {
    setIsLooping(!isLooping);
  };

  //Stop button toggle function
  const stop = () => {
    for (let i = 0; i < tracks.length; i++) {
      const audio = tracks[i].audioRef.current;
      audio.pause();
      audio.currentTime = 0;
    }
    setIsPlaying(false);
  };

  //audio time update function
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
      <TimePanel duration={duration} currentTime={currentTime} />
      {tracks.map((track) => (
        <audio
          muted={track.isMute}
          loop={isLooping}
          ref={track.audioRef}
          onTimeUpdate={getCurrDuration}
          onLoadedData={(e) => {
            setDuration(e.currentTarget.duration.toFixed(2));
          }}
          src={track.src}
          key={track.id}
        ></audio>
      ))}

      {tracks.map((track) => (
        <Channel track={track} key={track.id} />
      ))}
      <div className="buttons">
        <MyButton play={play} isPlaying={isPlaying} />
        <button className="stop-btn" onClick={stop}>
          stop
        </button>
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
