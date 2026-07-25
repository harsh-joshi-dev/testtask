import GradientText from '@/components/GradientText'
import { gradients } from '@/constants/colors'
import { Strings } from '@/constants/strings'
import { Text, View } from 'react-native'
import styles from '../styles'

type SelectionCardProps = {
  selectedDays: number
}

const SelectionCard = ({ selectedDays }: SelectionCardProps) => (
  <View style={styles.selectionBox}>
    <View style={styles.selectionNumberWrap}>
      <GradientText
        text={String(selectedDays)}
        style={styles.selectionNumber}
        colors={gradients.titleFade}
      />
    </View>
    <Text style={styles.selectionLabel}>{Strings.quickCommitment}</Text>
  </View>
)

export default SelectionCard
