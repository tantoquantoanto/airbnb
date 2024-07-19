const cities = ["Palermo", "Bologna", "Napoli", "Brescia", "Firenze", "Genova", "Milano", "Lago d'Iseo", "Garda", "Pinerolo"];

const searchInput = document.getElementById("searchInput");
const searchInputMobile = document.getElementById("searchInputMobile");
const locationsDatalist = document.getElementById("locations");
const searchBtn = document.getElementById("search-btn");
const searchBtnMobile = document.getElementById("search-btn-mobile");

cities.forEach(city => {
    const option = document.createElement("option");
    option.value = city;
    locationsDatalist.appendChild(option);
})

searchBtn.addEventListener("click", () => {
    if (searchInput.value !== "") {
        window.location.href = `page2.html?city=${searchInput.value}`;
    } else {
        searchInput.style.outline = "2px solid red";
    }
   
})

searchBtnMobile.addEventListener("click", () => {
    if (searchInputMobile.value !== "") {
        window.location.href = `page2.html?city=${searchInputMobile.value}`;
    } else {
        searchInputMobile.style.outline = "1px solid red"
    }
    
})