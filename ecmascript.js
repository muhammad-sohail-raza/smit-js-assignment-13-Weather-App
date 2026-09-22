let para1 = document.querySelector(".show-weather");
let para2 = document.querySelector(".show-humidity");
let para3 = document.querySelector(".show-rain-chance");
let para4 = document.querySelector(".show-heat");
let para5 = document.querySelector(".show-cloud");
let para6 = document.querySelector(".show-country");
let para7 = document.querySelector(".show-city");
let icon1 = document.querySelector(".fa-solid fa-location-dot");
let icon2 = document.querySelector(".dot");
let tittle = document.querySelector(".h1");

async function getweather(event) {
  event.preventDefault();

  let city = document.querySelector("#inp").value.trim();
  city = city.charAt(0).toUpperCase() + city.slice(1);
  const apidata = await axios(
    `https://api.weatherapi.com/v1/current.json?key=335cb659d26e4e7e810152041261309&q=${city}`,
  );
  console.log(apidata);

  document.querySelector(".weather-container").style.display = "grid";

  //   Weather condition check karna
  const condition = apidata.data.current.condition.text.toLowerCase();
  document.body.style.animation = "none";
  if (condition.includes("sunny")) {
    document.body.style.backgroundImage = "url('./assets/image2.jpg')";
    tittle.style.color = "white";
    tittle.style.textshadow = "0 3px 8px rgba(0, 0, 0, 0.4)";
  } else if (condition.includes("cloud")) {
    document.body.style.backgroundImage = "url('./assets/image1.jpg')";
  } else if (condition.includes("rain")) {
    document.body.style.backgroundImage = "url('./assets/image3.jpg')";
  } else if (
    apidata.data.current.is_day == 0 &&
    condition.includes("rain") !== "rain"
  ) {
    document.body.style.backgroundImage = "url('./assets/image4.jpg')";
    tittle.style.color = "white";
    tittle.style.textshadow = "0 3px 8px rgba(0, 0, 0, 0.4)";
  } else {
    document.body.style.backgroundImage = "url('./assets/image5.png')";
  }

  document.body.style.animation = "fadeBackground 1s ease";
  para1.innerHTML = "Weather: " + apidata.data.current.temp_c;
  para2.innerHTML = "humidity: " + apidata.data.current.humidity + "%";
  para3.innerHTML =
    "chance of rain: " + apidata.data.current.chance_of_rain + "%";
  para4.innerHTML = "Heat: " + apidata.data.current.heatindex_c + "°C";
  para5.innerHTML = "Cloud: " + apidata.data.current.cloud + "%";
  para6.innerHTML = `<i class="fa-solid fa-flag" class="flag"></i> Country: ${apidata.data.location.country}`;
  para7.innerHTML = `<i class="fa-solid fa-location-dot"></i> City / Province: ${apidata.data.location.name} ${apidata.data.location.region}`;
}
