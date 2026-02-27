"use strict";

const firstPage = document.querySelector(".firstpage");
const mainTitle = document.querySelector(".firstpage h1");
const background = document.querySelector(".background");
const foregraound = document.querySelector(".foreground");
const middleground = document.querySelector(".minddleground");
const FIRST_PAGE_MAX_SCROLL = 500;

document.addEventListener("scroll", function (event) {
  let scrollOffset = window.pageYOffset;

  if (scrollOffset <= FIRST_PAGE_MAX_SCROLL) {
    let p = (scrollOffset / FIRST_PAGE_MAX_SCROLL) + 1;
    // mainTitle.style.trasform = 'scale(${p})';
  }
});
