const getSrcImg = fileName => {
  return `assets/${fileName}`;
};

const findImageByName = (imgs, name) =>
  new Promise((resolve, reject) => {
    for (let i = 0; i < imgs.length; i++) {
      if (imgs[i].name === name) {
        return resolve(imgs[i]);
      }
    }
  });

const randomPipe = () => {
  return Math.floor(Math.random() * (350 - 200)) + 200;
};

const getSound = fileName =>
  new Promise((resolve, reject) => {
    // console.log(123);
    const wing = document.createElement("audio");
    wing.src = `assets/${fileName}`;
    wing.oncanplaythrough = () => {
      resolve(wing);
    };
  });
