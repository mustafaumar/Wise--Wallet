"use strict";
const menu = document.querySelector(".hamburger");
const navCenter = document.querySelector(".nav_center");
const navItems = document.querySelectorAll(".nav--links");

menu.addEventListener("click", () => {
  menu.classList.toggle("active");
  navCenter.classList.toggle("display");
});

navItems.forEach((n) => {
  n.addEventListener("click", () => {
    menu.classList.toggle("active");
    navCenter.classList.toggle("display");
  });
});

const timeline = gsap.timeline({ defaults: { duration: 1 } });
timeline
  .from("nav", {
    y: "-100%",
    ease: "ease",
  })
  .from(".nav--links", {
    opacity: 0,
    stagger: 0.5,
    duration: 0.5,
  });
