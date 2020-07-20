const numberOfWhiteKeys = document.querySelectorAll(".no-sharp").length;
const numberOfBlackKeys = document.querySelectorAll(".sharp").length;

for (let i = 0; i < numberOfWhiteKeys; i++) {
  document
    .querySelectorAll(".no-sharp")
    [i].addEventListener("click", function () {
      const whiteKeyClass = this.classList[2];
      playSoundWhiteKey(whiteKeyClass);
      keyAnimation(this.classList[2]);
    });
}

for (let z = 0; z < numberOfBlackKeys; z++) {
  document.querySelectorAll(".sharp")[z].addEventListener("click", function () {
    const blackKeyClass = this.classList[2];
    playSoundBlackKey(blackKeyClass);
    keyAnimation(this.classList[2]);
  });
}

function keyAnimation(button) {
  document.querySelector("." + button).classList.add("clicked");
  setTimeout(() => {
    document.querySelector("." + button).classList.remove("clicked");
  }, 65);
}

function playSoundBlackKey(blackKeyMatch) {
  switch (blackKeyMatch) {
    case "c-sharp":
      cSharp();
      break;
    case "d-sharp":
      dSharp();
      break;
    case "f-sharp":
      fSharp();
      break;
    case "g-sharp":
      gSharp();
      break;
    case "a-sharp":
      aSharp();
      break;
    case "high-c-sharp":
      highCSharp();
      break;
    case "high-d-sharp":
      highDSharp();
      break;
    default:
      console.log("There was an error");
  }
}

function cSharp() {
  const lowCSharpSound = new Audio("./sound/piano-c-sharp.mp3");
  lowCSharpSound.play();
}

function dSharp() {
  const lowDSharpSound = new Audio("./sound/piano-d-sharp.mp3");
  lowDSharpSound.play();
}

function fSharp() {
  const lowFSharpSound = new Audio("./sound/piano-f-sharp.mp3");
  lowFSharpSound.play();
}

function gSharp() {
  const lowGSharpSound = new Audio("./sound/piano-g-sharp.mp3");
  lowGSharpSound.play();
}

function aSharp() {
  const lowASharpSound = new Audio("./sound/piano-a-sharp.mp3");
  lowASharpSound.play();
}

function highCSharp() {
  const highCSharpSound = new Audio("./sound/piano-high-c-sharp.mp3");
  highCSharpSound.play();
}

function highDSharp() {
  const highDSharpSound = new Audio("./sound/piano-high-d-sharp.mp3");
  highDSharpSound.play();
}

function playSoundWhiteKey(whiteKeyMatch) {
  switch (whiteKeyMatch) {
    case "c":
      lowCSound();
      keyAnimation("c");
      break;
    case "d":
      lowDSound();
      keyAnimation("d");
      break;
    case "e":
      lowESound();
      keyAnimation("e");
      break;
    case "f":
      lowFSound();

      keyAnimation("f");
      break;
    case "g":
      lowGSound();
      keyAnimation("g");
      break;
    case "a":
      lowASound();
      keyAnimation("a");
      break;
    case "b":
      lowBSound();
      keyAnimation("b");
      break;
    case "high-c":
      highCSound();
      break;
    case "high-d":
      highDSound();
      break;
    case "high-e":
      highESound();
      break;
    default:
      console.log("There was an error");
  }
}

function lowCSound() {
  const lowCSound = new Audio("./sound/piano-c.mp3");
  lowCSound.play();
}

function lowDSound() {
  const lowDSound = new Audio("./sound/piano-d.mp3");
  lowDSound.play();
}

function lowESound() {
  const lowESound = new Audio("./sound/piano-e.mp3");
  lowESound.play();
}

function lowFSound() {
  const lowFSound = new Audio("./sound/piano-f.mp3");
  lowFSound.play();
}

function lowGSound() {
  const lowGSound = new Audio("./sound/piano-g.mp3");
  lowGSound.play();
}

function lowASound() {
  const lowASound = new Audio("./sound/piano-a.mp3");
  lowASound.play();
}

function lowBSound() {
  const lowBSound = new Audio("./sound/piano-b.mp3");
  lowBSound.play();
}

function highCSound() {
  const highCSound = new Audio("./sound/piano-high-c.mp3");
  highCSound.play();
}

function highDSound() {
  const highDSound = new Audio("./sound/piano-high-d.mp3");
  highDSound.play();
}

function highESound() {
  const highESound = new Audio("./sound/piano-high-e.mp3");
  highESound.play();
}

// ? Twinkle Twinkle Little Star //

