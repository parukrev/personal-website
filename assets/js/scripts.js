const navbarList = document.getElementById("navbarList");

navbarList.style.top = "-300px";

function toggleMenu() {
  if (navbarList.style.top == "-300px") {
    navbarList.style.top = "80px";
  } else {
    navbarList.style.top = "-300px";
  }
}