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
