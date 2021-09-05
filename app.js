// For all slideshows
 function slideShow () { const aboutMeRight = document.querySelectorAll('.aboutMeRight');
  const aboutMeLeft = document.querySelectorAll('.aboutMeLeft');
  const projectPanel = document.querySelectorAll('.projectPanel');
  const timelineStone = document.querySelectorAll('.timelineStone');
  const timelineYear = document.querySelectorAll('.timelineYear');
  const timelineContent = document.querySelectorAll('.timelineContent');

  const options = {
  rootMargin: '0px 0px',
  threshold: 0.5
  };
  // About Me Section
    const callbackLeft = (entries) => {
    entries.forEach((entry) => {
      const target = entry.target;
      if (entry.intersectionRatio >= 0.5) {
      target.classList.add("aboutMeLeft-transition");
      } else {
      target.classList.remove("aboutMeLeft-transition");
     }
    })
  };
  const callbackRight = (entries) => {
    entries.forEach((entry) => {
      const target = entry.target;
      if (entry.intersectionRatio >= 0.5) {
      target.classList.add("aboutMeRight-transition");
      } else {
      target.classList.remove("aboutMeRight-transition");
     }
    })
  };
// Timelines:Stone
  const callbackStone = (entries) => {
    entries.forEach((entry) => {
      const target = entry.target;
      if (entry.intersectionRatio >= 0.5) {
      target.classList.add("timelineStone-transition");
      } else {
      target.classList.remove("timelineStone-transition");
     }
    })
  };
// Timelines:Year
const callbackYear = (entries) => {
  entries.forEach((entry) => {
    const target = entry.target;
    if (entry.intersectionRatio >= 0.5) {
    target.classList.add("timelineYear-transition");
    } else {
    target.classList.remove("timelineYear-transition");
   }
  })
};

// Timeline:Content
const callbackTimelineContent = (entries) => {
  entries.forEach((entry) => {
    const target = entry.target;
    if (entry.intersectionRatio >= 0.5) {
    target.classList.add("timelineContent-transition");
    } else {
    target.classList.remove("timelineContent-transition");
   }
  })
};

// Projects Section
  const callbackProject = (entries) => {
    entries.forEach((entry) => {
      const target = entry.target;
      if (entry.intersectionRatio >= 0.5) {
      target.classList.add("projectPanel-transition");
      } else {
      target.classList.remove("projectPanel-transition");
     }
    })
  };
  // Execution Part
  const observerLeft = new IntersectionObserver(callbackLeft, options);
  aboutMeLeft.forEach((section, index) => {
  observerLeft.observe(section);

  const observerRight = new IntersectionObserver(callbackRight, options);
  aboutMeRight.forEach((section, index) => {
  observerRight.observe(section);

  const observerProject = new IntersectionObserver(callbackProject, options)
  projectPanel.forEach((section, index) => {
  observerProject.observe(section);

  const observerStone = new IntersectionObserver(callbackStone, options)
  timelineStone.forEach((section, index) => {
  observerStone.observe(section);

  const observerYear = new IntersectionObserver(callbackYear, options)
  timelineYear.forEach((section, index) => {
  observerYear.observe(section);

  const observerTimelineContent = new IntersectionObserver(callbackTimelineContent, options)
  timelineContent.forEach((section, index) => {
  observerTimelineContent.observe(section);

  })})})})})})}

  slideShow()

