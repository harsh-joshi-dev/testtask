import GradientText from '@/components/GradientText'
import { Images } from '@/constants/assets'
import { gradients } from '@/constants/colors'
import { Strings } from '@/constants/strings'
import { Image } from 'expo-image'
import { Text, View } from 'react-native'
import styles from '../styles'

type DaysBreakdownProps = {
  workoutDays: number
  restDays: number
}

const DaysBreakdown = ({ workoutDays, restDays }: DaysBreakdownProps) => (
  <View style={styles.daysRow}>
    <View style={[styles.dayCard, styles.dayCardLeft]}>
      <View style={styles.dayNumberWrap}>
        <GradientText
          text={String(workoutDays)}
          style={styles.dayNumber}
          colors={gradients.titleFade}
        />
      </View>
      <Text style={styles.dayLabel}>{Strings.workoutDays}</Text>
    </View>

    <View style={styles.dayCard}>
      <Image
        source={Images.editIcon}
        style={styles.editIcon}
        contentFit="contain"
      />
      <View style={styles.dayNumberWrap}>
        <GradientText
          text={String(restDays)}
          style={styles.dayNumber}
          colors={gradients.titleFade}
        />
      </View>
      <Text style={styles.dayLabel}>{Strings.restDays}</Text>
    </View>
  </View>
)

export default DaysBreakdown
