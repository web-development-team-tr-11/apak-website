const menu = document.querySelector(".menu");
const social = document.querySelector(".social");
const burger = document.querySelector(".burger__body");
const options = document.querySelectorAll(".options__item");
const header = document.querySelector("header");
const scrollItem = document.querySelectorAll(".scroll-item");

const form = document.querySelector("#form");
const formInputs = document.querySelectorAll(
  ".form-getintouch__input--important"
);
const email = document.querySelector("#email");

//form validation
form.addEventListener("submit", (e) => {
  checkInputs();
  const emptyInputs = Array.from(formInputs).filter(
    (input) => input.value === ""
  );
  if (emptyInputs.length !== 0) {
    e.preventDefault();
  }
});

const checkInputs = () => {
  const emailValue = email.value.trim();

  formInputs.forEach(function (input) {
    if (input.value === "") {
      input.classList.add("error");
    } else if (email.value !== "" && !isValidEmail(emailValue)) {
      email.classList.add("error");
    } else {
      input.classList.remove("error");
    }
  });
};

//email validation
const isValidEmail = (email) => {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
};

/*scrollAnimation*/
const scrollAnimation = () => {
  let windowCenter = window.innerHeight / 2 + window.scrollY;
  scrollItem.forEach((el) => {
    let scrollOffset = el.offsetTop / 1.5 + el.offsetHeight / 2;
    if (windowCenter >= scrollOffset) {
      el.classList.add("animation-class");
    } else {
      el.classList.remove("animation-class");
    }
  });
};

/* burger menu */
burger.addEventListener("click", () => {
  menu.classList.toggle("active");
  menu.style.zIndex = 10;
  burger.style.zIndex = 20;
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

//carousel menu
new Swiper(".swiper", {
  slidesPerView: 1,
  direction: "horizontal",
  loop: true,
  initialSlide: 0,

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },

  breakpoints: {
    768: {
      slidesPerView: 2,
    },
  },
});
