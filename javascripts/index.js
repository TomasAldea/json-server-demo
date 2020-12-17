const ironhackAPI = new APIHandler('http://localhost:8000');

// ironhackAPI.getAllCities();

const citiesBtn = document.getElementById('fetch-all');
const citiesList = document.getElementById('cities');

window.addEventListener("load", () => {

  citiesBtn.addEventListener("click", async () => {
    const citiesArray = await ironhackAPI.getAllCities();
    // console.log('citiesArray :>> ', citiesArray);

    citiesList.innerHTML = "";
    citiesArray.forEach(city => {
      citiesList.innerHTML += `
        <li>${city.name}</li>
      `
    })
  })

})