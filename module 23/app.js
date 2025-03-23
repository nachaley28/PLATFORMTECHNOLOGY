const locationInput = document.getElementById("locationInput");
const addLocationButton = document.getElementById("addLocationButton");
const locationList = document.getElementById("locationList");
const themeToggle = document.getElementById("themeToggle");

const locations = [];

addLocationButton.addEventListener("click", () => {
    const newLocation = locationInput.value;
    if (newLocation) {
        locations.push(newLocation);
        locationList.innerHTML = ""; // Clear existing list

        for (const location of locations) {
            const listItem = document.createElement("li");
            listItem.textContent = location;
            locationList.appendChild(listItem);
        }

        locationInput.value = ""; // Clear input field
    }
});

themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    if (document.body.classList.contains("dark-mode")) {
        themeToggle.textContent = "Light Mode";
    } else {
        themeToggle.textContent = "Dark Mode";
    }
});

