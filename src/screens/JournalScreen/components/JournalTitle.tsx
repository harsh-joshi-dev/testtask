import { gradients } from '@/constants/colors'
import { Strings } from '@/constants/strings'
import MaskedView from '@react-native-masked-view/masked-view'
import { LinearGradient } from 'expo-linear-gradient'
import { Text, View } from 'react-native'
import styles from '../styles'

const TITLE_LINE_1 = `${Strings.tellMe}${Strings.about}`
const TITLE_LINE_2 = `${Strings.yourDay}${Strings.userFirstName}`

/**
 * Full title uses one shared L→R gradient (pale peach → coral orange),
 * matching the design wash across both lines.
 */
const JournalTitle = () => (
  <MaskedView
    style={styles.titleBlock}
    maskElement={
      <View style={styles.titleMask}>
        <Text style={styles.titleLine}>{TITLE_LINE_1}</Text>
        <Text style={styles.titleLine}>{TITLE_LINE_2}</Text>
      </View>
    }
  >
    <LinearGradient
      colors={gradients.journalTitle}
      locations={[0, 0.42, 1]}
      start={{ x: 0, y: 0.5 }}
      end={{ x: 1, y: 0.5 }}
    >
      <View style={styles.titleMask}>
        <Text style={[styles.titleLine, styles.hiddenText]}>{TITLE_LINE_1}</Text>
        <Text style={[styles.titleLine, styles.hiddenText]}>{TITLE_LINE_2}</Text>
      </View>
    </LinearGradient>
  </MaskedView>
)

export default JournalTitle
