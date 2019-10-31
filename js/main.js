var transition = false;

function setTransition() {
  
  if(transition == false ) {
    var iconSearch = document.getElementById("search-icon");
    var formChange = document.getElementById("search-bar-li"); 
    iconSearch.style.color = "#707070";
    formChange.style.width = "19%";
    transition = true;
    }
  else {
    var iconSearch = document.getElementById("search-icon");
    var formChange = document.getElementById("search-bar-li");
    iconSearch.style.color = "#fff";
    formChange.style.width = "15.5%";
    transition = false;
  }
  
}

