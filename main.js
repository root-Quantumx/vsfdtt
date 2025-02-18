let flap = document.getElementById('flap');
flap.addEventListener("click", function (){
  flap.classList.toggle('open');
});
flap.addEventListener("click", function (){
  document.getElementById('showbutton').style.display = "block";
})

let showbutton = document.getElementById('showbutton');
showbutton.addEventListener("click", function (){
  document.getElementById("letter").classList.add("moveletter")
  showbutton.style.display = "none";
  
})

let opletter = document.getElementById('opLetter');
opletter.addEventListener("click", function() {
  let letterContent = document.getElementById("letter_content");
  let backLetter = document.getElementById("next_letter");
  letterContent.style.display = "none";
  backLetter.style.display = "block";

});

