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
