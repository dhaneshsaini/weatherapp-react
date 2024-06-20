import WeatherIcon from "./WeatherIcon"
import { getDayName } from "./functions"

export default function DayCard({ data }) {
    const date = new Date(data.dt * 1000)

    return (
        <div className="bg-gradient-to-tr from-white/5 to-white/20 rounded-lg py-1 md:py-3 flex items-center">
            <div className="px-3 md:px-5">
                <WeatherIcon className="text-[32px] md:text-[56px]" iconname={data.weather[0].icon} />
            </div>
            <div className="flex-1 px-3 md:px-5">
                <div className="mb-2">
                    <span className="block text-xs md:text-sm font-semibold">{getDayName(date.getDay())}</span>
                    <span className="text-xs font-extralight block">{date.toLocaleDateString('en-IN', {
                        day: '2-digit', month: 'long'
                    })}</span>
                </div>
                <div className="flex justify-between">
                    <div className="text-lg md:text-xl font-medium">
                        <span>{Math.floor(data.temp.min)}°</span>
                        <span className="block text-xs font-extralight">Min</span>
                    </div>
                    <div>
                        <span className="text-lg md:text-xl font-medium">{Math.floor(data.temp.max)}°</span>
                        <span className="block text-xs font-extralight">Max</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export function DayCardSkeleton() {
    return (
        <div className="bg-gradient-to-tr animate-pulse from-white/5 to-white/20 rounded-lg py-3 flex items-center">
            <div className="px-5">
                <div className="w-14 h-14 bg-white rounded-xl" />
            </div>
            <div className="flex-1 px-5">
                <div className="w-1/2 h-3 bg-white rounded-full mb-3" />
                <div className="w-1/4 h-3 bg-white rounded-full mb-3" />
                <div className="w-full h-3 bg-white rounded-full mb-3" />
                <div className="w-1/2 h-3 bg-white rounded-full" />
            </div>
        </div>
    )
}