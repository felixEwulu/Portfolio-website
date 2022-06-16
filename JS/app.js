/* ==================== CHANGE BACKGROUUND HEADER ==================== */
function scrollHeader() {
  const header = document.getElementById("header");
  // when the scroll is greater than 50 viewport height, add the scroll-header class tag to the header tag
  if (this.scrollY >= 50) {
    header.classList.add("scroll-header");
  } else {
    header.classList.remove("scroll-header");
  }
}
window.addEventListener("scroll", scrollHeader);

/* =================== SERVICES MODAL ===================== */
const modalViews = document.querySelectorAll(".services__modal"),
  modalBtns = document.querySelectorAll(".services__button"),
  modalClose = document.querySelectorAll(".services__modal-close");

let modal = function (modalClick) {
  modalViews[modalClick].classList.add("active-modal");
};
modalBtns.forEach(function (mb, i) {
  mb.addEventListener("click", function () {
    modal(i);
  });
});

modalClose.forEach(function (mc) {
  mc.addEventListener("click", function () {
    modalViews.forEach(function (mv) {
      mv.classList.remove("active-modal");
    });
  });
});

/* ====================== MIXITUP FILTER =================== */
let mixerPortfolio = mixitup(".work__container", {
  selectors: {
    target: ".work__card",
  },
  animation: {
    duration: 300,
  },
});

///* == link active work == */
const linkWork = document.querySelectorAll(".work__item");

function activeWork() {
  linkWork.forEach((l) => l.classList.remove("active-work"));
  this.classList.add("active-work");
}

linkWork.forEach((l) => l.addEventListener("click", activeWork));

/* ===================== SCROLL SELECTION ACTIVE LINK ======================== */
const sections = document.querySelectorAll("section[id]");

function scrollActive() {
  const scrollY = window.pageYOffset;

  sections.forEach(function (current) {
    const sectionHeight = current.offsetHeight,
      sectionTop = current.offsetTop - 58,
      sectionId = current.getAttribute("id");

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document
        .querySelector(".nav__menu a[href*=" + sectionId + "]")
        .classList.add("active-link");
    } else {
      document
        .querySelector(".nav__menu a[href*=" + sectionId + "]")
        .classList.remove("active-link");
    }
  });
}


/* ===================== DARK LIGHT THEME ======================== */
const themeButton = document.getElementById("theme-button");
const lightTheme = "light-theme";
const iconTheme = "fa-sun";

// Previously selected topic(if user selected)
const selectedTheme = localStorage.getItem("selected-theme");
const selectedIcon = localStorage.getItem("selected-icon");

// We obtain the current theme the interface has by validating the dark-theme class
const getCurrentTheme = function () {
  document.body.classList.contains(lightTheme) ? "dark" : "light";
};

const getCurrentIcon = function () {
  themeButton.classList.contains(iconTheme) ? "fas fa-moon" : "fas fa-sun";
};

// We validate if the user previously chose a topic
if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activate or deactivate the light
  document.body.classList[selectedTheme === "dark" ? "add" : "remove"](
    lightTheme
  );
  themeButton.classList[selectedIcon === "fas fa-moon" ? "add" : "remove"](
    iconTheme
  );
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener("click", function () {
  // Add or remove the dark / icon theme
  document.body.classList.toggle(lightTheme);
  themeButton.classList.toggle(iconTheme);
  // We save the theme and the current icon that the user chose
  localStorage.setItem("selected-theme", getCurrentTheme());
  localStorage.setItem("selected-icon", getCurrentIcon());
});




window.addEventListener("scroll", scrollActive);
/* ================== SWIPER TESTIMONIAL ================= */
//  let swiperTestimonial = new Swiper(".testimonial__container", {
//    spaceBetween: 24,
//    loop: true,
//    gradCursor: true,
//    pagination: {
//      el: ".swiper-pagination",
//      clickable: true,
//    },
//    breakpoints: {
//      576: {
//        slidesPerView: 2,
      
//      },
//      768: {
//        slidesPerView: 2,
//        spaceBetween: 48,
//      },
    
//    },
//  });















