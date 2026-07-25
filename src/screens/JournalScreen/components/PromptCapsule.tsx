import { gradients } from '@/constants/colors'
import { ACTIVE_OPACITY } from '@/constants/layout'
import { LinearGradient } from 'expo-linear-gradient'
import { Text, TouchableOpacity } from 'react-native'
import styles from '../styles'

type PromptCapsuleProps = {
  label: string
  onPress: () => void
}

/**
 * Slim capsule — top rim highlight + muted bottom edge (sides fade).
 */
const PromptCapsule = ({ label, onPress }: PromptCapsuleProps) => (
  <TouchableOpacity
    activeOpacity={ACTIVE_OPACITY}
    onPress={onPress}
    style={styles.promptTouchable}
  >
    <LinearGradient
      colors={gradients.promptBorder}
      locations={[0, 0.28, 0.72, 1]}
      start={{ x: 0.5, y: 0 }}
      end={{ x: 0.5, y: 1 }}
      style={styles.promptBorder}
    >
      <LinearGradient
        colors={gradients.promptFill}
        locations={[0, 0.55, 1]}
        start={{ x: 0.5, y: 0 }}
        end={{ x: 0.5, y: 1 }}
        style={styles.promptInner}
      >
        <Text style={styles.promptText}>{label}</Text>
      </LinearGradient>
    </LinearGradient>
  </TouchableOpacity>
)

export default PromptCapsule
