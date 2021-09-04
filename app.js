// For all slideshows
 function slideShow () { const aboutMeRight = document.querySelectorAll('.aboutMeRight');
  const aboutMeLeft = document.querySelectorAll('.aboutMeLeft');
  const projectPanel = document.querySelectorAll('.projectPanel');
  const options = {
  rootMargin: '0px',
  threshold: 0.45
  };
  const callbackRight = (entries) => {
    entries.forEach((entry) => {
      const target = entry.target;
      if (entry.intersectionRatio >= 0.45) {
      target.classList.add("aboutMeRight-transition");
      } else {
      target.classList.remove("aboutMeRight-transition");
     }
    })
  };
  const callbackLeft = (entries) => {
    entries.forEach((entry) => {
      const target = entry.target;
      if (entry.intersectionRatio >= 0.45) {
      target.classList.add("aboutMeLeft-transition");
      } else {
      target.classList.remove("aboutMeLeft-transition");
     }
    })
  };
  const callbackProject = (entries) => {
    entries.forEach((entry) => {
      const target = entry.target;
      if (entry.intersectionRatio >= 0.45) {
      target.classList.add("projectPanel-transition");
      } else {
      target.classList.remove("projectPanel-transition");
     }
    })
  }
  const observerRight = new IntersectionObserver(callbackRight, options);
  aboutMeRight.forEach((section, index) => {
  observerRight.observe(section);
  const observerLeft = new IntersectionObserver(callbackLeft, options);
  aboutMeLeft.forEach((section, index) => {
  observerLeft.observe(section);
  const observerProject = new IntersectionObserver(callbackProject, options)
  projectPanel.forEach((section, index) => {
  observerProject.observe(section)

  })})})}

  slideShow()

  