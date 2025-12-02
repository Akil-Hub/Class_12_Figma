// navbar animation
const navItems = document.querySelectorAll(".nav-item");

gsap.from(navItems, {
  y: -20,
  opacity: 0,
  duration: 0.6,
  stagger: 0.15,
});

// Register ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

// LEFT ANIMATION
document.querySelectorAll(".leftAnimation").forEach((elem) => {
  gsap.from(elem, {
    scrollTrigger: {
      trigger: elem,
      start: "top 80%",
      toggleActions: "restart none restart none",
    },
    x: -150,
    opacity: 0,
    duration: 1.2,
  });
});

// RIGHT ANIMATION
document.querySelectorAll(".rightAnimation").forEach((elem) => {
  gsap.from(elem, {
    scrollTrigger: {
      trigger: elem,
      start: "top 80%",
      toggleActions: "restart none restart none",
    },
    x: 150,
    opacity: 0,
    duration: 1.2,
  });
});

// BOTTOM ANIMATION
document.querySelectorAll(".bottomAnimation").forEach((elem) => {
  gsap.from(elem, {
    scrollTrigger: {
      trigger: elem,
      start: "top 80%",
      toggleActions: "restart none restart none",
    },
    y: 150,
    opacity: 0,
    duration: 1.2,
  });
});

// BOTTOM CARD ANIMATION
document.querySelectorAll(".bottomCardAnimation").forEach((elem, i) => {
  gsap.from(elem, {
    scrollTrigger: {
      trigger: elem,
      start: "top 80%",
      toggleActions: "restart none restart none",
    },
    y: 150,
    opacity: 0,
    duration: 1.2,
    delay: i * 0.2,
  });
});

// ZOOM OUT ANIMATION
document.querySelectorAll(".zoomOutAnimation").forEach((video, i) => {
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

// RUNNING LOGOS — Desktop ONLY
// const logos = document.querySelectorAll(".running-logos");

// if (window.innerWidth > 566) {
//   gsap.to(logos, {
//     xPercent: -50,
//     duration: 7,
//     repeat: -1,
//     ease: "linear",
//   });
// } else {
//   // MOBILE — Stop animation completely
//   gsap.killTweensOf(logos);
//   ScrollTrigger.getAll().forEach((st) => st.kill());
// }

// CARD ROW ANIMATION
document.querySelectorAll(".parentCardAnim").forEach((row) => {
  const cards = row.querySelectorAll(".childCardAnim");

  gsap.from(cards, {
    scrollTrigger: {
      trigger: row,
      start: "top 85%",
      toggleActions: "restart none restart none",
    },
    scale: 0,
    opacity: 0,
    duration: 0.8,
    stagger: 0.2,
  });
});

// FOOTER COLUMN ANIMATION
document.querySelectorAll(".footerColAnimation").forEach((col, i) => {
  gsap.from(col, {
    scrollTrigger: {
      trigger: col,
      start: "top 85%",
      toggleActions: "restart none restart none",
    },
    y: 50,
    opacity: 0,
    duration: 1,
    delay: i * 0.2,
  });
});

// COPYRIGHT — Desktop ONLY
const copyright = document.querySelector(".copyrightText");

if (window.innerWidth > 566) {
  gsap.from(copyright, {
    scrollTrigger: {
      trigger: copyright,
      start: "top 95%",
      toggleActions: "restart none restart none",
    },
    scale: 0,
    opacity: 0,
    duration: 0.7,
  });
} else {
  // MOBILE — do NOT remove the element, only stop animation
  gsap.killTweensOf(copyright);
}
