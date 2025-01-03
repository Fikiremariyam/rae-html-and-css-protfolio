/// the typing effect  of the header
document.addEventListener('DOMContentLoaded', () => {
    const typingEffectElements = document.querySelectorAll('h1,.education_title,.typingEffect'); // Select h1 and p elements with the class typing-effect
  
    const observer = new IntersectionObserver(
      (entries, observerInstance) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.style.animationPlayState = 'running'; // Start animation
            observerInstance.unobserve(entry.target); // Stop observing this element after animation starts
          }
        });
      },
      { threshold: 1 } // Trigger when 50% of the element is visible
    );
  
    typingEffectElements.forEach((element) => {
      observer.observe(element); // Observe each h1 or p element
    });
  });





  // the navigation effect
  const navigationLinks = document.querySelectorAll(".contact-title");
  const iconBox=document.querySelectorAll(".icon-box");
  const pages=document.querySelectorAll("[data-page]");  
  

  
  for (let i = 0;i < navigationLinks.length; i++){

    navigationLinks[i].addEventListener( "click" ,function(){


      for (let i =0; i< pages.length;i++){
        if (this.innerHTML.toLowerCase() == pages[i].dataset.page){
          pages[i].classList.add("active");
          navigationLinks[i].classList.add("active");
          iconBox[i].classList.add("active");
          window.scrollTo(0,0);
        } else{
          
          pages[i].classList.remove("active");
          navigationLinks[i].classList.remove("active");
          iconBox[i].classList.remove("active");

        }
      }
   


    })
    


  }

  
// testimonials variables
const testimonialsItem = document.querySelectorAll("[data-testimonials-item]");
const modalContainer = document.querySelector("[data-modal-container]");
const modalCloseBtn = document.querySelector("[data-modal-close-btn]");
const overlay = document.querySelector("[data-overlay]");

// modal variable
const modalImg = document.querySelector("[data-modal-img]");
const modalTitle = document.querySelector("[data-modal-title]");
const modalText = document.querySelector("[data-modal-text]");

// modal toggle function
const testimonialsModalFunc = function () {
  modalContainer.classList.toggle("active");
  overlay.classList.toggle("active");
}

// add click event to all modal items
for (let i = 0; i < testimonialsItem.length; i++) {

  testimonialsItem[i].addEventListener("click", function () {

    modalImg.src = this.querySelector("[data-testimonials-avatar]").src;
    modalImg.alt = this.querySelector("[data-testimonials-avatar]").alt;
    modalTitle.innerHTML = this.querySelector("[data-testimonials-title]").innerHTML;
    modalText.innerHTML = this.querySelector("[data-testimonials-text]").innerHTML;

    testimonialsModalFunc();

  });

}

// add click event to modal close button
modalCloseBtn.addEventListener("click", testimonialsModalFunc);
overlay.addEventListener("click", testimonialsModalFunc);

