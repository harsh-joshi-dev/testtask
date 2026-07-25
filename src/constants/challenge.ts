import type { ChallengeFlowStep } from '@/types/challenge'

/**
 * Challenge wizard step configuration.
 * Shared StepHeader stays mounted; only the step body swaps.
 *
 * 0 — Duration      → progress 2 / 6
 * 1 — Commitment    → progress 3 / 6
 * 2 — Journal       → no chrome
 */
export const CHALLENGE_STEPS: readonly ChallengeFlowStep[] = [
  { filledSteps: 2, showChrome: true },
  { filledSteps: 3, showChrome: true },
  { filledSteps: 0, showChrome: false },
] as const

export const CHALLENGE_STEP_COUNT = CHALLENGE_STEPS.length

export enum ChallengeStep {
  Duration = 0,
  Commitment = 1,
  Journal = 2,
}
