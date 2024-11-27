import './DateDisplay.scss'

import { DATE_FORMATS, INTERVAL_FORMATS } from 'lib/constants/dateFormats'
import { dayjs } from 'lib/dayjs'

import { IntervalType } from '~/types'

interface DateDisplayProps {
    date: string
    secondaryDate?: string
    interval: IntervalType
    hideWeekRange?: boolean
}

const dateHighlight = (parsedDate: dayjs.Dayjs, interval: IntervalType): string => {
    switch (interval) {
        case 'minute':
            return parsedDate.format(DATE_FORMATS.SHORT_DATE)
        case 'hour':
            return parsedDate.format(DATE_FORMATS.SHORT_DATE)
        case 'day':
            return parsedDate.format(DATE_FORMATS.SHORT_WEEKDAY)
        case 'week':
            return parsedDate.format(DATE_FORMATS.SHORT_WEEKDAY)
        case 'month':
            return parsedDate.format(DATE_FORMATS.SHORT_YEAR)
        default:
            return parsedDate.format(DATE_FORMATS.SHORT_WEEKDAY)
    }
}

export function DateDisplay({ date, secondaryDate, interval, hideWeekRange }: DateDisplayProps): JSX.Element {
    const parsedDate = dayjs.utc(date)

    return (
        <>
            <span className="dated-highlight">{dateHighlight(parsedDate, interval)}</span>
            {secondaryDate && <br />}
            <span className="date-display-dates">
                {parsedDate.format(INTERVAL_FORMATS[interval])}
                {secondaryDate && (
                    <span className="secondary-date">({dayjs(secondaryDate).format(INTERVAL_FORMATS[interval])})</span>
                )}
            </span>
            {interval === 'week' && !hideWeekRange && (
                <>
                    {' - '}
                    <DateDisplay interval="day" date={parsedDate.add(7, 'day').toJSON()} />
                </>
            )}
        </>
    )
}
