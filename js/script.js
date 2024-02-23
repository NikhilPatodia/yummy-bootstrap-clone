const carousel = document.querySelector('.carousel');
const eventCarousel = document.querySelector('.event-carousel');
const galleryCarousel = document.querySelector('.gallery-carousel');
const dots = document.querySelectorAll('.dot');
const eventDots = document.querySelectorAll('.event-dot');
const galleryDots = document.querySelectorAll('.gallery-dot');
var screenWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
console.log(screenWidth/3)
let currentIndex = 0;
let currentEvent = 0;
let currentGallery = 0;
updateDots();
updateEvent();
function goToSlide(index) {
  currentIndex = index;
  console.log(currentIndex);
  const translateValue = -currentIndex * 100 + '%';
  carousel.style.transform = 'translateX(' + translateValue + ')';
  updateDots();
}

function updateDots() {
  dots.forEach((dot, index) => {
    console.log(dot);
    console.log(index);
    dot.classList.toggle('active', index === currentIndex);
    
  });
}




function goToEvents(index){
  currentEvent = index;
  const translateValue = screenWidth>1024?-currentEvent * (screenWidth/3) + 'px':-currentEvent * 100 + '%';
  console.log(translateValue)
  console.log(translateValue)
  eventCarousel.style.transform = 'translateX(' + translateValue + ')';
  updateEvent();

}

function updateEvent(){
    eventDots.forEach((dot, index)=>{
        dot.classList.toggle('active', index === currentEvent)
    })
}
function goToGallery(index){
  currentGallery = index;
  const translateValue = screenWidth>1024?-currentGallery * (screenWidth/7) + 'px':-currentGallery * 100 + '%';
  
  galleryCarousel.style.transform = 'translateX(' + translateValue + ')';


  updateEvent();

}

function updateEvent(){
    galleryDots.forEach((dot, index)=>{
        dot.classList.toggle('active', index === currentGallery)
    })
}

