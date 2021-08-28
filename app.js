const projectPanel = document.querySelectorAll('.projectPanel');
const options = {
rootMargin: '0px',
threshold: 0.50
}
const callback = (entries) => {
  entries.forEach((entry) => {
    const target = entry.target;
    if (entry.intersectionRatio >= 0.50) {
    target.classList.add("projectPanel-transition");
    } else {
    target.classList.remove("projectPanel-transition");
   }
  })
}
const observer = new IntersectionObserver(callback, options)
projectPanel.forEach((section, index) => {
observer.observe(section)
})