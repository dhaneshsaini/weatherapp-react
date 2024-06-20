import WeatherIcon from "./WeatherIcon"
import { getTime } from "./functions"

export default function HourCard({ data }) {
    return (
        <div className="text-center bg-gradient-to-br from-white/30 to-white/10 rounded-lg p-4">
            <span className="text-xs font-light block uppercase">{getTime(data.dt)}</span>
            <div className="flex justify-center my-3">
                <WeatherIcon fontSize={36} iconname={data.weather[0].main} />
            </div>
            <h2 className="text-lg font-medium">{Math.round(data.temp)}°</h2>
        </div>
    )
}

export function HourCardSkeleton() {
    return (
        <div className="flex flex-col justify-center items-center bg-white/10 rounded-lg p-4">
            <div className="w-1/3 h-3 mb-4 bg-white rounded-xl" />
            <div className="w-10 h-10 mb-4 bg-white rounded-xl" />
            <div className="w-1/4 h-4 bg-white rounded-xl" />
        </div>
    )
}