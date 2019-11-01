var transition = false;

//All right

function animateSearch() {
  var iconSearch = document.getElementById("search-icon");
  var formChange = document.getElementById("search-bar-li"); 
  var inputBox = document.getElementById("form-nav-header");
  if(transition == false) {
    iconSearch.style.color = "#707070";
    formChange.style.width = "25%";
    inputBox.style.background = "rgba(255,255,255,1)"
    transition = true;
  }
  else {
    iconSearch.style.color = "#fff";
    formChange.style.width = "15.5%";
    inputBox.style.background = "rgba(255,255,255,0)"
    transition = false;
   
  }
}


