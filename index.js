//==========TaskBar===========
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
  console.log("Hi");
});

//Toggle Menu===============================
const windowsBtn = document.getElementById("windowsBtn");
const menu = document.getElementById("menu");
const user = document.getElementById("user");
windowsBtn.addEventListener("click", () => {
  menu.classList.toggle("menu");
  user.classList.toggle("user");
});

//Mark Active===============
const startMenuBtn = document.getElementsByClassName("startMenu-Btn");
Array.prototype.forEach.call(startMenuBtn, (btn) => {
  btn.addEventListener("click", () => {
    btn.classList.toggle("activeApp");
  });
});

//Pin Active App to Taskbar
const taskBar = document.getElementById("startMenu");
const apps = document.getElementsByClassName("apps");
Array.prototype.forEach.call(apps, (item) => {
  item.addEventListener("click", () => {
    let srC = item.classList[0];
    const app = document.createElement("button");
    app.classList.add(srC);
    const icon = document.createElement("img");
    icon.src = srC;
    app.appendChild(icon);
    app.classList.add("startMenu-Btn", "activeApp");
    taskBar.prepend(app);
  });
});

//Close App ==========================
function closeApp(app,activeIcon) {
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

//Open App ==========================
function openApp(clickedBtn, app) {
  clickedBtn.addEventListener("click", () => {
    app.classList.remove("closeWindow");
  });
}

//Spotify
const spotifyBtn = document.querySelectorAll("[data-spotify]");
const spotify = document.getElementById("spotify");
Array.prototype.forEach.call(spotifyBtn, (activeIcon) => {
  closeApp(spotify, activeIcon);
});
Array.prototype.forEach.call(spotifyBtn, (clickedBtn) => {
  openApp(clickedBtn, spotify);
});


