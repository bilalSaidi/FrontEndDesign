check = true;

document.getElementById("toggle_menu").addEventListener("click", function (e) {
  e.preventDefault();
  if (check == true) {
    document.getElementsByClassName("side-nav")[0].style.display = "none";
    document.getElementsByClassName("container")[0].style.gridTemplateColumns =
      "100%";
    check = false;
  } else if (check == false) {
    document.getElementsByClassName("side-nav")[0].style.display = "block";
    query = window.matchMedia("(min-width:920px)").matches;

    if (query) {
      document.getElementsByClassName(
        "container"
      )[0].style.gridTemplateColumns = "10% 90%";
    } else if (query == false) {
      document.getElementsByClassName(
        "container"
      )[0].style.gridTemplateColumns = "20% 80%";
    }

    check = true;
  }
});
