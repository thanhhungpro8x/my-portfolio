const audioPlay = ({ soundFileName }) => {
  const files = require.context("../asset/sound/");
  const filePlay = files(`./${soundFileName}`);

  const audio = new Audio(filePlay);
  audio.load();
  if (audio) {
    return audio.play();
  } else {
    setTimeout(() => {
      return audio.play();
    }, 1000);
    console.log("Load audio file not play...");
  }
};
export default audioPlay;
