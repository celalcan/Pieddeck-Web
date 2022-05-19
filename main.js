/* Section */

var temelgenislik = document.querySelector(".sticky-wrapper").scrollWidth;
var icgenislik = document.querySelector(".sticky-wrapper").offsetWidth;
console.log(temelgenislik);
console.log(icgenislik);
var baslangic =  document.querySelector(".horizontal-section").offsetTop;

var KaydirmaMesafe =  temelgenislik - icgenislik+baslangic;
console.log(KaydirmaMesafe);


document.querySelector(".horizontal-section").style.height = temelgenislik + "px";


window.onscroll = function(){
 
  var scrollTop = window.pageYOffset;
  console.log(scrollTop);
  if (scrollTop >= baslangic && scrollTop <= KaydirmaMesafe) {
    
    document.querySelector(".element-wrapper").style.transform = "translateX(-"+(scrollTop - baslangic)+"px)";
    
  }
  if(scrollTop<=baslangic) {
    document.querySelector(".element-wrapper").style.transform = "translateX(-"+(0)+"px)";
    
  }

 /* scroll-trigger-product */

if(triggeractive==false)
{
 console.log(triggeractive);
if(scrollTop >3400 & scrollTop <3800 & scrollkontrol==1 ){
 scrollkontrol+=1;
 sctriggervalue=0;
 opacity=0;
 kayma=0;
 kaymaf();
 MyFadeFunction();
}

if(scrollTop >3800 & scrollTop <4200 & scrollkontrol==2 ){
 scrollkontrol+=1;
 sctriggervalue=1;
 console.log("filan");
 opacity=0;
 kayma=0;
 kaymaf();
 MyFadeFunction();

}
if(opacity>1 & scrollkontrol==3 ){
  
  scrollkontrol+=1;
  sctriggervalue=2;
  console.log("filan");
  opacity=0;
  kayma=0;
  kaymaf();
  MyFadeFunction();
 }
}
  
}

/* Section end */


function animateFrom(elem, direction) {
  direction = direction || 1;
  var x = 0,
      y = direction * 100;
  if(elem.classList.contains("gs_reveal_fromLeft")) {
    x = -100;
    y = 0;
  } else if (elem.classList.contains("gs_reveal_fromRight")) {
    x = 100;
    y = 0;
  }
  elem.style.transform = "translate(" + x + "px, " + y + "px)";
  elem.style.opacity = "0";
  gsap.fromTo(elem, {x: x, y: y, autoAlpha: 0}, {
    duration: 1.25, 
    x: 0,
    y: 0, 
    autoAlpha: 1, 
    ease: "expo", 
    overwrite: "auto"
  });
}

function hide(elem) {
  gsap.set(elem, {autoAlpha: 0});
}

document.addEventListener("DOMContentLoaded", function() {
  gsap.registerPlugin(ScrollTrigger);
  
  gsap.utils.toArray(".gs_reveal").forEach(function(elem) {
    hide(elem); // assure that the element is hidden when scrolled into view
    
    ScrollTrigger.create({
      trigger: elem,
      onEnter: function() { animateFrom(elem) }, 
      onEnterBack: function() { animateFrom(elem, -1) },
      onLeave: function() { hide(elem) } // assure that the element is hidden when scrolled into view
    });
  });
});


function before1(){
  document.getElementById("ozellikler_2_marign").style.paddingTop= "0px" ;
  document.getElementById('myImage1')
  .src="./images/çam_button_active.svg";
  document.getElementById('myImage2')
  .src="./images/İroko_button.svg ";
  document.getElementById('myImage3')
  .src="./images/Cam_Karo_deck (1).png";
  document.getElementById('message')
  .innerHTML="Hii! GeeksforGeeks people";
 
}
function before2(){
  document.getElementById('myImage2')
  .src="./images/iroko_button_active.svg ";
  document.getElementById('myImage1')
  .src="./images/Çam_button.svg";
  document.getElementById('myImage3')
  .src="./images/İroko_Karo_deck.png";
  document.getElementById("ozellikler_2_marign").style.paddingTop= "70px" ;
  document.getElementById('message')
  .innerHTML="Hii! GeeksforGeeks people";
}


 /* scroll-trigger-product */


let opacity = 0;
let scrollkontrol=1;
let kayma=0;
let sctrigger=document.querySelectorAll(".trigger");
let sctriggervalue=0;
let triggeractive=false;

console.log(sctrigger);
function MyFadeFunction(/* sctriggervalue */) {
    triggeractive=true;
    if (opacity<1 ) {
       opacity += .1;
       setTimeout(function(){MyFadeFunction()},100);
    }
    else if(opacity>1){
        triggeractive=false;
    }  
        sctrigger[sctriggervalue].style.opacity = opacity;
 }


function kaymaf(){
    kayma+=1;
    if(kayma<100){
    setTimeout(function(){kaymaf()},8);       
     } 
    sctrigger[sctriggervalue].style.transform = "translateY(-"+kayma+"px)";
}