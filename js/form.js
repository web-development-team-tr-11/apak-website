//modal form validation
const validateModalForm = () => {
  const form = document.querySelector("#form-modal");
  const username = document.querySelector("#name-modal");
  const phone = document.querySelector("#phone-modal");
  const email = document.querySelector("#email-modal");
  const formInputs = document.querySelectorAll(".input-modal--important");
  submitForm(form, username, phone, email, formInputs);
};

//form validation
const validateForm = () => {
  const form = document.querySelector("#form");
  const username = document.querySelector("#name");
  const phone = document.querySelector("#phone");
  const email = document.querySelector("#email");
  const formInputs = document.querySelectorAll(
    ".form-getintouch__input--important"
  );
  submitForm(form, username, phone, email, formInputs);
};

//form submit
const submitForm = (form, username, phone, email, formInputs) => {
  form.addEventListener("submit", (e) => {
    checkInputs(username, phone, email, formInputs);
    const errorInputs = Array.from(formInputs).filter((input) =>
      input.classList.contains("error")
    );
    if (errorInputs.length !== 0) {
      e.preventDefault();
    }
  });
};

//validate inputs
const checkInputs = (username, phone, email, formInputs) => {
  const nameValue = username.value.trim();
  const phoneValue = phone.value.trim();
  const emailValue = email.value.trim();

  formInputs.forEach(function (input) {
    if (input.value === "") {
      input.classList.add("error");
    } else if (!isValidName(nameValue)) {
      username.classList.add("error");
    } else if (phoneValue.length < 17) {
      phone.classList.add("error");
    } else if (email.value !== "" && !isValidEmail(emailValue)) {
      email.classList.add("error");
    } else {
      input.classList.remove("error");
    }
  });

  IMask(phone, maskOptions);
};

//name validation
const isValidName = (username) => {
  const re = /^[A-Z]+[a-z '-.,]{2,22}$|^[А-ЯЄІ]+[а-яєі '-.,]{1,22}$/gm;
  return re.test(String(username));
};

//phone validation
var maskOptions = {
  mask: "+{38}(000)000-00-00",
};

//email validation
const isValidEmail = (email) => {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email));
};
