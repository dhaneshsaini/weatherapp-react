export function getDayName(num) {
    const dayName = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT']
    return dayName[num]
}

export function getTime(timeInMS) {
    return new Date(timeInMS * 1000).toLocaleString('en-IN', { hour: 'numeric' })
}