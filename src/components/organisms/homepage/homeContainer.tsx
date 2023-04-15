import React, { useEffect, useRef, useState } from "react";
import { useAppStore } from "../../../store/store";

const HomeContainer = () => {
  const prices = useAppStore((state) => state.prices);
  const fetchInitialData = useAppStore((state) => state.fetchInitialData);
  const [audio, setAudio] = useState<any>(null);
  useEffect(() => {
    setAudio(new Audio("/audio.mp3"));
    // only run once on the first render on the client
  }, []);

  useEffect(() => {
    fetchInitialData();
  }, []);

  const start = () => {
    audio.autoplay = true;
    audio.muted = false;
    audio.play();
    // audio.muted();
  };

  useEffect(() => {
    if (prices !== null) {
      if (Number(prices.cosmos) > 10) {
        start();
      }
    }
  }, [prices]);

  return prices !== null ? (
    <div className="text-center aos-init aos-animate">
      <div className="pt-[200px] pb-[100px]">
        <button className="selectMe">clickMe!</button>
        <p className="text-light-high" onClick={start}>
          hopers:${prices!.hopers}
        </p>
        <p className="text-light-high">hopers:${prices!.jackal}</p>
        <p className="text-light-high">rebus:${prices!.rebus}</p>
        <p className="text-light-high">osmosis:${prices!.osmosis}</p>
        <p className="text-light-high">evmos:${prices!.evmos}</p>
        <p className="text-light-high">persistence:${prices!.persistence}</p>
        <p className="text-light-high">akash:${prices!.akash}</p>
        <p className="text-light-high">cosmos:${prices!.cosmos}</p>
        <p className="text-light-high">stargaze:${prices!.stargaze}</p>
      </div>
    </div>
  ) : (
    ""
  );
};
export default HomeContainer;
