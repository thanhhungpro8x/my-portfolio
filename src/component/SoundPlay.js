import useSound from "use-sound";
import Aux from "./Aux";
import { memo, useEffect } from "react";

const SoundPlay = memo(({ soundFileName, isPlay }) => {
  const soundList = require.context("../asset/sound/");
  const filePlay = soundList(`./${soundFileName}`);

  const [play, { stop }] = useSound(filePlay, {
    onend: () => {
      console.info("Sound ended!");
    },
  });

  useEffect(() => {
    stop();
    console.log("Playing...");
  }, [soundFileName]);

  useEffect(() => {
    console.log("Playing");
  }, [isPlay]);

  return <Aux>{isPlay ? play() : stop()}</Aux>;
});

export default SoundPlay;
