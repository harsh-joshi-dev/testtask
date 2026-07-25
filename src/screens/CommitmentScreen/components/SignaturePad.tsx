import { colors } from '@/constants/colors'
import { getWidth } from '@/constants/layout'
import { useMemo, useRef, useState } from 'react'
import {
  type LayoutChangeEvent,
  PanResponder,
  View,
} from 'react-native'
import Svg, { Path, Rect } from 'react-native-svg'
import { SIGNATURE_STROKE_WIDTH, type Stroke } from '../constants'
import styles from '../styles'
import { buildSignaturePath } from '../utils/buildSignaturePath'

type SignaturePadProps = {
  strokes: Stroke[]
  onStrokesChange: (updater: Stroke[] | ((prev: Stroke[]) => Stroke[])) => void
}

const SignaturePad = ({ strokes, onStrokesChange }: SignaturePadProps) => {
  const currentStroke = useRef<Stroke>([])
  const [size, setSize] = useState({ width: 0, height: 0 })

  const onLayout = (event: LayoutChangeEvent) => {
    const { width, height } = event.nativeEvent.layout
    setSize({ width, height })
  }

  const panResponder = useMemo(
    () =>
      PanResponder.create({
        onStartShouldSetPanResponder: () => true,
        onMoveShouldSetPanResponder: () => true,
        onPanResponderGrant: (event) => {
          const { locationX, locationY } = event.nativeEvent
          currentStroke.current = [{ x: locationX, y: locationY }]
          onStrokesChange((prev) => [...prev, currentStroke.current])
        },
        onPanResponderMove: (event) => {
          const { locationX, locationY } = event.nativeEvent
          const last = currentStroke.current[currentStroke.current.length - 1]

          if (
            last &&
            Math.abs(last.x - locationX) < 1.2 &&
            Math.abs(last.y - locationY) < 1.2
          ) {
            return
          }

          currentStroke.current = [
            ...currentStroke.current,
            { x: locationX, y: locationY },
          ]

          onStrokesChange((prev) => {
            if (prev.length === 0) {
              return [currentStroke.current]
            }
            const next = [...prev]
            next[next.length - 1] = currentStroke.current
            return next
          })
        },
      }),
    [onStrokesChange],
  )

  const strokeWidth = 1.5
  const inset = strokeWidth
  const radius = getWidth(6)
  const dash = `${getWidth(5)} ${getWidth(5)}`

  return (
    <View style={styles.signaturePad} onLayout={onLayout} {...panResponder.panHandlers}>
      {size.width > 0 && (
        <Svg
          width={size.width}
          height={size.height}
          style={styles.signatureSvg}
          pointerEvents="none"
        >
          <Rect
            x={inset}
            y={inset}
            width={Math.max(size.width - inset * 2, 0)}
            height={Math.max(size.height - inset * 2, 0)}
            rx={radius}
            ry={radius}
            fill="none"
            stroke={colors.fireOpal}
            strokeWidth={strokeWidth}
            strokeDasharray={dash}
          />
          {strokes.map((stroke, index) => {
            const path = buildSignaturePath(stroke)
            if (!path) {
              return null
            }
            return (
              <Path
                key={`stroke-${index}`}
                d={path}
                stroke={colors.white}
                strokeWidth={SIGNATURE_STROKE_WIDTH}
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            )
          })}
        </Svg>
      )}
    </View>
  )
}

export default SignaturePad
