//ContextMenu==============
document.body.addEventListener("contextmenu", (e) => {
  e.preventDefault();
  let x = e.clientX + "px";
  let y = e.clientY + "px";
  const contmenu = document.getElementById("contMenu");
  contmenu.style.display = "block";
  contmenu.style.left = x;
  contmenu.style.top = y;
});

document.body.addEventListener("click", (e) => {
  const contmenu = document.getElementById("contMenu");
  if (e.target !== contmenu && !contmenu.contains(e.target)) {
    document.getElementById("contMenu").style.display = "none";
  }
});

//==========TaskBar Time===========
const date = document.getElementById("date");
date.innerHTML = `${
  new Date().getMonth() + 1
}/${new Date().getDate()}/${new Date().getFullYear()}`;

function currentTime() {
  let hours, minutes;
  if (new Date().getHours() < 10) {
    hours = `0${new Date().getHours()}`;
  } else {
    hours = new Date().getHours();
  }
  if (new Date().getMinutes() < 10) {
    minutes = `0${new Date().getHours()}`;
  } else {
    minutes = new Date().getMinutes();
  }
  document.getElementById("time").innerHTML = `${hours}:${minutes}`;
}
currentTime();

//===============Notification Bar===========
const shortcuts = document.getElementsByClassName("shortcurts");
Array.prototype.forEach.call(shortcuts, (shortcut) => {
  shortcut.addEventListener("click", () => {
    shortcut.classList.toggle("activeS");
  });
});

//Toggle notification Bar
const manageNotifications = document.getElementById("manageNotifications");
const notificationToggle = document.getElementById("notificationToggle");
const notificationPanel = document.getElementById("notificationPanel");
notificationToggle.addEventListener("click", () => {
  notificationPanel.classList.toggle("toggleNotification");
  manageNotifications.classList.toggle("manageNotifications");
});

//Collapse Shortcuts
const collapseShortcut = document.getElementById("collapse");
const shortcutsContainer = document.getElementById("shortcutsContainer");
collapseShortcut.addEventListener("click", () => {
  shortcutsContainer.classList.toggle("shortcutsContainer");
});

//Night Light
const nightLight = document.getElementById("nightlight");
const body = document.getElementById("container");
nightLight.addEventListener("click", () => {
  body.classList.toggle("body");
});

//Toggle Menu===============================
const windowsBtn = document.getElementById("windowsBtn");
const menu = document.getElementById("menu");
const user = document.getElementById("user");
windowsBtn.addEventListener("click", () => {
  menu.classList.toggle("menu");
  user.classList.toggle("user");
  windowsBtn.classList.toggle("activeApp");
});

document.body.addEventListener("click", (e) => {
  if (
    e.target !== menu &&
    !menu.contains(e.target) &&
    !windowsBtn.contains(e.target)
  ) {
    menu.classList.remove("menu");
    user.classList.remove("user");
    windowsBtn.classList.remove("activeApp");
  }
});

//Pin Active App to Taskbar
const taskBar = document.getElementById("startMenu");
const apps = document.getElementsByClassName("apps");
Array.prototype.forEach.call(apps, (item) => {
  item.addEventListener("click", () => {
    if (item.classList.contains("pinned") !== true) {
      let srC = item.classList[0];
      const app = document.createElement("button");
      const icon = document.createElement("img");
      icon.src = srC;
      app.appendChild(icon);
      app.classList.add("startMenu-Btn", "activeApp");
      taskBar.prepend(app);
    }
    item.classList.add("pinned");
  });
});

//Close App ==========================
function closeApp(app, activeIcon) {
  const closeBtn = document.getElementsByClassName("closeApp");
  Array.prototype.forEach.call(closeBtn, (btn) => {
    btn.addEventListener("click", () => {
      if (
        btn.parentNode.parentNode.parentNode.id === app.id &&
        app.classList.contains("closeWindow") === false
      ) {
        app.classList.add("closeWindow");
        activeIcon.classList.remove("activeApp");
      }
    });
  });
}

//Minimize App ==========================
function minimizeApp(app) {
  const minimizeBtn = document.getElementsByClassName("minimizeApp");
  Array.prototype.forEach.call(minimizeBtn, (btn) => {
    btn.addEventListener("click", () => {
      if (
        btn.parentNode.parentNode.parentNode.id === app.id &&
        app.classList.contains("minimizeWindow") === false
      ) {
        app.classList.add("minimizeWindow");
      }
    });
  });
}

//Open App ==========================
function openApp(clickedBtn, app) {
  clickedBtn.addEventListener("click", () => {
    app.classList.remove("closeWindow");
    app.classList.remove("minimizeWindow");
    if (clickedBtn.classList.contains("startMenu-Btn") === true) {
      clickedBtn.classList.add("activeApp");
    }
  });
}
//===================================Apps===================================
//Spotify
const spotifyBtn = document.querySelectorAll("[data-spotify]");
const spotify = document.getElementById("spotify");
Array.prototype.forEach.call(spotifyBtn, (activeIcon) => {
  closeApp(spotify, activeIcon);
});
minimizeApp(spotify);
Array.prototype.forEach.call(spotifyBtn, (clickedBtn) => {
  openApp(clickedBtn, spotify);
});
//Like Current Playing
const likeBtn = document.getElementById("likeSong");
const likeAnimate = document.getElementById("likeAnimate");
likeBtn.addEventListener("click", () => {
  let srC = likeBtn.getAttribute("src");
  if (srC === "./svg/heartIcon.svg") {
    likeBtn.src = "./svg/likeIcon.svg";
    likeBtn.style.animation = "none";
    likeAnimate.style.animation = "like 0.5s ease-in";
    likeBtn.style.animationFillMode = "forward";
  } else if (srC === "./svg/likeIcon.svg") {
    likeBtn.src = "./svg/heartIcon.svg";
    likeBtn.style.animation = "dislike 0.3s ease-out";
    likeAnimate.style.animation = "none";
  }
});
