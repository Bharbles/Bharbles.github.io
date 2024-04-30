const darkModeToggle = document.getElementById("darkbutton");
const body = document.body;
darkModeToggle.addEventListener("click", function() {
  body.classList.toggle("dark-mode");
  // Optionally store user preference in localStorage
  localStorage.setItem("darkMode", body.classList.contains("dark-mode"));
});

function menuClick(var1){
  
  document.getElementsByClassName('show')[0].className="hide";
  document.getElementById(var1).className="show";
}

