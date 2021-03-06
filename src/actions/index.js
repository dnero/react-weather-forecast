import axios from 'axios';
const API_KEY = '1fbaded78433bcd81f2015b819c40a63';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;


export const FETCH_WEATHER = 'FETCH_WEATHER';

export default function fetchWeather(city) {
	
	const url = `${ROOT_URL}&q=${city},US`;
	const request = axios.get(url);

	return {
		type: FETCH_WEATHER,
		payload: request
	};
}