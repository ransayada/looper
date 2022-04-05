import "./channel.css";
import React, { useState } from "react";
import MuteIcon from './MuteIcon';
import UnMuteIcon from './UnMuteIcon';
  

const Channel = (props) => {
  const [isMute, setIsMute] = useState(false);

  const toggleIsMuted = () => {
    if (isMute) {
      setIsMute(false);
      props.track.isMute = false;
    } else {
      setIsMute(true);
      props.track.isMute = true;
    }
  };
  return (
    <div className="channel" style={{ backgroundColor: props.track.color }}>
      <h5 className="channel-name">Chanel {props.track.id}</h5>
      <h5 className="channel-name">{props.track.name}</h5>

      <div className="vol-mute">
        {isMute ? (
          <button
            className="channel-volume-mute"
            onClick={() => toggleIsMuted()}
            >
            <MuteIcon />
          </button>
        ) : (
          <button
          className="channel-volume-mute"
          onClick={() => toggleIsMuted()}
          >
          <UnMuteIcon />
          </button>
        )}
      </div>
    </div>
  );
};
export default Channel;
