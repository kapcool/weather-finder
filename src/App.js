import React from 'react';
import Titles from './Components/Titles';
import Form from './Components/Form';
import Weather from './Components/Weather';
import './App.css';

const API_KEY = "345cad5c996a4c868a908dabb9e6147c";
//await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`);

class App extends React.Component{


      state = {
        temprature: '',
        city: '',
        country: '',
        humidity: '',
        description: '',
        error: '',
      }

      getWeather = async(e)=>{
          e.preventDefault();
          const city = e.target.elements.city.value;
          const country = e.target.elements.country.value;

          const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`);

          const data = await api_call.json();
          console.log(data);

        if(city && country){
         this.setState({
           temprature: data.main.temp,
           city: data.name,
           country: data.sys.country,
           humidity: data.main.humidity,
           description: data.weather[0].description,
           error:""
         })
      }
      else
      {
        this.setState({
          temprature: '',
          city: '',
          country: '',
          humidity: '',
          description: '',
          error:'Please Enter The Values'
        })
      }
    }

  render(){
    return(
      <div>
        <Titles/>
        <Form getWeather = {this.getWeather}/>
        <Weather temperature={this.state.temperature} 
                    humidity={this.state.humidity}
                    city={this.state.city}
                    country={this.state.country}
                    description={this.state.description}
                    error={this.state.error}/>
      </div>
    );
  }
}

export default App;