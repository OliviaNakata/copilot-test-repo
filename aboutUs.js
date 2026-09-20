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

let proxy = { skew: 0 },
    skewSetter = gsap.quickSetter(".skewElem", "skewY", "deg"), // fast
    clamp = gsap.utils.clamp(-20, 20); // don't let the skew go beyond 20 degrees. 

ScrollTrigger.create({
  onUpdate: (self) => {
    let skew = clamp(self.getVelocity() / -400);
    // only do something if the skew is MORE severe. Remember, we're always tweening back to 0, so if the user slows their scrolling quickly, it's more natural to just let the tween handle that smoothly rather than jumping to the smaller skew.
    if (Math.abs(skew) > Math.abs(proxy.skew)) {
      proxy.skew = skew;
      gsap.to(proxy, {skew: 0, duration: 0.2, ease: "power3", overwrite: true, onUpdate: () => skewSetter(proxy.skew)});
    }
  }
});

// make the right edge "stick" to the scroll bar. force3D: true improves performance
gsap.set(".skewElem", {transformOrigin: "right center", force3D: true});