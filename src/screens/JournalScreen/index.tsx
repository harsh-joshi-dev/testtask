import { Images } from '@/constants/assets'
import { colors, gradients } from '@/constants/colors'
import { ACTIVE_OPACITY, getHeight } from '@/constants/layout'
import { Strings } from '@/constants/strings'
import type { ChallengeStepProps } from '@/types/challenge'
import { Image } from 'expo-image'
import { LinearGradient } from 'expo-linear-gradient'
import { useState } from 'react'
import { TextInput, TouchableOpacity, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import JournalTitle from './components/JournalTitle'
import PromptCapsule from './components/PromptCapsule'
import { JOURNAL_PROMPTS } from './constants'
import styles from './styles'

const JournalScreen = (_props: ChallengeStepProps) => {
  const insets = useSafeAreaInsets()
  const [message, setMessage] = useState('')
  const bottomPad = Math.max(insets.bottom, 10)
  const topGlowHeight = insets.top + getHeight(300)
  const bottomGlowHeight = bottomPad + getHeight(240)

  return (
    <View style={styles.container}>
      <View
        pointerEvents="none"
        style={[styles.topGlow, { top: 0, height: topGlowHeight }]}
      >
        <LinearGradient
          colors={[
            'rgba(255, 90, 30, 0.55)',
            'rgba(255, 70, 20, 0.28)',
            'rgba(255, 50, 10, 0.08)',
            'transparent',
          ]}
          locations={[0, 0.28, 0.55, 1]}
          start={{ x: 0.5, y: 0 }}
          end={{ x: 0.5, y: 1 }}
          style={styles.glowWash}
        />
        <Image
          source={Images.topGlow}
          style={styles.glowImage}
          contentFit="cover"
          contentPosition="top"
        />
      </View>

      <View style={[styles.content, { paddingTop: insets.top + 36 }]}>
        <JournalTitle />

        <View style={styles.orbWrap}>
          <Image
            source={Images.blobOrb}
            style={styles.orbImage}
            contentFit="contain"
          />
        </View>

        <View style={styles.prompts}>
          {JOURNAL_PROMPTS.map((prompt) => (
            <PromptCapsule
              key={prompt}
              label={prompt}
              onPress={() => setMessage(prompt)}
            />
          ))}
        </View>
      </View>

      <View
        pointerEvents="none"
        style={[styles.bottomGlow, { bottom: 0, height: bottomGlowHeight }]}
      >
        <LinearGradient
          colors={[
            'transparent',
            'rgba(255, 50, 10, 0.06)',
            'rgba(255, 70, 20, 0.22)',
            'rgba(255, 90, 30, 0.42)',
            'rgba(255, 80, 25, 0.28)',
            'transparent',
          ]}
          locations={[0, 0.22, 0.42, 0.58, 0.78, 1]}
          start={{ x: 0.5, y: 0 }}
          end={{ x: 0.5, y: 1 }}
          style={styles.glowWash}
        />
        <Image
          source={Images.bottomGlow}
          style={styles.bottomGlowImage}
          contentFit="cover"
          contentPosition="center"
        />
      </View>

      <View
        style={[styles.bottomDock, { paddingBottom: bottomPad + getHeight(18) }]}
      >
        <View style={styles.bottomBarWrap}>
          <View style={styles.inputBar}>
            <TextInput
              style={styles.input}
              placeholder={Strings.startTyping}
              placeholderTextColor={colors.placeholder}
              value={message}
              onChangeText={setMessage}
              multiline={false}
              underlineColorAndroid="transparent"
            />
            <TouchableOpacity
              activeOpacity={ACTIVE_OPACITY}
              style={styles.micGlow}
            >
              <LinearGradient
                colors={gradients.micButton}
                locations={[0, 0.45, 1]}
                start={{ x: 0.15, y: 0 }}
                end={{ x: 0.85, y: 1 }}
                style={styles.micButton}
              >
                <Image
                  source={Images.micIcon}
                  style={styles.micIcon}
                  contentFit="contain"
                />
              </LinearGradient>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  )
}

export default JournalScreen
