document.addEventListener("DOMContentLoaded", function(event) {
  
//  document.getElementById("reset").addEventListener("click", function(){
//    document.getElementById("stage-1").classList.remove("disable");
//    document.getElementById("main").nextSibling.classList.add("disable");
//  });
  
 // console.log(document.getElementById("stage-1").nextElementSiblings);
  
  document.getElementById("stage-1-unit-1").addEventListener("click", function(){
    document.getElementById("stage-1").classList.add("disable");
    document.getElementById("stage-2-1").classList.remove("disable");
  });
  document.getElementById("stage-1-unit-2").addEventListener("click", function(){
    document.getElementById("stage-1").classList.add("disable");
    document.getElementById("stage-2-2").classList.remove("disable");
  });
  document.getElementById("stage-2-1-unit-1").addEventListener("click", function(){
    document.getElementById("stage-2-1").classList.add("disable");
    document.getElementById("stage-3-1").classList.remove("disable");
  });
  document.getElementById("stage-2-2-unit-1").addEventListener("click", function(){
    document.getElementById("stage-2-2").classList.add("disable");
    document.getElementById("stage-3-2").classList.remove("disable");
  });
  document.getElementById("stage-2-2-unit-2").addEventListener("click", function(){
    document.getElementById("stage-2-2").classList.add("disable");
    document.getElementById("stage-3-2").classList.remove("disable");
  });
  document.getElementById("stage-2-2-unit-3").addEventListener("click", function(){
    document.getElementById("stage-2-2").classList.add("disable");
    document.getElementById("stage-3-3").classList.remove("disable");
  });
  document.getElementById("stage-2-2-unit-4").addEventListener("click", function(){
    document.getElementById("stage-2-2").classList.add("disable");
    document.getElementById("stage-3-4").classList.remove("disable");
  });
  function modalMoveTop() {
    var elem = document.getElementById("modal"); 
    var pos = -100;
    var id = setInterval(frame, 5);
    function frame() {
        if (pos == 0) {
            clearInterval(id);
        } else {
            pos++; 
            elem.style.bottom = pos + '%'; 
        }
    }
  }
  function modalMoveDown() {
    var elem = document.getElementById("modal"); 
    var pos = 0;
    var id = setInterval(frame, 5);
    function frame() {
        if (pos == 100) {
            clearInterval(id);
        } else {
            pos++; 
            elem.style.bottom = pos + '%'; 
        }
    }
  }
  var infoBtn = document.getElementById("info"),
      closeBtn = document.getElementById("modalClose");
  infoBtn.onclick = modalMoveTop;
  closeBtn.onclick = modalMoveDown;
  
  
  
});