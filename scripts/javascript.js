var buttons = document.querySelectorAll("a");

for (var i = 0; i < buttons.length; i++) {
  
  buttons[i].addEventListener("click", function(event) {
    
    event.preventDefault();
    
    var section = document.querySelector(this.getAttribute("href"));
    
    window.scroll({
      top: section.offsetTop, 
      left: 0, 
      behavior: 'smooth'
    });
    
  });
}

