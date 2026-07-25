import { Images } from '@/constants/assets'
import { gradients } from '@/constants/colors'
import { ACTIVE_OPACITY } from '@/constants/layout'
import { Image } from 'expo-image'
import { LinearGradient } from 'expo-linear-gradient'
import { Text, TouchableOpacity, View } from 'react-native'
import styles from './styles'

type CustomButtonProps = {
  variant?: 'back' | 'primary'
  title?: string
  onPress?: () => void
}

const CustomButton = ({
  variant = 'primary',
  title,
  onPress,
}: CustomButtonProps) => {
  if (variant === 'back') {
    return (
      <TouchableOpacity
        activeOpacity={ACTIVE_OPACITY}
        onPress={onPress}
        style={styles.backButton}
      >
        <Image
          source={Images.chevronRight}
          style={styles.backIcon}
          contentFit="contain"
        />
      </TouchableOpacity>
    )
  }

  return (
    <TouchableOpacity
      activeOpacity={ACTIVE_OPACITY}
      onPress={onPress}
      style={styles.primaryWrapper}
    >
      <LinearGradient
        colors={gradients.primaryButton}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={styles.primaryBorder}
      >
        <LinearGradient
          colors={gradients.primaryButtonFill}
          locations={[0.8164, 0.9988]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          style={styles.primaryInner}
        >
          <View style={styles.primaryContent}>
            <Text style={styles.primaryText}>{title}</Text>
            <Image
              source={Images.chevronForward}
              style={styles.primaryChevron}
              contentFit="contain"
            />
          </View>
        </LinearGradient>
      </LinearGradient>
    </TouchableOpacity>
  )
}

export default CustomButton
