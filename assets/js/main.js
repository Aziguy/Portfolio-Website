/*=============== SHOW SIDEBAR ===============*/

/*===== SIDEBAR SHOW =====*/
/* Validate If Constant Exists */

/*===== SIDEBAR HIDDEN =====*/
/* Validate If Constant Exists */

/*=============== SKILLS TABS ===============*/

const tabs = document.querySelectorAll("[data-target]"),
  tabContent = document.querySelectorAll("[data-content]");

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    const target = document.querySelector(tab.dataset.target);

    tabContent.forEach((tabContents) => {
      tabContents.classList.remove("skills__active");
    });

    target.classList.add("skills__active");

    tabs.forEach((tab) => {
      tab.classList.remove("skills__active");
    });

    tab.classList.add("skills__active");
  });
});

/*=============== MIXITUP FILTER PORTFOLIO ===============*/

let mixerPortfolio = mixitup(".work__container", {
  selectors: {
    target: ".work__card",
  },
  animation: {
    duration: 300,
  },
});

/*===== Link Active Work =====*/

const linkWork = document.querySelectorAll(".work__item");

function activeWork() {
  linkWork.forEach((l) => l.classList.remove("active-work"));
  this.classList.add("active-work");
}

linkWork.forEach((l) => l.addEventListener("click", activeWork));

/*===== Work Popup =====*/

document.addEventListener("click", (e) => {
  if (e.target.classList.contains("work__button")) {
    tooglePortfolioPopup();
    portfolioItemDetails(e.target.parentElement);
  }
});

function tooglePortfolioPopup() {
  document.querySelector(".portfolio__popup").classList.toggle("open");
}

document
  .querySelector(".portfolio__popup-close")
  .addEventListener("click", tooglePortfolioPopup);

function portfolioItemDetails(portfolioItem) {
  document.querySelector(".pp__thumbnail img").src =
    portfolioItem.querySelector(".work__img").src;
  document.querySelector(".portfolio__popup-subtitle span").innerHTML =
    portfolioItem.querySelector(".portfolio__title").innerHTML;
  document.querySelector(".portfolio__popup-body").innerHTML =
    portfolioItem.querySelector(".portfolio__item-details").innerHTML;
}

/*=============== CERTIFICATIONS MODAL ===============*/
const modalViews = document.querySelectorAll(".certifications__modal"),
  modelBtns = document.querySelectorAll(".certifications__button"),
  modalCloses = document.querySelectorAll(".certifications__modal-close");

let modal = function (modalClick) {
  modalViews[modalClick].classList.add("active-modal");
};

modelBtns.forEach((modelBtn, i) => {
  modelBtn.addEventListener("click", () => {
    console.log("click");
    modal(i);
  });
});

modalCloses.forEach((modalClose) => {
  modalClose.addEventListener("click", () => {
    modalViews.forEach((modalView) => {
      modalView.classList.remove("active-modal");
    });
  });
});

/*=============== INPUT ANIMATION ===============*/

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/

/*=============== SHOW SCROLL UP ===============*/
