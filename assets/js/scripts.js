const navbarList = document.getElementById("navbarList");

function toggleMenu() {
  if (navbarList.style.top == "-300px") {
    navbarList.style.top = "80px";
  } else {
    navbarList.style.top = "-300px";
  }
}