"use strict";
const btnDisplayModal = document.querySelector(".display-modal");
const modal = document.querySelector(".modal");
const btnCloseModal = document.querySelector(".close-modal");

const showModal = function () {
  modal.classList.remove("hide");
  document.querySelector(".blurEffect").classList.remove("hide");
};

const closeModal = function () {
  modal.classList.add("hide");
  document.querySelector(".blurEffect").classList.add("hide");
};

document.addEventListener("keyup", function (event) {
  if (event.key === "X") closeModal();
});
btnDisplayModal.addEventListener("click", showModal);
btnCloseModal.addEventListener("click", closeModal);
