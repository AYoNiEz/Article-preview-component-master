var targetDiv = document.getElementById("box-share");
var btn = document.getElementById("share");
btn.onclick = function () {
  if (targetDiv.style.display !== "none") {
    targetDiv.style.display = "none";
  } else {
    targetDiv.style.display = "block","active";
  }
  
};