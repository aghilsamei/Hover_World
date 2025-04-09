const tooltip = document.getElementById("tooltip");
const objectElement = document.querySelector("object");

const countryData = {
  IQ: {
    name: "عراق",
    capital: "بغداد",
    products: "سنگ ماشین"
  },
  IR: {
    name: "ایران",
    capital: "تهران",
    products: "...."
  },
  AF: {
    name: "افغانستان",
    capital: "کابل",
    products: "تریاک  فرش  سنگ تریاک  فرش  سنگ تریاک  فرش  سنگ"
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
        tooltip.innerHTML = `<strong>${data.name}</strong> <div class="box-products"> <img src="images/stone 2.jpg" class="stone-icon" alt="stone"> <p class="products">${data.products}</p>  </div>`;
        tooltip.style.display = "flex";
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


// Id countries
// https://simplemaps.com/resources/svg-world
// {
//     "AF": "Afghanistan", 
//      "AL": "Albania", 
//      "DZ": "Algeria", 
//      "AI": "Anguilla", 
//      "AM": "Armenia", 
//      "AW": "Aruba", 
//      "AT": "Austria", 
//      "BH": "Bahrain", 
//      "BD": "Bangladesh", 
//      "BB": "Barbados", 
//      "BY": "Belarus", 
//      "BE": "Belgium", 
//      "BZ": "Belize", 
//      "BJ": "Benin", 
//      "BM": "Bermuda", 
//      "BT": "Bhutan", 
//      "BO": "Bolivia", 
//      "BA": "Bosnia and Herzegovina", 
//      "BW": "Botswana", 
//      "BR": "Brazil", 
//      "VG": "British Virgin Islands", 
//      "BN": "Brunei Darussalam", 
//      "BG": "Bulgaria", 
//      "BF": "Burkina Faso", 
//      "BI": "Burundi", 
//      "KH": "Cambodia", 
//      "CM": "Cameroon", 
//      "CF": "Central African Republic", 
//      "TD": "Chad", 
//      "CO": "Colombia", 
//      "CR": "Costa Rica", 
//      "HR": "Croatia", 
//      "CU": "Cuba", 
//      "CW": "Curaçao", 
//      "CZ": "Czech Republic", 
//      "CI": "Côte d'Ivoire", 
//      "KP": "Dem. Rep. Korea", 
//      "CD": "Democratic Republic of the Congo", 
//      "DJ": "Djibouti", 
//      "DM": "Dominica", 
//      "DO": "Dominican Republic", 
//      "EC": "Ecuador", 
//      "EG": "Egypt", 
//      "SV": "El Salvador", 
//      "GQ": "Equatorial Guinea", 
//      "ER": "Eritrea", 
//      "EE": "Estonia", 
//      "ET": "Ethiopia", 
//      "FI": "Finland", 
//      "GF": "French Guiana", 
//      "GA": "Gabon", 
//      "GE": "Georgia", 
//      "DE": "Germany", 
//      "GH": "Ghana", 
//      "GL": "Greenland", 
//      "GD": "Grenada", 
//      "GU": "Guam", 
//      "GT": "Guatemala", 
//      "GN": "Guinea", 
//      "GW": "Guinea-Bissau", 
//      "GY": "Guyana", 
//      "HT": "Haiti", 
//      "HN": "Honduras", 
//      "HU": "Hungary", 
//      "IS": "Iceland", 
//      "IN": "India", 
//      "IR": "Iran", 
//      "IQ": "Iraq", 
//      "IE": "Ireland", 
//      "IL": "Israel", 
//      "JM": "Jamaica", 
//      "JO": "Jordan", 
//      "KZ": "Kazakhstan", 
//      "KE": "Kenya", 
//      "XK": "Kosovo", 
//      "KW": "Kuwait", 
//      "KG": "Kyrgyzstan", 
//      "LA": "Lao PDR", 
//      "LV": "Latvia", 
//      "LB": "Lebanon", 
//      "LS": "Lesotho", 
//      "LR": "Liberia", 
//      "LY": "Libya", 
//      "LT": "Lithuania", 
//      "LU": "Luxembourg", 
//      "MK": "Macedonia", 
//      "MG": "Madagascar", 
//      "MW": "Malawi", 
//      "MV": "Maldives", 
//      "ML": "Mali", 
//      "MH": "Marshall Islands", 
//      "MQ": "Martinique", 
//      "MR": "Mauritania", 
//      "YT": "Mayotte", 
//      "MX": "Mexico", 
//      "MD": "Moldova", 
//      "MN": "Mongolia", 
//      "ME": "Montenegro", 
//      "MS": "Montserrat", 
//      "MA": "Morocco", 
//      "MZ": "Mozambique", 
//      "MM": "Myanmar", 
//      "NA": "Namibia", 
//      "NR": "Nauru", 
//      "NP": "Nepal", 
//      "NL": "Netherlands", 
//      "BQBO": "Netherlands", 
//      "NI": "Nicaragua", 
//      "NE": "Niger", 
//      "NG": "Nigeria", 
//      "PK": "Pakistan", 
//      "PW": "Palau", 
//      "PS": "Palestine", 
//      "PA": "Panama", 
//      "PY": "Paraguay", 
//      "PE": "Peru", 
//      "PL": "Poland", 
//      "PT": "Portugal", 
//      "QA": "Qatar", 
//      "CG": "Republic of Congo", 
//      "KR": "Republic of Korea", 
//      "RE": "Reunion", 
//      "RO": "Romania", 
//      "RW": "Rwanda", 
//      "BQSA": "Saba (Netherlands)", 
//      "LC": "Saint Lucia", 
//      "VC": "Saint Vincent and the Grenadines", 
//      "BL": "Saint-Barthélemy", 
//      "MF": "Saint-Martin", 
//      "SA": "Saudi Arabia", 
//      "SN": "Senegal", 
//      "RS": "Serbia", 
//      "SL": "Sierra Leone", 
//      "SX": "Sint Maarten", 
//      "SK": "Slovakia", 
//      "SI": "Slovenia", 
//      "SO": "Somalia", 
//      "ZA": "South Africa", 
//      "SS": "South Sudan", 
//      "ES": "Spain", 
//      "LK": "Sri Lanka", 
//      "BQSE": "St. Eustatius (Netherlands)", 
//      "SD": "Sudan", 
//      "SR": "Suriname", 
//      "SZ": "Swaziland", 
//      "SE": "Sweden", 
//      "CH": "Switzerland", 
//      "SY": "Syria", 
//      "TW": "Taiwan", 
//      "TJ": "Tajikistan", 
//      "TZ": "Tanzania", 
//      "TH": "Thailand", 
//      "GM": "The Gambia", 
//      "TL": "Timor-Leste", 
//      "TG": "Togo", 
//      "TN": "Tunisia", 
//      "TM": "Turkmenistan", 
//      "TV": "Tuvalu", 
//      "UG": "Uganda", 
//      "UA": "Ukraine", 
//      "AE": "United Arab Emirates", 
//      "UY": "Uruguay", 
//      "UZ": "Uzbekistan", 
//      "VE": "Venezuela", 
//      "VN": "Vietnam", 
//      "EH": "Western Sahara", 
//      "YE": "Yemen", 
//      "ZM": "Zambia", 
//      "ZW": "Zimbabwe"
//    }