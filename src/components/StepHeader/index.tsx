import CustomButton from '@/components/CustomButton'
import { gradients } from '@/constants/colors'
import { LinearGradient } from 'expo-linear-gradient'
import { View } from 'react-native'
import styles, { TOTAL_STEPS } from './styles'

type StepHeaderProps = {
  filledSteps: number
  onBack?: () => void
}

const StepHeader = ({ filledSteps, onBack }: StepHeaderProps) => {
  const filled = Math.max(0, Math.min(TOTAL_STEPS, filledSteps))

  return (
    <>
      <View style={styles.header}>
        <CustomButton variant="back" onPress={onBack} />
      </View>

      <View style={styles.progressRow} pointerEvents="none">
        {Array.from({ length: TOTAL_STEPS }, (_, index) => {
          const isActive = index < filled

          if (!isActive) {
            return <View key={index} style={styles.progressSegment} />
          }

          return (
            <View key={index} style={styles.progressSegmentActive}>
              <LinearGradient
                colors={gradients.progressSegment}
                start={{ x: 0, y: 0.5 }}
                end={{ x: 1, y: 0.5 }}
                style={styles.progressSegmentFill}
              />
            </View>
          )
        })}
      </View>
    </>
  )
}

export default StepHeader
