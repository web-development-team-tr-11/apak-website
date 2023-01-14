const menu = document.querySelector(".menu");
const social = document.querySelector(".social");
const burger = document.querySelector(".burger__body");
const options = document.querySelectorAll(".options__item");
const header = document.querySelector("header");
const scrollItem = document.querySelectorAll(".scroll-item");
const searchInputs = document.querySelectorAll(".search__input");
const searchBtns = document.querySelectorAll(".search__btn");
const clearBtns = document.querySelectorAll(".clear-btn");
const firstSearchBlock = document.querySelector(".search");

/*scrollAnimation*/
const scrollAnimation = () => {
  let windowCenter = window.innerHeight / 2 + window.scrollY;
  scrollItem.forEach((el) => {
    let scrollOffset = el.offsetTop / 1.15 + el.offsetHeight / 2;
    if (windowCenter >= scrollOffset) {
      el.classList.add("scroll-animation");
    } else {
      el.classList.remove("scroll-animation");
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

/* text search on the website */
if (window.getComputedStyle(firstSearchBlock).display === "none") {
  activeInput = searchInputs[1];
  activeSearchBtn = searchBtns[1];
  activeClearBtn = clearBtns[1];
} else {
  activeInput = searchInputs[0];
  activeSearchBtn = searchBtns[0];
  activeClearBtn = clearBtns[0];
}

activeInput.addEventListener("input", () => {
  if (activeInput.value === "") {
    activeClearBtn.style.display = "none";
  } else {
    activeClearBtn.style.display = "flex";
  }
});

activeSearchBtn.addEventListener("click", () => {
  let inputValue = activeInput.value.trim().toLowerCase();
  let textItems = document.querySelectorAll(".text");
  if (inputValue !== "") {
    textItems.forEach((elem) => {
      if (elem.innerText.toLowerCase().search(inputValue) !== -1) {
        let str = elem.innerText;
        elem.innerHTML = getHighlightedText(str, inputValue);
        elem.classList.add("highlighted");
        document.querySelector(".highlighted").scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      } else {
        elem.classList.remove("highlighted");
        elem.innerHTML = elem.innerText;
      }
    });
  } else {
    document.querySelectorAll(".highlighted").forEach((elem) => {
      elem.innerHTML = elem.innerText;
      elem.classList.remove("highlighted");
    });
  }
});

const getHighlightedText = (text, highlight) => {
  let groups = highlight
    .split(" ")
    .map((v) => `(${v})`)
    .join("|");
  return text.replace(new RegExp(groups, "gi"), (g) => `<mark>${g}</mark>`);
};

activeClearBtn.addEventListener("click", () => {
  activeInput.value = "";
  document.querySelectorAll(".highlighted").forEach((elem) => {
    elem.classList.remove("highlighted");
    elem.innerHTML = elem.innerText;
  });
  activeClearBtn.style.display = "none";
});
