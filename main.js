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

function typeEffect(text, elementID, speed){
  let i = 0 
  let element = document.getElementById(elementID);
  element.innerHTML = "";
  function effect(){
      if (i < text.length){
          element.innerHTML += text.charAt(i);
          i++;
          setTimeout(effect, speed);
      }
  }
  effect();
}




let nst = document.getElementById("nst");
let opletter = document.getElementById('hello');
opletter.addEventListener("click", function() {
  let letterContent = document.getElementById("letter_content");
  let backLetter = document.getElementById("next_letter");
  letterContent.style.display = "none";
  backLetter.style.display = "block";
  nst.style.display = "block";

  typeEffect("koi apse pyar kyu karega", "next_letter", 100);


});


let press = 0;
let con = false;
let yesno = document.getElementById("yesno")

nst.addEventListener("click", function(){
  let backLetter = document.getElementById("next_letter");
  backLetter.style.display = "none";
  let nextbackletter = document.getElementById("pressnext");
  nextbackletter.style.display = "block";
  
  if (press === 0) {
    typeEffect("hmmmm batao na", "pressnext", 50);
    press++;
  } else if (press === 1) {
    typeEffect("soja", "pressnext", 50);
    document.getElementById('img').src = 'cute.gif';
    press++;
  } else if (press === 2) {
    yesno.style.display = "block";
    setTimeout(() => {
      nst.remove();
    }, 100);
  }
  

  
});

let yes = document.getElementById("yes");
let no = document.getElementById("no");
yes.addEventListener("click", function() {
  let ls = document.getElementById("pressnext");
  ls.style.display = "none";
  
  let ly = document.getElementById("thanktext");
  ly.style.display = "block";
  typeEffect("Thank you", "thanktext", 50);
})

let isRight = false

function swapButtons() {
  if (isRight) {
      no.style.order = "1";
      yes.style.order = "0";
  } else {
      no.style.order = "0";
      yes.style.order = "1";
  }
  isRight = !isRight;
}
let i = 0

no.addEventListener("click", function() {
  let ls = document.getElementById("pressnext");
  ls.style.display = "none";
  
  let ly = document.getElementById("thanktext");
  ly.style.display = "block";
  let text = "";
  if (i == 0){
    text = "gdhjgdhdsgdjehedfd";
    document.getElementById('img').src = 'cats-miskey-the-peacemaker.gif';
  } else if (i == 1){
    text = "hjsghdgdgdugdf";
  } else if (i == 2){
    text = "hdkhgdsjfhdjhfdhdkchdkcnjd";
  } else if (i == 3){
    text = "dhcdsjkhcsduhdeiuhcdcds";
    document.getElementById('img').src = 'peachcat-cat.gif';
  } else if (i == 4){
    text = "hgefjdkfgdsjkbcdcdscd";
   
  } else if (i == 5){ 
    text = "sgdhdsjhdjghdgdscxdcd";
    document.getElementById('img').src = 'airallia-cat-chan.gif';
    no.addEventListener("click", swapButtons);
    no.addEventListener("mouseenter", swapButtons,)
  }

  typeEffect(text, "thanktext", 50);
  i++;
})




document.getElementById("yes").addEventListener("click", function() {
  fetch("https://flask-vul3.onrender.com", {  
      method: "POST",
      headers: {
          "Content-Type": "application/json"
      },
      body: JSON.stringify({ message: "User pressed YES!" })
  })
  .then(response => response.json())  
  .then(data => {
      console.log("Flask Response:", data);  
      document.getElementById("thanktext").innerText = "Flask Response: " + data.message;
  })
  .catch(error => console.error("Error:", error));
});


