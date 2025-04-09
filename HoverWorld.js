const countries = document.querySelectorAll("#world-map path");
const tooltip = document.getElementById("tooltip");

const countryData = {
  IQ: {
    name: "Iraq",
    capital: "Baghdad",
    population: "40 million",
  },
  IR: {
    name: "Iran",
    capital: "Tehran",
    population: "86 million",
  },
  US: {
    name: "United States",
    capital: "Washington, D.C.",
    population: "331 million",
  },
};

countries.forEach((country) => {
  country.addEventListener("mouseenter", (e) => {
    const id = country.id;
    const data = countryData[id];
    if (data) {
      tooltip.innerHTML = `
        <strong>${data.name}</strong><br>
        Capital: ${data.capital}<br>
        Population: ${data.population}
      `;
      tooltip.style.display = "block";
      tooltip.style.top = e.clientY + 10 + "px";
      tooltip.style.left = e.clientX + 10 + "px";
    }
  });

  country.addEventListener("mousemove", (e) => {
    tooltip.style.top = e.clientY + 10 + "px";
    tooltip.style.left = e.clientX + 10 + "px";
  });

  country.addEventListener("mouseleave", () => {
    tooltip.style.display = "none";
  });
});
