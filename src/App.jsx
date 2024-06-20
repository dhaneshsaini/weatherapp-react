import { useEffect, useState } from "react"
import WeatherNow from "./components/WeatherNow"
import Forcast from "./components/Forcast"
import { FaSearch } from "react-icons/fa"

const APIKEY = 'cad7ec124945dcfff04e457e76760d90'

export default function App() {
  const [loading, setLoading] = useState(true)
  const [weather, setWeather] = useState({})
  const [oneCall, setOneCall] = useState({})
  const [searchVal, setSearchVal] = useState('')
  const [coord, setCoord] = useState({ lon: 77.2311, lat: 28.6128 })

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        const lat = position.coords.latitude || coord.lat
        const lon = position.coords.longitude || coord.lon

        fetchWeatherData(lat, lon)
      }, () => {
        fetchWeatherData(coord.lat, coord.lon)
      })
    } else {
      fetchWeatherData(coord.lat, coord.lon)
    }
  }, [coord])

  const fetchWeatherData = (lat, lon) => {
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${APIKEY}&units=metric`)
      .then(res => res.json())
      .then(data => setWeather(data))

    fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=minutely&appid=${APIKEY}&units=metric`)
      .then(res => res.json())
      .then(data => {
        setOneCall(data)
        setLoading(false)
      })
      .catch(err => setLoading(true))
  }

  const handleSearch = () => {
    if (searchVal) {
      fetch(`https://api.openweathermap.org/data/2.5/weather?q=${searchVal}&appid=${APIKEY}&units=metric`)
        .then(res => res.json())
        .then(data => {
          if (data.coord) {
            setCoord({ lat: data.coord.lat, lon: data.coord.lon })
          }
        })
    }
  }

  return (
    <main className="bg-blue-900 text-white px-5">
      <div className="min-h-screen max-w-5xl mx-auto">
        <div className="flex bg-white/5 items-center my-10 rounded-full">
          <input value={searchVal} onChange={e => setSearchVal(e.target.value)} placeholder="Search City" className="bg-transparent outline-none w-full pl-5 py-3" type="text" />
          <button onClick={handleSearch} className="px-5 py-3">
            <FaSearch />
          </button>
        </div>
        <WeatherNow Data={oneCall} Weather={weather} Loaded={loading} />
        <Forcast Data={oneCall} Loaded={loading} />
      </div>
    </main>
  )
}
