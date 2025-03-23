const container = document.getElementById('data-container');

fetch('https://api.openweathermap.org/data/2.5/weather?lat=10.816&lon=122.548&appid=6e00c5e72931bedefef4d9ad84fbf0aa') // Replace with your API URL
  .then(response => response.json())
  .then(data => {
    container.innerHTML = '<h2>Data Fetched Successfully!</h2>';
    container.innerHTML += '<p>' + JSON.stringify(data, null, 2) + '</p>';
  })
  .catch(error => {
    container.innerHTML = '<h2>Error Fetching Data!</h2>';
    console.error(error);
  });