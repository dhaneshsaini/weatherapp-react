import { BiSolidError } from "react-icons/bi"
import { BsCloudFill, BsCloudRainFill, BsCloudSunFill, BsCloudsFill, BsFillSunFill, BsMoonFill, BsSnow } from "react-icons/bs"
import { FaCloudMoon, FaCloudMoonRain, FaCloudShowersHeavy } from "react-icons/fa";
import { MdThunderstorm } from "react-icons/md";
import { RiMistFill } from "react-icons/ri";

export default function WeatherIcon({ iconname, className, fontSize = 16 }) {
    let Icon = BiSolidError

    if (iconname === '01d') {
        Icon = BsFillSunFill
    }
    if (iconname === '02d') {
        Icon = BsCloudSunFill
    }
    if (iconname === '03d' || iconname === '03n') {
        Icon = BsCloudFill
    }
    if (iconname === '04d' || iconname === '04n') {
        Icon = BsCloudsFill
    }
    if (iconname === '09d' || iconname === '09n') {
        Icon = FaCloudShowersHeavy
    }
    if (iconname === '10d') {
        Icon = BsCloudRainFill
    }
    if (iconname === '11d' || iconname === '11n') {
        Icon = MdThunderstorm
    }
    if (iconname === '13d' || iconname === '13n') {
        Icon = BsSnow
    }
    if (iconname === '50d' || iconname === '50n') {
        Icon = RiMistFill
    }
    if (iconname === '01n') {
        Icon = BsMoonFill
    }
    if (iconname === '02n') {
        Icon = FaCloudMoon
    }
    if (iconname === '10n') {
        Icon = FaCloudMoonRain
    }

    return <Icon className={className} fontSize={fontSize} />
}