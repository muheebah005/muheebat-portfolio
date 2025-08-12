let dark = localStorage.getItem("dark");
const themeSwitch = document.getElementById("theme-switch");

const enableDarkMode = () => {
	document.body.classList.add("dark");
	localStorage.setItem("dark", "active");
};

const disableDarkMode = () => {
	document.body.classList.remove("dark");
	localStorage.setItem("dark", null);
};

if (dark === "active") enableDarkMode();

themeSwitch.addEventListener("click", () => {
	dark = localStorage.getItem("dark");
	dark !== "active" ? enableDarkMode() : disableDarkMode();
});
