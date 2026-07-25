import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import type {
  NativeScrollEvent,
  NativeSyntheticEvent,
  ScrollView,
} from 'react-native'
import { DAYS, DEFAULT_SELECTED_DAYS, MIN_DAYS } from '../constants'
import { TICK_STEP } from '../styles'

export const useDayRuler = () => {
  const [selectedDays, setSelectedDays] = useState(DEFAULT_SELECTED_DAYS)
  const scrollRef = useRef<ScrollView>(null)

  const snapOffsets = useMemo(
    () => DAYS.map((_, index) => index * TICK_STEP),
    [],
  )

  useEffect(() => {
    const offset = (DEFAULT_SELECTED_DAYS - MIN_DAYS) * TICK_STEP
    requestAnimationFrame(() => {
      scrollRef.current?.scrollTo({ x: offset, animated: false })
    })
  }, [])

  const updateSelectedFromOffset = useCallback((offsetX: number) => {
    const index = Math.round(offsetX / TICK_STEP)
    const clamped = Math.min(Math.max(index, 0), DAYS.length - 1)
    const next = DAYS[clamped]
    setSelectedDays((prev) => (prev === next ? prev : next))
  }, [])

  const onScroll = useCallback(
    (event: NativeSyntheticEvent<NativeScrollEvent>) => {
      updateSelectedFromOffset(event.nativeEvent.contentOffset.x)
    },
    [updateSelectedFromOffset],
  )

  const onScrollEnd = useCallback(
    (event: NativeSyntheticEvent<NativeScrollEvent>) => {
      updateSelectedFromOffset(event.nativeEvent.contentOffset.x)
    },
    [updateSelectedFromOffset],
  )

  return {
    selectedDays,
    scrollRef,
    snapOffsets,
    onScroll,
    onScrollEnd,
  }
}
