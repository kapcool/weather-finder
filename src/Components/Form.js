import React from 'react';


    const Form = (props) => (
            <form onSubmit = {props.getWeather}>
                <input id = "text1" type = "text" name = "city" placeholder="City....."/>
                <input id = "text2" type = "text" name = "country" placeholder="Country....."/>
                <button>Get Weather</button>
            </form>
    )
export default Form;