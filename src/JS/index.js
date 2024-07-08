
// Dark Mode toggle switch
const colorToggle = document.getElementById('color-toggle');

colorToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark")
})


// Side Navigation bar
const sidebar = document.getElementById("sidebar");
const navItems = document.getElementById("nav-items") 

sidebar.addEventListener("mouseenter", () => {
  console.log('sidebar')
  sidebar.classList.add("bg-[#060c03]")
  navItems.classList.remove("text-accent-2/30")
  navItems.classList.add("text-accent-2")
})

sidebar.addEventListener("mouseleave", () => {
  console.log('sidebar')
  sidebar.classList.remove("bg-[#060c03]")
  navItems.classList.remove("text-accent-2")
  navItems.classList.add("text-accent-2/30")
})