import StepHeader from '@/components/StepHeader'
import {
  CHALLENGE_STEP_COUNT,
  CHALLENGE_STEPS,
  ChallengeStep,
} from '@/constants/challenge'
import CommitmentScreen from '@/screens/CommitmentScreen'
import DurationScreen from '@/screens/DurationScreen'
import JournalScreen from '@/screens/JournalScreen'
import { useCallback, useState } from 'react'
import { View } from 'react-native'
import styles from './styles'

type ChallengeFlowProps = {
  initialStep?: ChallengeStep
}

const clampStep = (step: number): ChallengeStep =>
  Math.max(0, Math.min(CHALLENGE_STEP_COUNT - 1, step)) as ChallengeStep

const ChallengeFlow = ({
  initialStep = ChallengeStep.Duration,
}: ChallengeFlowProps) => {
  const [step, setStep] = useState(() => clampStep(initialStep))
  const current = CHALLENGE_STEPS[step]

  const goNext = useCallback(
    () =>
      setStep(
        (currentStep) =>
          Math.min(CHALLENGE_STEP_COUNT - 1, currentStep + 1) as ChallengeStep,
      ),
    [],
  )

  const goBack = useCallback(
    () =>
      setStep(
        (currentStep) => Math.max(0, currentStep - 1) as ChallengeStep,
      ),
    [],
  )

  return (
    <View style={styles.container}>
      {current.showChrome && (
        <StepHeader
          filledSteps={current.filledSteps}
          onBack={step === ChallengeStep.Duration ? undefined : goBack}
        />
      )}

      <View style={styles.stepBody}>
        {step === ChallengeStep.Duration && (
          <DurationScreen embedded onNext={goNext} onBack={goBack} />
        )}
        {step === ChallengeStep.Commitment && (
          <CommitmentScreen embedded onNext={goNext} onBack={goBack} />
        )}
        {step === ChallengeStep.Journal && (
          <JournalScreen embedded onBack={goBack} />
        )}
      </View>
    </View>
  )
}

export default ChallengeFlow
