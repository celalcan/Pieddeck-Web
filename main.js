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
  document.getElementById('myImage1')
  .src="/images/çam_button_active.svg";
  document.getElementById('myImage2')
  .src="/images/İroko_button.svg ";
  document.getElementById('message')
  .innerHTML="Hii! GeeksforGeeks people";
}
function before2(){
  document.getElementById('myImage2')
  .src="/images/iroko_button_active.svg ";
  document.getElementById('myImage1')
  .src="/images/Çam_button.svg";
  document.getElementById('message')
  .innerHTML="Hii! GeeksforGeeks people";
}

