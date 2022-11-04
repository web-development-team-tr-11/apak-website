const menu = document.querySelector(".menu");
const social = document.querySelector(".social");
const burger = document.querySelector(".burger__body");
const options = document.querySelectorAll(".options__item");
const header = document.querySelector("header");
const scrollitem = document.querySelectorAll(".scroll-item");

/*scrollAnimation*/

const scrollAnimation = ()=>{
    let windowCenter = (window.innerHeight/2)+window.scrollY;

    scrollitem.forEach(el=>{
      let scrollOffset = (el.offsetTop/1.5) + (el.offsetHeight/2);
      if(windowCenter >= scrollOffset){
          el.classList.add('animation-class');
      }
      else{
        el.classList.remove('animation-class');
      }
    })

};

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
const headerHeight = header.offsetHeight;
scrollAnimation();
window.addEventListener("scroll", () => {
  scrollAnimation();
  for (let option of options) {
    if (window.pageYOffset > headerHeight) {
      option.classList.add("active");
    } else {
      option.classList.remove("active");
    }
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
