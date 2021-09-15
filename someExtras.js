function MoveDiv() {
  var fragment = document.createDocumentFragment();
  fragment.appendChild(document.getElementById("source"));
  document.getElementById("destination").appendChild(fragment);
}
