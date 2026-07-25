export type ChallengeStepProps = {
  /** When true, parent StepHeader owns back + progress chrome. */
  embedded?: boolean
  onNext?: () => void
  onBack?: () => void
}

export type ChallengeFlowStep = {
  filledSteps: number
  showChrome: boolean
}
