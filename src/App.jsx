import { useEffect, useState } from "react";
import WeatherNow from "./components/WeatherNow";
import Forcast from "./components/Forcast";
import Search from "./components/Search";

const APIKEY = 'cad7ec124945dcfff04e457e76760d90'

export default function App() {
  const [loading, setLoading] = useState(true)
  const [weather, setWeather] = useState({})
  const [oneCall, setOneCall] = useState({})
  const [coord, setCoord] = useState({ lat: 28.612280860645814, lon: 77.20896867343079 })

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        setCoord({ lat: position.coords.latitude, lon: position.coords.longitude })
      }, () => {
        setCoord({ lat: 28.612280860645814, lon: 77.20896867343079 })
      })
    }
  }, [])

  useEffect(() => {
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${coord.lat}&lon=${coord.lon}&&exclude=minutely&appid=${APIKEY}&units=metric`)
      .then(res => res.json())
      .then(data => {
        setWeather(data)
      })
  }, [])

  useEffect(() => {
    fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${coord.lat}&lon=${coord.lon}&&exclude=minutely&appid=${APIKEY}&units=metric`)
      .then(res => res.json())
      .then(data => {
        setOneCall(data)
        setLoading(false)
      })
      .catch(err => setLoading(true))
  }, [])

  return (
    <main className="bg-blue-900 text-white">
      <div className="min-h-screen max-w-5xl mx-auto">
        <Search />
        <WeatherNow Data={oneCall} Weather={weather} Loaded={loading} />
        <Forcast Data={oneCall} Loaded={loading} />
      </div>
    </main>
  )
}