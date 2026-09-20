const slide1 = document.querySelector('.slide-1');
const slide2 = document.querySelector('.slide-2');


function slideToRight() {
    // Slide Nanami out to the left, bring Miji in from the right
    slide1.style.visibility = 'hidden';
    slide2.style.visibility = 'visible';
    
    hideElement('right');
    showElement('left');
}

function slideToLeft() {
    // Bring Nanami back, push Miji back off-screen to the right
    slide1.style.visibility = 'visible';
    slide2.style.visibility = 'hidden';
    
    hideElement('left');
    showElement('right');
}

function hideElement(labelDirection) {
    const button = document.querySelector(`[aria-label="${labelDirection}"]`);
    if (button) {
        button.style.visibility = "hidden";
    }
}

function showElement(labelDirection) {
    const button = document.querySelector(`[aria-label="${labelDirection}"]`);
    if (button) {
        button.style.visibility = "visible";
    }
}

gsap.registerPlugin(ScrollTrigger);

gsap.to(".nanami",{
  scrollTrigger: {
   trigger: "#leaders",
   toggleActions:"restart none none none",
   start: "top 95%"
},
  
  x:0,
  duration: 0.7,
  opacity: 1,
  scale: 1,
  
});
gsap.to(".miji",{
  scrollTrigger: {
   trigger: "#leaders",
   toggleActions:"restart none none none",
   start: "top 99%"
},
  
  x:0,
  duration: 0.7,
  delay: 0.6,
  opacity: 1,
  scale: 1,
  
});