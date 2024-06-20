import WeatherIcon from "./WeatherIcon";
import { FaArrowDown, FaArrowUp, FaWind } from "react-icons/fa";
import { BsDropletFill, BsFillCloudRainFill, BsFillSunFill, BsSunriseFill, BsSunsetFill } from "react-icons/bs";
import { getTime } from "./functions";
import { MdArrowOutward } from "react-icons/md";

export default function current({ Data, Weather, Loaded }) {
    const { current } = Data

    return (
        <>
            {Loaded ? '' :
                <section>
                    <div className="mb-5">
                        <h1 className="leading-relaxed text-3xl font-light text-center">{Weather.name}</h1>
                    </div>
                    <div className="flex justify-between items-center">
                        <div className="flex flex-1 items-center gap-5 ">
                            <WeatherIcon fontSize={112} iconname={current.weather[0].main} />
                            <div>
                                <h2 className="text-8xl font-bold">
                                    {Math.round(current.temp)}°
                                </h2>
                                <p className="text-lg capitalize">
                                    {current.weather[0].description}
                                </p>
                            </div>
                        </div>
                        <div className="flex-1 grid gap-7">
                            <div className="flex-1 flex justify-end gap-10">
                                <div className="flex items-start gap-5">
                                    <div className="p-3 bg-white/5 rounded-full inline-flex justify-center items-center">
                                        <FaArrowDown />
                                    </div>
                                    <div>
                                        <span className="block">Min</span>
                                        <span className="block font-bold text-4xl">{Math.round(Weather.main.temp_min)}°</span>
                                    </div>
                                </div>
                                <div className="flex items-start gap-5">
                                    <div className="p-3 bg-white/5 rounded-full inline-block">
                                        <FaArrowUp />
                                    </div>
                                    <div>
                                        <span className="block">Max</span>
                                        <span className="block font-bold text-4xl">{Math.round(Weather.main.temp_max)}°</span>
                                    </div>
                                </div>
                            </div>
                            <div className="flex-1 flex justify-end">
                                <span className="text-orange-500 text-lg">
                                    Feels like {Math.round(current.feels_like)}°
                                </span>
                            </div>
                        </div>
                    </div>

                    <div className="my-10 grid gap-5 grid-cols-4">
                        <div className="flex gap-5 items-center p-3">
                            <div>
                                <BsFillCloudRainFill fontSize={24} />
                            </div>
                            <div>
                                <h2 className="text-gray-300 font-light text-sm">Chance of rain</h2>
                                <span className="text-xl font-semibold leading-relaxed">{current.clouds} %</span>
                            </div>
                        </div>

                        <div className="flex gap-5 items-center p-3">
                            <div>
                                <FaWind fontSize={24} />
                            </div>
                            <div>
                                <h2 className="text-gray-300 font-light text-sm">Wind</h2>
                                <span className="text-xl font-semibold leading-relaxed">{Number(current.wind_speed).toFixed(2)} km/h</span>
                            </div>
                        </div>

                        <div className="flex gap-5 items-center p-3">
                            <div>
                                <BsSunriseFill fontSize={24} />
                            </div>
                            <div>
                                <h2 className="text-gray-300 font-light text-sm">Sunrise</h2>
                                <span className="text-xl font-semibold leading-relaxed uppercase">{getTime(current.sunrise)}</span>
                            </div>
                        </div>

                        <div className="flex gap-5 items-center p-3">
                            <div>
                                <BsSunsetFill fontSize={24} />
                            </div>
                            <div>
                                <h2 className="text-gray-300 font-light text-sm">Sunset</h2>
                                <span className="text-xl font-semibold leading-relaxed uppercase">{getTime(current.sunset)}</span>
                            </div>
                        </div>

                        <div className="flex gap-5 items-center p-3">
                            <div>
                                <BsFillSunFill fontSize={24} />
                            </div>
                            <div>
                                <h2 className="text-gray-300 font-light text-sm">UV Index</h2>
                                <span className="text-xl font-semibold leading-relaxed">{Number(current.uvi).toFixed(2)}</span>
                            </div>
                        </div>

                        <div className="flex gap-5 items-center p-3">
                            <div>
                                <MdArrowOutward fontSize={24} />
                            </div>
                            <div>
                                <h2 className="text-gray-300 font-light text-sm">Pressure</h2>
                                <span className="text-xl font-semibold leading-relaxed">{current.pressure} hPa</span>
                            </div>
                        </div>

                        <div className="flex gap-5 items-center p-3">
                            <div>
                                <BsDropletFill fontSize={24} />
                            </div>
                            <div>
                                <h2 className="text-gray-300 font-light text-sm">Humidity</h2>
                                <span className="text-xl font-semibold leading-relaxed">{current.humidity} %</span>
                            </div>
                        </div>

                        <div className="flex gap-5 items-center p-3">
                            <div>
                                <FaWind fontSize={24} />
                            </div>
                            <div>
                                <h2 className="text-gray-300 font-light text-sm">Gusts</h2>
                                <span className="text-xl font-semibold leading-relaxed">{Number(current.wind_gust || current.wind_speed).toFixed(2)} km/h</span>
                            </div>
                        </div>
                    </div>
                </section>}
        </>
    )
}