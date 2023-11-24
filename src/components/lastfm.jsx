import React from 'react';
import { useLastFM } from 'use-last-fm';
import Button from '@mui/material/Button';
const CurrentlyPlaying = () => {
  const lastFM = useLastFM('s4nt1k', '0085b7d63e377611b7bc03a46cfa1dfe');

  if (lastFM.status !== 'playing') {
    return(
         <div className="lastfm">
         <img src="./img/trackart.png" className="lastfmcover" alt="" />
         <h1>No track</h1>
      <p>Not listening to anything</p>
      </div>
      );
  }

  return (
    <div className="lastfm">
        <img src={lastFM.song.art} className="lastfmcover" alt="Album cover" />
    <h1>{lastFM.song.name}</h1>
    <p>{lastFM.song.artist}</p>
    </div>
  );
};

export default function Lastfm() {
  return (
    <div>
      <CurrentlyPlaying />
      <Button style={{
        borderRadius: 35,
        backgroundColor: "#324f10",
        padding: "5px 15px",
        fontSize: "18px",
        boxShadow: "0",
        color: "white"
      }} variant="contained">About</Button>
    </div>
  );
}