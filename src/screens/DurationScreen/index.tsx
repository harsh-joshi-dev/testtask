import CustomButton from '@/components/CustomButton'
import GradientText from '@/components/GradientText'
import { gradients } from '@/constants/colors'
import { Strings } from '@/constants/strings'
import type { ChallengeStepProps } from '@/types/challenge'
import { Text, View } from 'react-native'
import DaysBreakdown from './components/DaysBreakdown'
import DurationRuler from './components/DurationRuler'
import SelectionCard from './components/SelectionCard'
import { REST_DAYS } from './constants'
import { useDayRuler } from './hooks/useDayRuler'
import styles from './styles'

const DurationScreen = ({ embedded = false, onNext }: ChallengeStepProps) => {
  const { selectedDays, scrollRef, snapOffsets, onScroll, onScrollEnd } =
    useDayRuler()

  const workoutDays = selectedDays - REST_DAYS

  return (
    <View style={[styles.container, embedded && styles.embeddedContainer]}>
      <View style={[styles.content, embedded && styles.embeddedContent]}>
        <View style={styles.titleBlock}>
          <GradientText
            text={Strings.howLong}
            style={styles.title}
            colors={gradients.titleFade}
          />
          <Text style={styles.subtitle}>{Strings.setDurationSubtitle}</Text>
        </View>

        <View style={styles.rulerSection}>
          <DurationRuler
            scrollRef={scrollRef}
            snapOffsets={snapOffsets}
            onScroll={onScroll}
            onScrollEnd={onScrollEnd}
          />

          <View style={styles.rangeRow}>
            <Text style={styles.rangeText}>{Strings.days5}</Text>
            <Text style={styles.rangeText}>{Strings.days90}</Text>
          </View>

          <SelectionCard selectedDays={selectedDays} />
          <DaysBreakdown workoutDays={workoutDays} restDays={REST_DAYS} />
        </View>
      </View>

      <View style={styles.bottomButton}>
        <CustomButton
          variant="primary"
          title={Strings.setDuration}
          onPress={() => onNext?.()}
        />
      </View>
    </View>
  )
}

export default DurationScreen
