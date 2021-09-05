// For all slideshows
 function slideShow () { 
  const transition = document.querySelectorAll('#transition');

  const options = {
  rootMargin: '0px 0px',
  threshold: 0.5
  };
  // About Me Section
    const callbackTransition = (entries) => {
    entries.forEach((entry) => {
      const target = entry.target;
      if (entry.intersectionRatio >= 0.5) {
      target.classList.add("transition");
      } else {
      target.classList.remove("transition");
     }
    })
  };
  
  // Execution Part
  const observerLeft = new IntersectionObserver(callbackTransition, options);
  transition.forEach((section, index) => {
  observerLeft.observe(section);

  })}

  slideShow()

