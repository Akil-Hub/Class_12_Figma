//navbar animation
const navItems = document.querySelectorAll(".nav-item");

gsap.from(navItems, {
  y: -20,
  opacity: 0,
  duration: 0.6,
  stagger: 0.15, // each item animates after previous
});

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

// Animation left to right
const textElements = document.querySelectorAll(".leftAnimation");

// Loop through each element
textElements.forEach((elem) => {
  gsap.from(elem, {
    scrollTrigger: {
      trigger: elem, // element that triggers animation
      start: "top 80%", // when animation starts
      toggleActions: "restart none restart none", // run on scroll in/out
    },
    x: -150, // start 150px left
    opacity: 0, // start invisible
    duration: 1.2, // animation duration
  });
});

// Animation right to left
const rightItems = document.querySelectorAll(".rightAnimation");

// Loop through each element
rightItems.forEach((elem) => {
  gsap.from(elem, {
    scrollTrigger: {
      trigger: elem, // element that triggers animation
      start: "top 80%", // when animation starts
      toggleActions: "restart none restart none", // run on scroll in/out
    },
    x: 150, // start 150px left
    opacity: 0, // start invisible
    duration: 1.2, // animation duration
  });
});

// Animation bottom to top
const bottomItems = document.querySelectorAll(".bottomAnimation");

// Loop through each element
bottomItems.forEach((elem) => {
  gsap.from(elem, {
    scrollTrigger: {
      trigger: elem, // element that triggers animation
      start: "top 80%", // when animation starts
      toggleActions: "restart none restart none", // run on scroll in/out
    },
    y: 150, // start 150px left
    opacity: 0, // start invisible
    duration: 1.2,
  });
});

// Animation bottom to top only for cards items
const cardsItem = document.querySelectorAll(".bottomCardAnimation");

// Loop through each element
cardsItem.forEach((elem, i) => {
  gsap.from(elem, {
    scrollTrigger: {
      trigger: elem, // element that triggers animation
      start: "top 80%", // when animation starts
      toggleActions: "restart none restart none", // run on scroll in/out
    },
    y: 150, // start 150px left
    opacity: 0, // start invisible
    duration: 1.2,
    delay: i * 0.2, // Stagger Effect                  // animation duration
  });
});

// Cards animation
const videos = document.querySelectorAll(".zoomOutAnimation");

videos.forEach((video, i) => {
  gsap.from(video, {
    scrollTrigger: {
      trigger: video,
      start: "top 85%",
      toggleActions: "restart none restart none",
    },
    scale: 0,
    opacity: 0,
    duration: 0.9,
    delay: i * 0.2,
  });
});

// Running Companies logo animation
// Select all logo elements
const logos = document.querySelectorAll(".running-logos");

// Desktop animation
if (window.innerWidth > 776) {
  gsap.to(logos, {
    xPercent: -50,
    duration: 7,
    repeat: -1,
    ease: "linear"
  });

// Mobile animation (zoomOut with index-based stagger)
} else {
  gsap.from(logos, {
    scrollTrigger: {
      trigger: logos,
      start: "top 85%",
      toggleActions: "restart none restart none"
    },
    scale: 0,
    opacity: 0,
    duration: 0.9,
    stagger: (i) => i * 0.2 // index-based stagger
  });
}


//Card Row Animation
const cardRows = document.querySelectorAll(".parentCardAnim");

cardRows.forEach((row) => {
  const cards = row.querySelectorAll(".childCardAnim");

  gsap.from(cards, {
    scrollTrigger: {
      trigger: row, // animate when the whole row is in view
      start: "top 85%",
      toggleActions: "restart none restart none",
    },
    scale: 0,
    opacity: 0,
    duration: 0.8,
    stagger: 0.2, // each card appears one after another
  });
});

//Footer Column Animation
const footerCols = document.querySelectorAll(".footerColAnimation");

footerCols.forEach((col, i) => {
  gsap.from(col, {
    scrollTrigger: {
      trigger: col,
      start: "top 85%",
      toggleActions: "restart none restart none",
    },
    y: 50,
    opacity: 0,
    duration: 1,
    delay: i * 0.2, // staggered
  });
});

const copyright = document.querySelector(".copyrightText");

gsap.from(copyright, {
  scrollTrigger: {
    trigger: copyright,
    start: "top 95%", // start a bit lower
    toggleActions: "restart none restart none",
  },
  scale: 0,
  opacity: 0,
  duration: 0.7,
});
