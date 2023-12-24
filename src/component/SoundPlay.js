import useSound from "use-sound";
import Aux from "./Aux";
import { memo, useEffect } from "react";
import React from "react";

const SoundPlay = memo(({ soundFileName, isPlay }) => {
  const soundList = require.context("../asset/sound/");
  const filePlay = soundList(`./${soundFileName}`);

  let [play, { stop }] = useSound(filePlay, {
    onend: () => {
      // console.info("Sound ended!");
    },
  });

  useEffect(() => {
    // console.log("Playing...");
  }, [soundFileName]);

  useEffect(() => {
    // console.log("Playing");
  }, [isPlay]);

  return (
    <Aux>
      <button style={{ display: "none" }} id="unmuteButton"></button>
      {isPlay ? play() : stop()}
    </Aux>
  );
});

export default SoundPlay;
