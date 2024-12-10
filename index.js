  document.addEventListener('DOMContentLoaded', () => {
    const typingEffectElements = document.querySelectorAll('h1,.education_title'); // Select h1 and p elements with the class typing-effect
  
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
  