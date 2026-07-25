import CustomButton from '@/components/CustomButton'
import GradientText from '@/components/GradientText'
import { Images } from '@/constants/assets'
import { gradients } from '@/constants/colors'
import { Strings } from '@/constants/strings'
import type { ChallengeStepProps } from '@/types/challenge'
import { Image } from 'expo-image'
import { useCallback, useState } from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import CommitmentCard from './components/CommitmentCard'
import SignaturePad from './components/SignaturePad'
import type { Stroke } from './constants'
import styles from './styles'

const CommitmentScreen = ({ embedded = false, onNext }: ChallengeStepProps) => {
  const [signatureStrokes, setSignatureStrokes] = useState<Stroke[]>([])

  const clearSignature = useCallback(() => {
    setSignatureStrokes([])
  }, [])

  const onSignatureStrokesChange = useCallback(
    (updater: Stroke[] | ((prev: Stroke[]) => Stroke[])) => {
      setSignatureStrokes(updater)
    },
    [],
  )

  return (
    <View style={[styles.container, embedded && styles.embeddedContainer]}>
      <View style={[styles.content, embedded && styles.embeddedContent]}>
        <View style={styles.titleBlock}>
          <GradientText
            text={Strings.makeItOfficial}
            style={styles.title}
            colors={gradients.titleFade}
            containerStyle={{ alignSelf: 'flex-start' }}
          />
          <Text style={styles.subtitle}>{Strings.promiseToYourself}</Text>
        </View>

        <CommitmentCard />

        <View style={styles.signatureCard}>
          {signatureStrokes.length > 0 && (
            <TouchableOpacity
              style={styles.clearButton}
              onPress={clearSignature}
              hitSlop={8}
            >
              <Image
                source={Images.closeIcon}
                style={styles.clearIcon}
                contentFit="contain"
              />
            </TouchableOpacity>
          )}
          <SignaturePad
            strokes={signatureStrokes}
            onStrokesChange={onSignatureStrokesChange}
          />
        </View>

        <Text style={styles.signatureDisclaimer}>
          {Strings.signatureDisclaimer}
        </Text>
      </View>

      <View style={styles.bottomButton}>
        <CustomButton
          variant="primary"
          title={Strings.letsLockIt}
          onPress={() => onNext?.()}
        />
      </View>
    </View>
  )
}

export default CommitmentScreen
