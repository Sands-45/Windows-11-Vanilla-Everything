function MoveDiv() {
  var fragment = document.createDocumentFragment();
  fragment.appendChild(document.getElementById("source"));
  document.getElementById("destination").appendChild(fragment);
}


const openApp = btn.parentNode.parentNode.parentNode;
openApp.style.width = "33%";
openApp.style.transition = ".5s";
openApp.style.height = "100%";
desktopWindow.appendChild(mainBody.removeChild(openApp));