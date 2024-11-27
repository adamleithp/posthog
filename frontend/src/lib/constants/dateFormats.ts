import { IntervalType } from '~/types'

export const DATE_FORMATS = {
    // Full date formats
    FULL_DATE: 'YYYY-MM-DD',
    FULL_DATE_TIME: 'YYYY-MM-DD HH:mm:ss',
    FULL_MONTH_YEAR: 'MMMM YYYY',

    // Short formats
    SHORT_DATE: 'DD-MMM',
    SHORT_MONTH: 'MMM',
    SHORT_WEEKDAY: 'dd',
    SHORT_YEAR: 'YYYY',

    // Time formats
    TIME_HOUR_MINUTE: 'HH:mm:00',
    TIME_HOUR: 'HH:00',
    TIME_WITH_SECONDS: 'HH:mm:ss',

    // Human readable formats
    HUMAN_DATE: 'MMMM D, YYYY',
    HUMAN_DATE_TIME: 'MMMM D, YYYY h:mm A',
    HUMAN_MONTH_YEAR: 'MMMM YYYY',

    // Special formats
    WEEK_DATE: '[Week of] MMMM D, YYYY',
} as const

export const INTERVAL_FORMATS: Record<IntervalType, string> = {
    minute: DATE_FORMATS.TIME_HOUR_MINUTE,
    hour: DATE_FORMATS.TIME_HOUR,
    day: DATE_FORMATS.SHORT_DATE,
    week: DATE_FORMATS.SHORT_DATE,
    month: DATE_FORMATS.SHORT_MONTH,
}

export const INTERVAL_FORMATS_TOOLTIP: Record<IntervalType, string> = {
    minute: DATE_FORMATS.HUMAN_DATE_TIME,
    hour: DATE_FORMATS.HUMAN_DATE_TIME,
    day: DATE_FORMATS.HUMAN_DATE,
    week: DATE_FORMATS.WEEK_DATE,
    month: DATE_FORMATS.HUMAN_MONTH_YEAR,
}
