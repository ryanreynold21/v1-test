import "swiper/css/bundle";
import Swiper from "swiper/bundle";

const menuBtn = document.getElementById("menu-btn");
const mobileMenu = document.getElementById("mobile-menu");
const menuLinks = mobileMenu.querySelectorAll("a");

const reviews = [
  {
    img: "./src/assets/av1.png",
    name: "John Li",
    text: "The Creator innovative ideas, strategic approach, and outstanding results have left a lasting impression on me as a blogger, making them a standout in the creative industry.",
  },
  {
    img: "./src/assets/av2.png",
    name: "Amanda Steen",
    text: "The Creator innovative ideas, strategic approach, and outstanding results have left a lasting impression on me as a blogger, making them a standout in the creative industry.",
  },
  {
    img: "./src/assets/av1.png",
    name: "Nicholas Love",
    text: "The Creator innovative ideas, strategic approach, and outstanding results have left a lasting impression on me as a blogger, making them a standout in the creative industry.",
  },
  {
    img: "./src/assets/av2.png",
    name: "Luna White",
    text: "The Creator innovative ideas, strategic approach, and outstanding results have left a lasting impression on me as a blogger, making them a standout in the creative industry.",
  },
];

const wrapper = document.getElementById("review-wrapper");

reviews.forEach((review) => {
  const slide = document.createElement("div");
  slide.className = "swiper-slide";
  slide.innerHTML = `
    <div class="bg-[#FF7EE6] rounded-2xl py-[20px] px-[40px] text-primary mx-2 my-10">
      <img src="${review.img}" alt="${review.name}" class="w-14 h-14 rounded-full mb-4" />
      <h3 class="xl:text-[32px] text-[24px] font-semibold mb-2 leading-[40px]">${review.name}</h3>
      <p class="xl:text-[20px] text-[16px] font-[400] leading-[30px]">${review.text}</p>
    </div>
  `;
  wrapper.appendChild(slide);
});

const swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 20,
  loop: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    768: { slidesPerView: 2 },
    1024: { slidesPerView: 3 },
  },
});

menuBtn.addEventListener("click", () => {
  mobileMenu.classList.toggle("hidden");
});

menuLinks.forEach((link) => {
  link.addEventListener("click", () => {
    mobileMenu.classList.add("hidden");
  });
});

// select all nav links from desktop and mobile navs
const navLinks = document.querySelectorAll("#navbar-links a, #mobile-menu a");

// helper: remove active from all links
function clearActive() {
  navLinks.forEach((l) => l.classList.remove("nav-active"));
}

// smooth scroll on click and set active
navLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    const href = link.getAttribute("href");
    if (href && href.startsWith("#")) {
      e.preventDefault(); // prevent default jump

      // remove active from all, then add to clicked
      clearActive();
      link.classList.add("nav-active");

      // scroll smoothly to target section
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({ behavior: "smooth", block: "start" });

        // update URL hash without jumping (optional)
        history.replaceState(null, "", href);
      }

      // if mobile menu open, close it (if you have mobile menu logic)
      const mobileMenu = document.getElementById("mobile-menu");
      if (mobileMenu && !mobileMenu.classList.contains("hidden")) {
        mobileMenu.classList.add("hidden");
      }
    }
  });
});

// sections to observe
const sections = document.querySelectorAll('main section[id]');

// IntersectionObserver options
const observerOptions = {
  root: null,
  rootMargin: '-20% 0px -60% 0px', // adjust so active switches near mid/top
  threshold: 0
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const id = entry.target.getAttribute('id');
      if (!id) return;
      // remove active from all and set the one matching id
      clearActive();
      const activeLink = document.querySelector(`#navbar-links a[href="#${id}"], #mobile-menu a[href="#${id}"]`);
      if (activeLink) activeLink.classList.add('nav-active');
    }
  });
}, observerOptions);

// observe each section
sections.forEach(sec => observer.observe(sec));

