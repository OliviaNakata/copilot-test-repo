gsap.registerPlugin(ScrollTrigger);

/*gsap.to(".c", {
  scrollTrigger: {
    trigger: ".c",
    start: "top center",
    end:"top 100px",
    scrub:true,
    durartion: 1,
    pin: true,
    markers: true, 
},
  x: 500,
  rotation: 360,
  duration: 3
});*/

gsap.defaults({ease: "none", duration: 2});

const tl = gsap.timeline();
tl.from("#sns", {yPercent: 100});

ScrollTrigger.create({
    animation: tl,
    trigger:".main",
    start:"bottom bottom",
    pin: true,
    scrub: true,
    pinSpacing: false
});



