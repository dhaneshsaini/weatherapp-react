export function getGreeting() {
    const h = new Date().getHours()

    if (h >= 5 && h < 12) {
        return "morn"
    } else if (h >= 12 && h < 17) {
        return "day"
    } else if (h >= 17 && h < 21) {
        return "eve"
    } else {
        return "night"
    }
}

export function getDayName(num) {
    const dayName = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT']
    return dayName[num]
}

export function getTime(timeInMS) {
    return new Date(timeInMS * 1000).toLocaleString('en-IN', { hour: 'numeric' })
}