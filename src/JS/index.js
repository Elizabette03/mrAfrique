
// // Dark Mode toggle switch
// const colorToggle = document.getElementById('color-toggle');

// colorToggle.addEventListener("click", () => {
//   document.body.classList.toggle("dark")
// })


// Side Navigation bar
const sidebar = document.getElementById("sidebar");
const toBlur = document.getElementById("to-blur");
const navItems = document.getElementById("nav-items") 

sidebar.addEventListener("mouseenter", () => {
  toBlur.classList.add("blur-sm")
  sidebar.classList.add("bg-[#060c03]")
  navItems.classList.remove("text-accent-2/30")
  navItems.classList.add("text-accent-2")
})

sidebar.addEventListener("mouseleave", () => {
  toBlur.classList.remove("blur-sm")
  sidebar.classList.remove("bg-[#060c03]")
  navItems.classList.remove("text-accent-2")
  navItems.classList.add("text-accent-2/30")
})


// Swiper Initialization code
// const swiper = new Swiper('.slider-wrapper', {
//   loop: true,

//   // Navigation arrows
//   navigation: {
//     nextEl: '.swiper-button-next',
//     prevEl: '.swiper-button-prev',
//   },
// });

// Infinite scroll

const scroller = document.querySelectorAll(".scroll-container");



const addElement = () => {
  scroller.forEach(scroller => {
    scroller.setAttribute("data-animated", true);

    const scroll = scroller.querySelector(".scroll");
    const scrollItems = Array.from(scroll.children);

    scrollItems.forEach(item => {
      const duplicate = item.cloneNode(true);
      duplicate.setAttribute("aria-hidden", true);
      scroll.appendChild(duplicate);
    });
  });
}

if(!window.matchMedia("(prefers-reduced-motion: reduce)").matches){
  addElement();
}
