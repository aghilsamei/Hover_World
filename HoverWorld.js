const tooltip = document.getElementById("tooltip");
const objectElement = document.querySelector("object");

const countryData = {
  IQ: {
    name: "Iraq 🇮🇶",
    capital: "Baghdad",
    products: "40 million"
  },
  IR: {
    name: "Iran 🇮🇷",
    capital: "Tehran",
    products: "86 million"
  },
  US: {
    name: "United States 🇺🇸",
    capital: "Washington, D.C.",
    products: "331 million"
  },
  AF: {
    name: "افغانستان",
    capital: "کابل",
    products: "تریاک  فرش  سنگ"
  }
};

objectElement.addEventListener("load", () => {
  const svgDoc = objectElement.contentDocument;

  Object.keys(countryData).forEach((code) => {
    const countryPath = svgDoc.getElementById(code);
    const data = countryData[code];

    if (countryPath) {
      countryPath.style.cursor = "pointer";
      


      countryPath.addEventListener("mouseenter", () => {
        countryPath.setAttribute("fill", "#ffb703"); // رنگ هاور مثلاً نارنجی
        tooltip.innerHTML = `<strong>${data.name}</strong><br>پایتخت: ${data.capital}<br>محصولات: ${data.products}`;
        tooltip.style.display = "block";
      });

      countryPath.addEventListener("mousemove", (e) => {
        tooltip.style.top = e.clientY + 15 + "px";
        tooltip.style.left = e.clientX + 15 + "px";
      });

      countryPath.addEventListener("mouseleave", () => {
        countryPath.setAttribute("fill", "#ccc"); // برگردوندن به رنگ قبلی
        tooltip.style.display = "none";
      });
    } else {
      console.warn(`کشور با ID '${code}' پیدا نشد!`);
    }
  });
});
