const loadImage = item =>
  new Promise((resolve, reject) => {
    const img = new Image();
    img.src = item.src;
    img.name = item.name ? item.name : item.src;
    img.onload = () => {
      return resolve(img);
    };
  });

const withImgsLoaded = async (arrSrcImgs, func) => {
  const imgs = [];
  await Promise.all(
    arrSrcImgs.map(async item => {
      const img = await loadImage(item);
      imgs.push(img);
    })
  );
  func(imgs);
};
