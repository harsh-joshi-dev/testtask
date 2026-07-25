import MaskedView from '@react-native-masked-view/masked-view'
import { LinearGradient } from 'expo-linear-gradient'
import { Text, type StyleProp, type TextStyle, type ViewStyle } from 'react-native'

type GradientPoint = { x: number; y: number }

type GradientTextProps = {
  text: string
  style: StyleProp<TextStyle>
  colors: [string, string, ...string[]]
  start?: GradientPoint
  end?: GradientPoint
  locations?: [number, number, ...number[]]
  containerStyle?: StyleProp<ViewStyle>
  numberOfLines?: number
}

const DEFAULT_START: GradientPoint = { x: 0.01, y: 0 }
const DEFAULT_END: GradientPoint = { x: 0.85, y: 1 }

const GradientText = ({
  text,
  style,
  colors,
  start = DEFAULT_START,
  end = DEFAULT_END,
  locations,
  containerStyle,
  numberOfLines,
}: GradientTextProps) => (
  <MaskedView
    style={containerStyle}
    maskElement={
      <Text style={style} numberOfLines={numberOfLines}>
        {text}
      </Text>
    }
  >
    <LinearGradient colors={colors} locations={locations} start={start} end={end}>
      <Text style={[style, { opacity: 0 }]} numberOfLines={numberOfLines}>
        {text}
      </Text>
    </LinearGradient>
  </MaskedView>
)

export default GradientText
