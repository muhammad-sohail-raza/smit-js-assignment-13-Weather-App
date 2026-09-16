let para1 = document.querySelector(".show-weather");
let para2 = document.querySelector(".show-humidity");
let para3 = document.querySelector(".show-rain-chance");
let para4 = document.querySelector(".show-heat");
let para5 = document.querySelector(".show-cloud");
let para6 = document.querySelector(".show-country");
let para7 = document.querySelector(".show-city");

async function getweather(event) {
  event.preventDefault();

  const city = document.querySelector("#inp").value;

  const apidata = await axios(
    `https://api.weatherapi.com/v1/current.json?key=335cb659d26e4e7e810152041261309&q=${city}`,
  );
  console.log(apidata);

  document.querySelector(".weather-container").style.display = "grid";

  //   Weather condition check karna
  // const condition = apidata.data.current.condition.text.toLowerCase();

  // if (condition.includes("sunny") || condition.includes("clear")) {
  //   document.body.style.backgroundImage = "url('./assets/image1.jpg')";
  // }
  // else if (condition.includes("cloud")) {
  //   document.body.style.backgroundImage = "url('./assets/image2.jpg')";
  // }
  // else if (condition.includes("rain")) {
  //   document.body.style.backgroundImage = "url('rainy.jpg')";
  // }
  // else if (condition.includes("snow")) {
  //   document.body.style.backgroundImage = "url('snow.jpg')";
  // }
  // else {
  //   document.body.style.backgroundImage = "url('default.jpg')";
  // }

  para1.innerHTML = "Weather: " + apidata.data.current.temp_c;
  para2.innerHTML = "humidity: " + apidata.data.current.humidity + "%";
  para3.innerHTML =
    "chance of rain: " + apidata.data.current.chance_of_rain + "%";
  para4.innerHTML = "Heat: " + apidata.data.current.heatindex_c + "°C";
  para5.innerHTML = "Cloud: " + apidata.data.current.cloud + "%";
  para6.innerHTML += "Country: " + apidata.data.location.country;
  para7.innerHTML += "City: " + apidata.data.location.name;
}
