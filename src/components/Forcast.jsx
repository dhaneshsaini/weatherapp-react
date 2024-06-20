import DayCard, { DayCardSkeleton } from "./DayCard"
import HourCard, { HourCardSkeleton } from "./HourCard"

export default function Forcast({ Data, Loaded }) {
    const { daily } = Data
    const { hourly } = Data
    const skeleton = ['', '', '', '', '', '', '', '']

    return (
        <section>
            <div className="my-5">
                <h2 className="text-xl font-medium leading-relaxed">Hourly</h2>
            </div>
            <div className="grid gap-5 grid-cols-4 md:grid-flow-col mb-5">
                {Loaded ?
                    skeleton.map((item, i) => <HourCardSkeleton key={i} />)
                    :
                    hourly.slice(0, 8).map((item, i) => <HourCard key={i} data={item} />)}
            </div>


            <div className="my-5">
                <h2 className="text-xl font-medium leading-relaxed">This Week</h2>
            </div>
            <div className="grid gap-5 grid-cols-2 md:grid-cols-4 mb-5">
                {Loaded ?
                    skeleton.map((item, i) => <DayCardSkeleton key={i} />)
                    :
                    daily.map((item, i) => <DayCard key={i} data={item} />)}
            </div>
        </section>
    )
}