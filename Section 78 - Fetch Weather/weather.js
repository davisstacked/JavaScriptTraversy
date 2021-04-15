class Weather {
  constructor(city) {
    this.apiKey = '94b8e499a6365bf71c1bb52f774a15e9';
    this.city = city;
  }

  // Fetch weather from api
  async getWeather() {
    const response = await fetch(`api.openweathermap.org/data/2.5/weather?q=${this.city}&appid=${this.apiKey}`);

    const responseData = await response.json();

    return responseData.current_observation;
  }

  // Change weather location
  changeLocation(city, state) {
    this.city = city;
    this.state = state;
  }
}