const component = ({
  ctx,
  x = 0,
  y = 0,
  img,
  centerHorizontal = false,
  sizeHorizontal,
  centerVertical = false,
  sizeVertical,
  reverse
}) => {
  if (img) {
    // console.log(img);
    const centerX = sizeHorizontal / 2 - img.width / 2;
    const centerY = sizeVertical / 2 - img.height / 2;
    if (!reverse) {
      ctx.drawImage(
        img,
        centerHorizontal ? centerX : x,
        centerVertical ? centerY : y
      );
    } else {
      ctx.save();
      ctx.scale(1, -1);
      ctx.drawImage(img, x, -y + 120);
      ctx.restore();
    }
  }
};
