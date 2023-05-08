let bgContainerEl = document.getElementById("bgContainer");
let headingEl = document.getElementById("heading");
let themeUserInputEl = document.getElementById("themeUserInput");

function changeTheme(event) {
    if (event.key === "Enter") {
        if (themeUserInputEl.value === "Light") {
            bgContainerEl.classList.add("bg-container");
            headingEl.classList.add("heading");
            bgContainerEl.classList.remove("dark-theme");
            headingEl.classList.remove("dark-theme-heading");
            themeUserInputEl.value = "";
        } else if (themeUserInputEl.value === "Dark") {
            bgContainerEl.classList.add("dark-theme");
            headingEl.classList.add("dark-theme-heading");
            bgContainerEl.classList.remove("bg-container");
            headingEl.classList.remove("heading");
            themeUserInputEl.value = "";
        } else {
            alert("Enter the valid theme");
            themeUserInputEl.value = "";
        }
    }
}

themeUserInputEl.addEventListener("keydown", changeTheme);