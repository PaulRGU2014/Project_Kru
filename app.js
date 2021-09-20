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

  })};

//   Make menu works
  const menus = document.querySelectorAll("#menu");
  const article = document.querySelectorAll("article");
  
  function tabChange() {
  for (i = 1; i < article.length; i++) {
      article[i].hidden = true;
  }
  
  for (let menu of menus) {
      menu.addEventListener("click", menuActive);
  }
  
  function menuActive() {
      const menuActive = document.querySelectorAll(".navSelected");
      const dataTab = this.getAttribute("data-tab");
      for (let menu of menuActive) {
          menu.classList.value = "tabName";
          for (let content of article) {
              if (content.dataset.tab !== dataTab) {
                  content.hidden = true;
              } else {
                  content.hidden = false;
              }
          }
      }
      this.classList.value = "navSelected";
  }};

  tabChange();

  slideShow();



