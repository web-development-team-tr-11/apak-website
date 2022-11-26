const openModalBtn = document.querySelector(".contact-btn");
const closeModalBtn = document.querySelector(".feedback-modal__close-btn");
const modal = document.querySelector(".feedback-modal");

validateForm();

openModalBtn.addEventListener("click", openModal);

closeModalBtn.addEventListener("click", closeModal);

window.onclick = function (event) {
  if (event.target == modal) {
    closeModal();
  }
};

function openModal() {
  modal.style.visibility = "visible";
  modal.style.opacity = 1;
  validateModalForm();
}

function closeModal() {
  modal.style.visibility = "hidden";
  modal.style.opacity = 0;
  validateForm();
}
