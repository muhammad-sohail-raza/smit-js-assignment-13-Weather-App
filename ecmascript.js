
   let para1 = document.querySelector(".show-weather");
   let para2 = document.querySelector(".show-humidity");
   let para3 = document.querySelector(".show-rain-chance");
   let para4 = document.querySelector(".show-heat");

   
 async function getweather(event){
  event.preventDefault();

   const city = document.querySelector("#inp").value;

   const apidata = await axios(`https://api.weatherapi.com/v1/current.json?key=335cb659d26e4e7e810152041261309&q=${city}`,);
 //  console.log(apidata)

   para1.innerHTML ="Weather: "+ apidata.data.current.temp_c;
   para2.innerHTML ="humidity: "+ apidata.data.current.humidity + "%";
   para3.innerHTML ="chance of rain: "+ apidata.data.current.chance_of_rain + "%";
   para4.innerHTML ="Heat: "+ apidata.data.current.heatindex_c + "°C";

}