console.log("welcome to spotify");
//initialize the variable
let songindex = 0;
let audioElement = new Audio("songs/3.mp3");
let masterplay = document.getElementById("masterplay");
let myprogressbar = document.getElementById("myprogressbar");
let gif = document.getElementById("gif");
let songitems = Array.from(document.getElementsByClassName("songitem"));

let mastersongname = document.getElementById("mastersongname");
let songs = [
  {
    songName: "LEO-Badass",
    filePath: "songs/1.mp3",
    coverPath: "cover/1.png",
  },
  {
    songName: "Master - Vaathi Coming",
    filePath: "songs/2.mp3",
    coverPath: "cover/2.png",
  },
  {
    songName: "Mersal - Aalaporan Thamizhan",
    filePath: "songs/3.mp3",
    coverPath: "cover/3.png",
  },
  {
    songName: "Mersal - Neethanae",
    filePath: "songs/4.mp3",
    coverPath: "cover/4.png",
  },
  {
    songName: "Priyamaanavale - Enakkoru Snehidhi",
    filePath: "songs/5.mp3",
    coverPath: "cover/5.png",
  },
  {
    songName: "Priyamaanavale - Ennavo Ennavo",
    filePath: "songs/6.mp3",
    coverPath: "cover/6.png",
  },
  {
    songName: "Sarkar - CEO In The House",
    filePath: "songs/7.mp3",
    coverPath: "cover/7.png",
  },
  {
    songName: "Sarkar - Simtaangaran",
    filePath: "songs/8.mp3",
    coverPath: "cover/8.png",
  },
  {
    songName: "Thalaivaa - Vaanganna Vanakkanganna",
    filePath: "songs/9.mp3",
    coverPath: "cover/9.png",
  },
  {
    songName: "Bigil - Verithanam",
    filePath: "songs/10.mp3",
    coverPath: "cover/10.png",
  },
];

songitems.forEach((element, i) => {
  element.getElementsByTagName("img")[0].src = songs[i].coverPath;
  element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
});

// audioElement.play();
//handle play/pause click
masterplay.addEventListener("click", () => {
  if (audioElement.paused || audioElement.currentTime <= 0) {
    audioElement.play();
    masterplay.classList.remove("fa-circle-play");
    masterplay.classList.add("fa-circle-pause");
    gif.style.opacity = 1;
  } else {
    audioElement.pause();
    masterplay.classList.remove("fa-circle-pause");
    masterplay.classList.add("fa-circle-play");
    gif.style.opacity = 0;
  }
});

//listen to events
audioElement.addEventListener("timeupdate", () => {
  console.log("timeupdate");
  //update seekbar
  progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
  myprogressbar.value = progress;
});

myprogressbar.addEventListener("change", () => {
  audioElement.currentTime =
    (myprogressbar.value * audioElement.duration) / 100;
});

songitems.forEach((element, i) => {
  element.getElementsByTagName("img")[0].src = songs[i].filePath;
});

const makeallplays = () => {
  Array.from(document.getElementsByClassName("songitemplay")).forEach(
    (element) => {
      element.classList.remove("fa-circle-pause");
      element.classList.add("fa-circle-play");
    }
  );
};

Array.from(document.getElementsByClassName("songitemplay")).forEach(
  (element) => {
    element.addEventListener("click", (e) => {
      makeallplays();
      songindex = parseInt(e.target.id);
      e.target.classList.remove("fa-circle-play");
      e.target.classList.add("fa-circle-pause");
      audioElement.src = `songs/${songindex + 1}.mp3`;
      audioElement.currentTime = 0;
      mastersongname.innerText = songs[songindex].songName;
      audioElement.play();
      masterplay.classList.remove("fa-circle-play");
      masterplay.classList.add("fa-circle-pause");
    });
  }
);

document.getElementById("next").addEventListener("click", () => {
  if (songindex >= 9) {
    songindex = 0;
  } else {
    songindex += 1;
  }
  audioElement.src = `${songindex}.mp3`;
  audioElement.currentTime = 0;
  mastersongname.innerText = songs[songindex].songName;
  audioElement.play();
  masterplay.classList.remove("fa-circle-play");
  masterplay.classList.add("fa-circle-pause");
});

document.getElementById("previous").addEventListener("click", () => {
  if (songindex <= 0) {
    songindex = 0;
  } else {
    songindex -= 1;
  }
  audioElement.src = `${songindex + 1}.mp3`;
  audioElement.currentTime = 0;
  mastersongname.innerText = songs[songindex].songName;
  audioElement.play();
  masterplay.classList.remove("fa-circle-play");
  masterplay.classList.add("fa-circle-pause");
});
