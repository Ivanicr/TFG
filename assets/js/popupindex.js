function openPopup() {
    var info = document.getElementById("info");
    var infoContent = document.getElementById("info__bg");
    info.style.display = "block";
    infoContent.style.display = "block";
}

function closePopup() {
  document.getElementById("info").style.display = "none"
  document.getElementById("info__bg").style.display = "none";
}