const navMobile = document.querySelector(".nav-mobile");
const navBtn = document.querySelector(".hamburger");

function handleNav() {
	navMobile.classList.toggle("nav-mobile--active");
	navBtn.classList.toggle("is-active");
	document.body.classList.toggle("sticky-body");
}

document.querySelectorAll(".nav__link").forEach(n =>
	n.addEventListener("click", () => {
		navMobile.classList.remove("nav-mobile--active");
		navBtn.classList.remove("is-active");
		document.body.classList.remove("sticky-body");
	})
);

navBtn.addEventListener("click", handleNav);

document.querySelector(".footer__year").innerText = new Date().getFullYear();
