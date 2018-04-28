document.addEventListener("DOMContentLoaded", function(event) {
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
  document.getElementById("stage-3-1-unit-1").addEventListener("click", function(){
    document.getElementById("stage-3-1").classList.add("disable");
    document.getElementById("stage-4-1").classList.remove("disable");
  });
  document.getElementById("stage-3-1-unit-2").addEventListener("click", function(){
    document.getElementById("stage-3-1").classList.add("disable");
    document.getElementById("stage-4-2").classList.remove("disable");
  });
  document.getElementById("stage-3-1-unit-3").addEventListener("click", function(){
    document.getElementById("stage-3-1").classList.add("disable");
    document.getElementById("stage-4-3").classList.remove("disable");
  });
  document.getElementById("stage-3-1-unit-4").addEventListener("click", function(){
    document.getElementById("stage-3-1").classList.add("disable");
    document.getElementById("stage-4-4").classList.remove("disable");
  });
  document.getElementById("stage-3-1-unit-5").addEventListener("click", function(){
    document.getElementById("stage-3-1").classList.add("disable");
    document.getElementById("stage-4-5").classList.remove("disable");
  });
  document.getElementById("stage-3-3-unit-1").addEventListener("click", function(){
    document.getElementById("stage-3-3").classList.add("disable");
    document.getElementById("stage-4-5").classList.remove("disable");
  });
  document.getElementById("stage-3-2-unit-1").addEventListener("click", function(){
    document.getElementById("stage-3-2").classList.add("disable");
    document.getElementById("stage-4-6").classList.remove("disable");
  });
  document.getElementById("stage-3-3-unit-2").addEventListener("click", function(){
    document.getElementById("stage-3-3").classList.add("disable");
    document.getElementById("stage-4-7").classList.remove("disable");
  });
  document.getElementById("stage-4-2-unit-1").addEventListener("click", function(){
    document.getElementById("stage-4-2").classList.add("disable");
    document.getElementById("stage-5-1").classList.remove("disable");
  });
  document.getElementById("stage-4-3-unit-1").addEventListener("click", function(){
    document.getElementById("stage-4-3").classList.add("disable");
    document.getElementById("stage-5-2").classList.remove("disable");
  });
  document.getElementById("stage-4-4-unit-1").addEventListener("click", function(){
    document.getElementById("stage-4-4").classList.add("disable");
    document.getElementById("stage-5-3").classList.remove("disable");
  });
  document.getElementById("stage-4-5-unit-1").addEventListener("click", function(){
    document.getElementById("stage-4-5").classList.add("disable");
    document.getElementById("stage-5-4").classList.remove("disable");
  });
  
  
  
  
  
  
  ///////////////////////////////////////////////////////////////////////////
  document.getElementById("info").addEventListener("click", function(){
    document.getElementById("modal").classList.add("modal-active");
  });
  document.getElementById("modalClose").addEventListener("click", function(){
    document.getElementById("modal").classList.remove("modal-active");
  });
  
  
  
});