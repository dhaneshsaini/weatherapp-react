import { BiSolidError } from "react-icons/bi"
import { BsFillCloudHazeFill, BsFillCloudRainFill, BsFillSunFill } from "react-icons/bs"

export default function WeatherIcon({ iconname, fontSize = 16 }) {
    let Icon = BiSolidError
    if (iconname === 'Haze') {
        Icon = BsFillCloudHazeFill
    } if (iconname === 'Rain') {
        Icon = BsFillCloudRainFill
    } if (iconname === 'Clear') {
        Icon = BsFillSunFill
    }

    return <Icon fontSize={fontSize} />
}