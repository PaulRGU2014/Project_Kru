// Function on menus
// const navMenus = document.querySelectorAll(".navDefault");
// const tabContent = document.querySelectorAll(".tabContent");

// for (i = 1; i < tabContent.length; i++) {
//     tabContent[i].hidden = true;
// }

// for (let tab of navMenus) {
//     tab.addEventListener("click", tabNameActive);
// }

// function tabNameActive() {
//     const tabActive = document.querySelectorAll(".tabNameActive");
//     const dataTab = this.getAttribute("data-tab");
//     for (let tab of tabActive) {
//         tab.classList.value = "tabName";
//         for (let content of tabContent) {
//             if (content.dataset.tab !== dataTab) {
//                 content.hidden = true;
//             } else {
//                 content.hidden = false;
//             }
//         }
//     }
//     this.classList.value = "tabNameActive";
// }


// Remove the transition class
const square = document.querySelector('.projectPanel');
square.classList.remove('projectPanel-transition');

// Create the observer, same as before:
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      square.classList.add('projectPanel-transition');
      return;
    }

    square.classList.remove('projectPanel-transition');
  });
});

observer.observe(document.querySelector('.projectPanel-wrapper'));