window.onload = function() {
  playIntro();
};

function playIntro() {
  const text = document.getElementById("introText");
  const intro = document.getElementById("introScreen");

  let letters = "HERFLIX";
  let index = 0;

  let interval = setInterval(() => {
    text.style.opacity = 1;
text.style.transform = "scale(1.1) perspective(500px) rotateX(10deg)";

    text.innerText = letters.slice(0, index + 1);
    index++;

    if (index === letters.length) {
      clearInterval(interval);
text.style.transform = "scale(1) perspective(500px) rotateX(10deg)";


      setTimeout(() => {
        intro.classList.add("flash");

        setTimeout(() => {
          intro.style.opacity = "0";
          intro.style.transition = "opacity 1s ease";

          setTimeout(() => {
document.getElementById("introSound").play();

            intro.style.display = "none";
          }, 1000);

        }, 300);

      }, 800);
    }

  }, 150);
}

function enterSite() {
  const profile = document.getElementById("profileScreen");
  const app = document.querySelector(".app");
  const introSound = document.getElementById("introSound");

  // Play Netflix sound
  introSound.currentTime = 0;
  introSound.play();

  profile.style.transition = "opacity 0.8s ease";
  profile.style.opacity = "0";

  setTimeout(() => {
    profile.style.display = "none";
    app.classList.remove("hidden");
  }, 800);
}

function playMusic() {
  document.getElementById("bgMusic").play();
}

function openModal(title) {
  document.getElementById("modalTitle").innerText = title;
  const modal = document.getElementById("modal");
  const progressBar = document.getElementById("progressBar");
  const nextEpisode = document.getElementById("nextEpisode");
  const countdown = document.getElementById("countdown");

  modal.classList.remove("hidden");
  modal.style.display = "flex";

  progressBar.style.animation = "none";
  progressBar.offsetHeight;
  progressBar.style.animation = "load 4s linear forwards";

  nextEpisode.style.display = "none";

  setTimeout(() => {
    nextEpisode.style.display = "block";
    let count = 5;
    countdown.innerText = count;

    const timer = setInterval(() => {
      count--;
      countdown.innerText = count;

      if (count <= 0) {
        clearInterval(timer);
        closeModal();
      }
    }, 1000);

  }, 4000);
}

function closeModal() {
  const modal = document.getElementById("modal");
  modal.classList.add("hidden");
  modal.style.display = "none";
}

document.getElementById("searchBox").addEventListener("keyup", function(e) {
  let value = e.target.value.toLowerCase();

  if (value === "valentine") {
    showSurprise();
    return;
  }

  else if (value === "cute") {
    openModal("Search Result: Extremely Cute Human Detected 💖");
  }

  else if (value === "chaos") {
    openModal("Search Result: Certified Chaos Queen 😈");
  }

  else if (value === "main character") {
    openModal("Search Result: Lead Actress Energy Activated ✨");
  }
});


function showSurprise() {
  const modal = document.getElementById("modal");
  const modalTitle = document.getElementById("modalTitle");

  modal.classList.remove("hidden");
  modal.style.display = "flex";
  modalTitle.innerText = "Happy Valentine's Day 💖\nYou deserve your own streaming platform.";

  createConfetti();
}

function createConfetti() {
  for (let i = 0; i < 100; i++) {
    let confetti = document.createElement("div");
    confetti.style.position = "fixed";
    confetti.style.width = "8px";
    confetti.style.height = "8px";
    confetti.style.background = ["#e50914","#ff69b4","#ffffff"][Math.floor(Math.random()*3)];
    confetti.style.left = Math.random() * window.innerWidth + "px";
    confetti.style.top = "-10px";
    confetti.style.opacity = "0.8";
    confetti.style.borderRadius = "50%";
    confetti.style.zIndex = "9999";

    document.body.appendChild(confetti);

    let fall = setInterval(() => {
      confetti.style.top = parseInt(confetti.style.top) + 5 + "px";
      if (parseInt(confetti.style.top) > window.innerHeight) {
        clearInterval(fall);
        confetti.remove();
      }
    }, 20);
  }
}

    

