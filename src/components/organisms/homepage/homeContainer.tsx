import React, { useEffect, useRef, useState } from "react";
import { useAppStore } from "../../../store/store";

const HomeContainer = () => {
  const prices = useAppStore((state) => state.prices);
  const fetchInitialData = useAppStore((state) => state.fetchInitialData);
  const [audio, setAudio] = useState<any>(null);
  useEffect(() => {
    const audfd = new Audio(
      "http://commondatastorage.googleapis.com/codeskulptor-assets/Collision8-Bit.ogg"
    );
    audfd.muted = true;
    setAudio(audfd);
    // only run once on the first render on the client
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      fetchInitialData();
    }, 1000);
    return () => clearInterval(interval);
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

  var playSound = function () {
    var sound20 = new Audio(
      "http://commondatastorage.googleapis.com/codeskulptor-assets/Collision8-Bit.ogg"
    );
    sound20.muted = false; // without this line it's not working although I have "muted" in HTML
    sound20.play();
  };

  useEffect(() => {
    if (prices !== null) {
      if (Number(prices.cosmos) > 10) {
        // playSound();
        start();
      }
    }
  });

  return prices !== null ? (
    <div className="text-center aos-init aos-animate flex items-center max-w-[400px] mx-auto justify-center">
      <div className="pt-[200px] pb-[100px]">
        <div className="bg-black-700 p-4 rounded-md">
          <div className="flex items-center mb-2" onClick={playSound}>
            <p className="text-light-high font-medium w-[200px] text-left">
              hopers:
            </p>
            <p className="text-light-high">${prices!.hopers}</p>
          </div>
          <div className="flex items-center mb-2">
            <p className="text-light-high font-medium w-[200px] text-left">
              jackal:
            </p>
            <p className="text-light-high">${prices!.jackal}</p>
          </div>
          <div className="flex items-center mb-2">
            <p className="text-light-high font-medium w-[200px] text-left">
              rebus:
            </p>
            <p className="text-light-high">${prices!.rebus}</p>
          </div>
          <div className="flex items-center mb-2">
            <p className="text-light-high font-medium w-[200px] text-left">
              osmosis:
            </p>
            <p className="text-light-high">${prices!.osmosis}</p>
          </div>
          <div className="flex items-center mb-2">
            <p className="text-light-high font-medium w-[200px] text-left">
              evmos:
            </p>
            <p className="text-light-high">${prices!.evmos}</p>
          </div>
          <div className="flex items-center mb-2">
            <p className="text-light-high font-medium w-[200px] text-left">
              persistence:
            </p>
            <p className="text-light-high">${prices!.persistence}</p>
          </div>
          <div className="flex items-center mb-2">
            <p className="text-light-high font-medium w-[200px] text-left">
              akash:
            </p>
            <p className="text-light-high">${prices!.akash}</p>
          </div>
          <div className="flex items-center mb-2">
            <p className="text-light-high font-medium w-[200px] text-left">
              cosmos:
            </p>
            <p className="text-light-high">${prices!.cosmos}</p>
          </div>
          <div className="flex items-center mb-2">
            <p className="text-light-high font-medium w-[200px] text-left">
              stargaze:
            </p>
            <p className="text-light-high">${prices!.stargaze}</p>
          </div>
        </div>
      </div>
    </div>
  ) : (
    ""
  );
};
export default HomeContainer;
