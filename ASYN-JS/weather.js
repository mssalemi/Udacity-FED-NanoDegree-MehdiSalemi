// This when connected to index.html will take in an input and console log it 

const API_KEY = "09ce7538678a701d7550e21265e8892f";
const baseUrl = "http://api.weatherstack.com/current?access_key=";
const query = "&query=";

const getWeatherData = async (city) => {
  console.log(city);
  const url = baseUrl + API_KEY + query + city;
  console.log(url);

  const response = await fetch(url);
  try {
    const data = await response.json();
    console.log(`DATA(await) ${data.request.query} : ${data.current.temperature} \n\nDATA IS BEING RETURNED`);
    return data;
  } catch (error) {
    console.log(`Error has Occured \n${error}`);
  }
}

document.getElementById("enter_city").addEventListener("keypress", (e) => {
  if (e.key == "Enter") {
    getWeatherData(document.getElementById("enter_city").value);
  }
})