document
  .querySelector(".ttls-generator")
  .addEventListener("click", function () {
    lowCSound();
    keyAnimation("c");
    setTimeout(() => {
      lowCSound();
      keyAnimation("c");
    }, 350);
    setTimeout(() => {
      lowGSound();
      keyAnimation("g");
    }, 700);
    setTimeout(() => {
      lowGSound();
      keyAnimation("g");
    }, 1050);
    setTimeout(() => {
      lowASound();
      keyAnimation("a");
    }, 1400);
    setTimeout(() => {
      lowASound();
      keyAnimation("a");
    }, 1750);

    setTimeout(() => {
      lowGSound();
      keyAnimation("g");
    }, 2100);
    setTimeout(() => {
      lowFSound();

      keyAnimation("f");
    }, 2550);
    setTimeout(() => {
      lowFSound();

      keyAnimation("f");
    }, 2900);
    setTimeout(() => {
      lowESound();
      keyAnimation("e");
    }, 3250);
    setTimeout(() => {
      lowESound();
      keyAnimation("e");
    }, 3600);
    setTimeout(() => {
      lowDSound();
      keyAnimation("d");
    }, 3950);
    setTimeout(() => {
      lowDSound();
      keyAnimation("d");
    }, 4300);
    setTimeout(() => {
      lowCSound();
      keyAnimation("c");
    }, 4650);

    setTimeout(() => {
      lowGSound();
      keyAnimation("g");
    }, 5100);
    setTimeout(() => {
      lowGSound();
      keyAnimation("g");
    }, 5550);
    setTimeout(() => {
      lowFSound();

      keyAnimation("f");
    }, 5900);
    setTimeout(() => {
      lowFSound();

      keyAnimation("f");
    }, 6250);
    setTimeout(() => {
      lowESound();
      keyAnimation("e");
    }, 6600);
    setTimeout(() => {
      lowESound();
      keyAnimation("e");
    }, 6950);
    setTimeout(() => {
      lowDSound();
      keyAnimation("d");
    }, 7300);

    setTimeout(() => {
      lowGSound();
      keyAnimation("g");
    }, 7750);
    setTimeout(() => {
      lowGSound();
      keyAnimation("g");
    }, 8100);
    setTimeout(() => {
      lowFSound();

      keyAnimation("f");
    }, 8450);
    setTimeout(() => {
      lowFSound();

      keyAnimation("f");
    }, 8800);
    setTimeout(() => {
      lowESound();
      keyAnimation("e");
    }, 9150);
    setTimeout(() => {
      lowESound();
      keyAnimation("e");
    }, 9500);
    setTimeout(() => {
      lowDSound();
      keyAnimation("d");
    }, 9850);

    setTimeout(() => {
      lowCSound();
      keyAnimation("c");
    }, 10300);
    setTimeout(() => {
      lowCSound();
      keyAnimation("c");
    }, 10650);
    setTimeout(() => {
      lowGSound();
      keyAnimation("g");
    }, 11000);
    setTimeout(() => {
      lowGSound();
      keyAnimation("g");
    }, 11350);
    setTimeout(() => {
      lowASound();
      keyAnimation("a");
    }, 11700);
    setTimeout(() => {
      lowASound();
      keyAnimation("a");
    }, 12050);
    setTimeout(() => {
      lowGSound();
      keyAnimation("g");
    }, 12400);
    setTimeout(() => {
      lowFSound();

      keyAnimation("f");
    }, 12850);
    setTimeout(() => {
      lowFSound();

      keyAnimation("f");
    }, 13100);
    setTimeout(() => {
      lowESound();
      keyAnimation("e");
    }, 13450);
    setTimeout(() => {
      lowESound();
      keyAnimation("e");
    }, 13800);
    setTimeout(() => {
      lowDSound();
      keyAnimation("d");
    }, 14150);
    setTimeout(() => {
      lowDSound();
      keyAnimation("d");
    }, 14500);
    setTimeout(() => {
      lowCSound();
      keyAnimation("c");
    }, 14850);
  });

// ? Happy Birthday //

document
  .querySelector(".happy-bday-generator")
  .addEventListener("click", function () {
    setTimeout(() => {
      lowDSound();
      keyAnimation("d");
    }, 250);
    setTimeout(() => {
      lowDSound();
      keyAnimation("d");
    }, 500);
    setTimeout(() => {
      lowESound();
      keyAnimation("e");
    }, 850);
    setTimeout(() => {
      lowDSound();
      keyAnimation("d");
    }, 1100);
    setTimeout(() => {
      lowGSound();
      keyAnimation("g");
    }, 1350);
    setTimeout(() => {
      fSharp();
      keyAnimation("f-sharp");
    }, 1700);
    setTimeout(() => {
      lowDSound();
      keyAnimation("d");
    }, 2150);
    setTimeout(() => {
      lowDSound();
      keyAnimation("d");
    }, 2350);
    setTimeout(() => {
      lowESound();
      keyAnimation("e");
    }, 2700);
    setTimeout(() => {
      lowDSound();
      keyAnimation("d");
    }, 3050);
    setTimeout(() => {
      lowASound();
      keyAnimation("a");
    }, 3400);
    setTimeout(() => {
      lowGSound();
      keyAnimation("g");
    }, 3750);
    setTimeout(() => {
      lowDSound();
      keyAnimation("d");
    }, 4200);
    setTimeout(() => {
      lowDSound();
      keyAnimation("d");
    }, 4450);
    setTimeout(() => {
      highDSound();
    }, 4800);
    setTimeout(() => {
      lowBSound();
      keyAnimation("b");
    }, 5150);
    setTimeout(() => {
      lowGSound();
      keyAnimation("g");
    }, 5500);
    setTimeout(() => {
      fSharp();
      keyAnimation("f-sharp");
    }, 5850);
    setTimeout(() => {
      lowESound();
      keyAnimation("e");
    }, 6200);
    setTimeout(() => {
      highCSound();
    }, 6650);
    setTimeout(() => {
      highCSound();
    }, 6850);
    setTimeout(() => {
      lowBSound();
      keyAnimation("b");
    }, 7200);
    setTimeout(() => {
      lowGSound();
      keyAnimation("g");
    }, 7550);
    setTimeout(() => {
      lowASound();
      keyAnimation("a");
    }, 7900);
    setTimeout(() => {
      lowGSound();
      keyAnimation("g");
    }, 8250);
  });
