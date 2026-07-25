export const MIN_DAYS = 5
export const MAX_DAYS = 90
export const DEFAULT_SELECTED_DAYS = 16
export const REST_DAYS = 0

export const DAYS = Array.from(
  { length: MAX_DAYS - MIN_DAYS + 1 },
  (_, index) => MIN_DAYS + index,
)
