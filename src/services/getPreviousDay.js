import axios from 'axios'

const APIKEY = process.env.REACT_APP_NASA_API_KEY

const getPreviousDay = (date) => 
    axios.get(`https://api.nasa.gov/planetary/apod?api_key=${APIKEY}&date=${date}&hd=true`)
    .then(response => {
        console.log(response)
        return response.data
    }).catch(error => {
        console.log(error)
        return Promise.reject("Date must be between Jun 16, 1995 and Jun 25, 2020.", error)
    });

export default getPreviousDay