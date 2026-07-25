import GradientText from '@/components/GradientText'
import { Images } from '@/constants/assets'
import { gradients } from '@/constants/colors'
import { Strings } from '@/constants/strings'
import { Image } from 'expo-image'
import { LinearGradient } from 'expo-linear-gradient'
import { Text, View } from 'react-native'
import { COMMIT_POINTS } from '../constants'
import styles from '../styles'

const SoftGlow = () => (
  <View style={styles.glow} pointerEvents="none">
    <Image
      source={Images.cardGlow}
      style={styles.glowImage}
      contentFit="cover"
    />
  </View>
)

const CommitmentCard = () => (
  <View style={styles.commitmentCard}>
    <SoftGlow />

    <View style={styles.cardContent}>
      <Text style={styles.commitLine} numberOfLines={1}>
        {Strings.commitPrefix}
        <Text style={styles.commitName}>{Strings.userName}</Text>
        {Strings.commitSuffix}
      </Text>

      <View style={styles.pointsList}>
        {COMMIT_POINTS.map((point) => (
          <View key={point} style={styles.pointRow}>
            <Image
              source={Images.checkIcon}
              style={styles.checkIcon}
              contentFit="contain"
            />
            <Text style={styles.pointText}>{point}</Text>
          </View>
        ))}
      </View>

      <LinearGradient
        colors={gradients.commitDivider}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        style={styles.divider}
      />

      <Text style={styles.disclaimer}>
        {Strings.commitDisclaimer}
        <Text style={styles.disclaimerHighlight}>{Strings.earnItBack}</Text>
      </Text>

      <View style={styles.iAmInWrap}>
        <GradientText
          text={Strings.iAmIn}
          style={styles.iAmIn}
          colors={gradients.iAmIn}
          locations={[0, 0.16, 0.48]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          containerStyle={{ alignSelf: 'flex-start' }}
        />
      </View>
    </View>
  </View>
)

export default CommitmentCard
