import { useState, useEffect } from "react";
import axios from "axios";
import Clear from "../../assets/weather/clear.png";
import Atmosphere from "../../assets/weather/atmosphere.png";
import Cloud from "../../assets/weather/cloud.png";
import Drizzle from "../../assets/weather/drizzle.png";
import Rain from "../../assets/weather/rain.png";
import Snow from "../../assets/weather/snow.png";
import Thunderstorm from "../../assets/weather/thunderstorm.png";
type Weather = {
	coord: {
		lon: number;
		lat: number;
	};
	weather: [
		{
			id: number;
			main: string;
			description: string;
			icon: string;
		}
	];
	base: string;
	main: {
		temp: number;
		feels_like: number;
		temp_min: number;
		temp_max: number;
		pressure: number;
		humidity: number;
	};
	visibility: number;
	wind: {
		speed: number;
		deg: number;
		gust: number;
	};
	clouds: {
		all: number;
	};
	dt: number;
	sys: {
		type: number;
		id: number;
		country: string;
		sunrise: number;
		sunset: number;
	};
	timezone: number;
	id: number;
	name: string;
	cod: number;
};

const StatisticsD = () => {
	const [weatherData, setWeatherData] = useState<Weather | null>(null);
	// Map weather conditions to images
	const weatherImages: { [key: string]: string } = {
		Clear: Clear,
		Atmosphere: Atmosphere,
		Cloud: Cloud,
		Drizzle: Drizzle,
		Rain: Rain,
		Snow: Snow,
		Thunderstorm: Thunderstorm,
	};

	// Determine the image source based on the weather condition
	const weatherImageSrc = weatherData
		? weatherImages[weatherData.weather[0].main]
		: "";
	useEffect(() => {
		const fetchWeatherData = async () => {
			try {
				const response = await axios.get(
					`https://api.openweathermap.org/data/2.5/weather?lat=42.98&lon=-81.24&appid=6d3e67cd8a91369d5856f3e973c06b0b`
				);
				setWeatherData(response.data);
				// API: https://openweathermap.org/current
			} catch (error) {
				console.log(error);
			}
		};
		fetchWeatherData();
	}, []);
	return (
		<div className='card h-md-100'>
			<div className='card-header d-flex flex-between-center pb-0'>
				<h6 className='mb-0'>Weather</h6>
			</div>
			<div className='card-body pt-2'>
				<div className='row g-0 h-100 align-items-center'>
					<div className='col'>
						<div
							className='d-flex align-items-center'
							style={{ width: "60px" }}
						>
							<img className='me-3' src={weatherImageSrc} alt='' height='60' />
							<div>
								<h6 className='mb-2'>{weatherData?.name}</h6>
								<div className='fs-11 fw-semi-bold'>
									<div className='text-warning'>
										{weatherData?.weather[0].main || "no data"}
									</div>
									Precipitation:
									{weatherData ? `${weatherData.main.humidity} %` : "no data"}
								</div>
							</div>
						</div>
					</div>
					<div className='col-auto text-center ps-2'>
						<div className='fs-5 fw-normal font-sans-serif text-primary mb-1 lh-1'>
							{weatherData
								? `${(weatherData.main.temp - 273.15).toFixed(1)}°`
								: "no data"}
						</div>
						<div className='fs-10 text-800'>
							{weatherData
								? `${(weatherData.main.temp_max - 273.15).toFixed(1)}° / ${(
										weatherData.main.temp_min - 273.15
								  ).toFixed(1)}°`
								: "no data"}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default StatisticsD;
