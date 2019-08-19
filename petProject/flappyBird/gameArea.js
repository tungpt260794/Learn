const gameArea = async function(imgs) {
  // resources
  const imgBg = await findImageByName(imgs, "backgroundDay");
  const imgBtnPlay = await findImageByName(imgs, "btnPlay");
  const imgGameOver = await findImageByName(imgs, "gameOver");
  const imgBase = await findImageByName(imgs, "base");
  const imgPipeRed = await findImageByName(imgs, "pipeRed");
  const imgRedBirdUp = await findImageByName(imgs, "redBirdMidFlap");
  const imgRedBirdDown = await findImageByName(imgs, "redBirdDownFlap");
  const imgRedBirdMid = await findImageByName(imgs, "redBirdMidFlap");

  const audDie = await getSound("die.ogg");
  const audHit = await getSound("hit.ogg");
  const audPoint = await getSound("point.ogg");
  const audWing = await getSound("wing.ogg");

  // variables for canvas
  const width = 288;
  const height = 512;
  let ctx = null;

  // avariables game control
  let isStart = false;
  let interval = null;
  let bgX = 0;
  let baseX = 0;
  let pipeX = width;
  let pipeY = randomPipe();
  let birdY = 292;
  let birdSpeedY = 0;
  let birdAcceleration = 0.2;
  let birdCurrentCount = 0;
  let birdCurrentAction = "down";
  let point = 0;

  const drawBg = async _x => {
    const bg = {
      ctx: ctx,
      width: width,
      height: height,
      x: _x,
      img: imgBg
    };
    component({ ...bg });
  };

  const updateBg = () => {
    bgX--;
    if (bgX === -width) {
      bgX = 0;
    }
    drawBg(bgX);
    drawBg(bgX + width);
  };

  const drawBtnPlay = async () => {
    const play = {
      ctx: ctx,
      img: imgBtnPlay,
      centerHorizontal: true,
      sizeHorizontal: width,
      centerVertical: true,
      sizeVertical: height
    };
    component({ ...play });
  };

  const drawGameOver = async () => {
    const gameOver = {
      ctx: ctx,
      img: imgGameOver,
      centerHorizontal: true,
      sizeHorizontal: width,
      y: 400
    };
    component({ ...gameOver });
  };

  const drawBase = async _x => {
    const base = {
      ctx: ctx,
      width: width,
      x: _x,
      y: 400,
      img: imgBase
    };
    component({ ...base });
  };

  const updateBase = () => {
    baseX -= 2;
    if (baseX === -width) {
      baseX = 0;
    }
    drawBase(baseX);
    drawBase(baseX + width);
  };

  const drawPipe = async (_x, _img) => {
    const base = {
      ctx: ctx,
      width: width,
      x: _x,
      y: pipeY,
      img: imgPipeRed
    };
    component({ ...base });
    component({ ...base, reverse: true });
  };

  const updatePipe = () => {
    pipeX -= 2;
    if (pipeX === -52) {
      pipeX = width;
      pipeY = randomPipe();
    }
    drawPipe(pipeX);
  };

  const drawBird = async (_y, _img) => {
    const bird = {
      ctx: ctx,
      y: _y,
      img: _img,
      centerHorizontal: true,
      sizeHorizontal: width
    };
    component({ ...bird });
  };

  const updateBird = async () => {
    if (pipeX <= width - 127 && pipeX >= width - 127 - 52 - 34) {
      if (birdY >= pipeY - 26 || birdY <= pipeY - 120) {
        stop();
      }
    }
    if (pipeX == width - 127 - 52 - 34 + 1) {
      audPoint.play();
      point++;
    }

    if (birdY < 0) {
      birdSpeedY = 0;
      stop();
    } else if (birdY < height - 138) {
      birdSpeedY += birdAcceleration;
      birdY += birdSpeedY;
    } else {
      birdSpeedY = 0;
      stop();
    }

    if (birdCurrentAction === "mid") {
      drawBird(birdY, imgRedBirdMid);
      if (birdCurrentCount >= 0 && birdCurrentCount < 10) {
        birdCurrentAction = "down";
      }
    } else if (birdCurrentAction === "down") {
      drawBird(birdY, imgRedBirdDown);
      if (birdCurrentCount >= 10 && birdCurrentCount < 20) {
        birdCurrentAction = "up";
      }
    } else if (birdCurrentAction === "up") {
      drawBird(birdY, imgRedBirdUp);
      if (birdCurrentCount >= 20 && birdCurrentCount < 30) {
        birdCurrentAction = "mid";
        birdCurrentCount = 0;
      }
    }
    birdCurrentCount++;
  };

  const drawPoint = async () => {
    const p = {
      ctx: ctx,
      y: 50
    };
    const arrNumber = point.toString().split("");
    if (point < 10) {
      component({
        ...p,
        img: await findImageByName(imgs, arrNumber[0]),
        centerHorizontal: true,
        sizeHorizontal: width
      });
    } else if (point < 100) {
      component({
        ...p,
        img: await findImageByName(imgs, arrNumber[0]),
        x: width / 2 - 24
      });
      component({
        ...p,
        img: await findImageByName(imgs, arrNumber[1]),
        x: width / 2
      });
    }
  };

  const run = () => {
    isStart = true;
    reset();

    interval = setInterval(() => {
      updateBg();
      updatePipe();
      drawPoint();
      updateBase();
      updateBird();
    }, 20);
  };

  const onClick = e => {
    if (isStart) {
      audWing.play();
      birdSpeedY = -6;
    } else {
      run();
    }
  };

  const init = () => {
    drawBg(0);
    drawBtnPlay();
  };

  const start = () => {
    // create canvas tag
    const canvas = document.createElement("canvas");
    canvas.width = width;
    canvas.height = height;
    document.body.appendChild(canvas);

    // get context from canvas tag
    ctx = canvas.getContext("2d");

    // init
    init();

    // add event click for canvas tag
    canvas.addEventListener("click", e => onClick(e));
  };

  const reset = () => {
    bgX = 0;
    baseX = 0;
    pipeX = width;
    pipeY = randomPipe();
    birdY = 292;
    birdSpeedY = 0;
    birdAcceleration = 0.2;
    birdCurrentCount = 0;
    birdCurrentAction = "down";
    point = 0;
  };

  const stop = () => {
    audHit.play();
    audDie.play();
    isStart = false;
    drawBtnPlay();
    drawGameOver();
    clearInterval(interval);
    interval = null;
  };

  start();
};
