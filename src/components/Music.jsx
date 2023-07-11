import React from "react";
import { IconButton } from "@mui/material";
import "./styles/station.css";
import { Radio } from "@mui/icons-material";
import ReactAudioPlayer from "react-audio-player";

const url = "http://localhost:3443/api/";

const Music = ({music, withIcon = false}) => {
  const handleChange = () => {};
  //   console.log(music.name);

  return (
    <div className="song_container">
      {withIcon && (
        <div className="left">
          <IconButton onClick={handleChange} className="play_btn">
            {/* <PauseIcon /> */}
            <Radio />
          </IconButton>
          {/* <img src={Radio} alt="radio_img" /> */}
          {/* <p>Votos: {music.music.votes}</p> */}
        </div>
      )}
      <div className="left">
        <p>{music.name}</p>
      </div>
      <ReactAudioPlayer
        className="itemRadio"
        src={url + "file/" + music.path}
        controls
        autoPlay

      />
      {/* </Link> */}
    </div>
  );
};

export default Music;
