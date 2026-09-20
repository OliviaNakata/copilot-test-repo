
const track = document.querySelector('.carousel-track');
const slides = document.querySelectorAll('.carousel-track li');
const container = document.querySelector('#tubular-container');
var currentIndex = 2;         

function slideToLeft(event){

   if(currentIndex > 0){
    currentIndex -= 1;
    updateActiveQATag(currentIndex);
    track.style.transform = `translateX(-${currentIndex * 100}%)`;
   }
   else{
    hideElement('left');
   }
   if(document.querySelector('.sixth[data-qa-qualifier="slider-spot-current-universe"]') != null){
                            document.querySelector(`[aria-label="right"]`).style.visibility = "visible";  
                        } 

}

function slideToRight(event){
    // Call the tag swapper!
    if(currentIndex < 6){
    currentIndex += 1;
    updateActiveQATag(currentIndex);
    track.style.transform = `translateX(-${currentIndex * 100}%)`;
    }
    else{
      hideElement('right');
    } 
    if(document.querySelector('.second[data-qa-qualifier="slider-spot-current-universe"]') != null){
                             document.querySelector(`[aria-label="left"]`).style.visibility = "visible"; 
                        }
    

}


function updateActiveQATag(nextIndex) {
    // 1. Find the image slide currently holding the QA tag and remove it
    const currentActiveSlide = document.querySelector('[data-qa-qualifier="slider-spot-current-universe"]');
    if (currentActiveSlide) {
        currentActiveSlide.removeAttribute('data-qa-qualifier');
    }

    // 2. Slap that same QA tag onto the newly targeted slide item!
    slides[nextIndex].setAttribute('data-qa-qualifier', 'slider-spot-current-universe');
}


   function hideElement(labelDirection) {
    // 🌟 This builds the selector string like: [aria-label="left"]
    const button = document.querySelector(`[aria-label="${labelDirection}"]`);
    
    if (button) {
        button.style.visibility = "hidden";
    }
}

    function showElement(labelDirection){
    const button = document.querySelector(`[aria-label="${labelDirection}"]`);
        if (button){
            button.style.visibility = "visible";
        }
    }
function fullmode(){
    const title = document.querySelector('h1');
    const header = document.querySelector('header');
    if(title.style.visibility === "hidden" && header.style.display === "none"){
        header.style.display = "block";
        header.style.animation= "none";
        title.style.animation = "none";
        header.style.transform = "translateY(0)";
        title.style.visibility = "visible";
       

    }
    else{
        document.querySelector(".right").style.animation = "none";
        document.querySelector(".left").style.animation = "none";
        document.querySelector(".carousel-track").style.animation= "none";
        title.style.visibility = "hidden";
         header.style.display = "none";
    }


}

window.addEventListener('keydown', (event) => {
  if (event.key === 'ArrowRight') {
    slideToRight(event);
  } else if (event.key === 'ArrowLeft') {
    slideToLeft(event);
  }
});

  

