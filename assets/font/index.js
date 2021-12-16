// navigation for Responsive display
function editNav() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }
// close modal form 
function closeModal() {
    modalbg.style.display = "none";
  }  