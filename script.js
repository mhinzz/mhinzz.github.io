// Animation Effect
function initialiseSectionAnimations() {
	const sectionObserver = new IntersectionObserver((entries) => {
		entries.forEach((entry) => {
			if (entry.isIntersecting) {
			entry.target.classList.add("visible");
			}
		});
	}, {
		threshold: 0.1
	});

	document.querySelectorAll("section").forEach((section) => {
		sectionObserver.observe(section);
	});
}


// Theme Toggle 
function initialiseThemeToggle() {
	const toggle = document.getElementById("theme-toggle");
  
	if (!toggle) return;
  
	const savedTheme = localStorage.getItem("theme");
  
	if (savedTheme === "light") {
	  document.body.classList.add("light-mode");
	  toggle.checked = true;
	} else {
	  document.body.classList.remove("light-mode");
	  toggle.checked = false;
	}
  
	toggle.addEventListener("change", () => {
	  if (toggle.checked) {
		document.body.classList.add("light-mode");
		localStorage.setItem("theme", "light");
	  } else {
		document.body.classList.remove("light-mode");
		localStorage.setItem("theme", "dark");
	  }
	});
  }


// Sticky Sidebar Offset
function initialiseSidebarOffset() {
	const sidebarHeader = document.querySelector(".sidebar-header");

	if (!sidebarHeader) return;

	function updateSidebarHeaderHeight() {

		document.documentElement.style.setProperty(
			"--sidebar-header-height",
			`${sidebarHeader.offsetHeight}px`
		);
	}

	window.addEventListener("resize", updateSidebarHeaderHeight);

	const observer = new ResizeObserver(updateSidebarHeaderHeight);
	observer.observe(sidebarHeader);
}


// Run
initialiseSectionAnimations();
initialiseThemeToggle();
initialiseSidebarOffset();