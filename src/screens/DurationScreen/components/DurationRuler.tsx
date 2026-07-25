import { gradients } from '@/constants/colors'
import { LinearGradient } from 'expo-linear-gradient'
import type { RefObject } from 'react'
import {
  type NativeScrollEvent,
  type NativeSyntheticEvent,
  ScrollView,
  View,
} from 'react-native'
import { DAYS } from '../constants'
import styles from '../styles'

type DurationRulerProps = {
  scrollRef: RefObject<ScrollView | null>
  snapOffsets: number[]
  onScroll: (event: NativeSyntheticEvent<NativeScrollEvent>) => void
  onScrollEnd: (event: NativeSyntheticEvent<NativeScrollEvent>) => void
}

const DurationRuler = ({
  scrollRef,
  snapOffsets,
  onScroll,
  onScrollEnd,
}: DurationRulerProps) => (
  <View style={styles.rulerViewport}>
    <ScrollView
      ref={scrollRef}
      horizontal
      showsHorizontalScrollIndicator={false}
      snapToOffsets={snapOffsets}
      disableIntervalMomentum
      decelerationRate="fast"
      scrollEventThrottle={16}
      onScroll={onScroll}
      onMomentumScrollEnd={onScrollEnd}
      onScrollEndDrag={onScrollEnd}
    >
      <View style={styles.rulerContent}>
        {DAYS.map((day) => (
          <View key={day} style={styles.tickSlot}>
            <View style={styles.tick} />
          </View>
        ))}
      </View>
    </ScrollView>

    <View style={styles.centerTickWrap} pointerEvents="none">
      <View style={styles.centerTick}>
        <LinearGradient
          colors={gradients.markerTick}
          locations={[0, 0.55, 1]}
          start={{ x: 0.5, y: 0 }}
          end={{ x: 0.5, y: 1 }}
          style={styles.centerTickFill}
        />
      </View>
    </View>

    <LinearGradient
      colors={gradients.rulerFadeLeft}
      locations={[0, 0.4, 1]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 0 }}
      style={styles.fadeLeft}
      pointerEvents="none"
    />
    <LinearGradient
      colors={gradients.rulerFadeRight}
      locations={[0, 0.6, 1]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 0 }}
      style={styles.fadeRight}
      pointerEvents="none"
    />
  </View>
)

export default DurationRuler
