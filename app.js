const menu = document.querySelector(".menu");
const burger = document.querySelector(".burger__body");
const toTop = document.querySelector(".scroll-top-btn");
const contactBtn = document.querySelector(".contact-popup");

/* burger menu */
burger.addEventListener("click", () => {
  menu.classList.toggle("active");
  burger.classList.toggle("active");
  document.body.classList.toggle("lock");
});

menu.querySelectorAll(".menu__link").forEach((link) => {
  link.addEventListener("click", () => {
    menu.classList.remove("active");
    burger.classList.remove("active");
    document.body.classList.remove("lock");
  });
});

/* the appearence of contact popup and scroll to top buttons */
window.addEventListener("scroll", () => {
  if (window.pageYOffset > 100) {
    toTop.classList.add("active");
    contactBtn.classList.add("active");
  } else {
    toTop.classList.remove("active");
    contactBtn.classList.remove("active");
  }
});

/* smooth page transition */
const anchors = document.querySelectorAll("a[href*='#']");
anchors.forEach((anchor) => {
  anchor.addEventListener("click", (event) => {
    event.preventDefault();

    const blockID = anchor.getAttribute("href").substring(1);

    document.getElementById(blockID).scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  });
});
