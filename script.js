const navMenu = document.getElementById("nav_menu")
const navLinks = document.querySelector(".nav__links")
const mainNav = document.querySelector(".main-nav")

function toggleMenu() {
	navLinks.classList.toggle("active")
	mainNav.classList.toggle("menu-open")
}

navMenu.addEventListener("click", toggleMenu)

document.addEventListener("click", (event) => {
	const isClickInsideNav = mainNav.contains(event.target)
	if (!isClickInsideNav && navLinks.classList.contains("active")) {
		toggleMenu()
	}
});

navLinks.querySelectorAll(".link a").forEach((link) => {
	link.addEventListener("click", () => {
		if (navLinks.classList.contains("active")) {
			toggleMenu()
		}
	});
});
