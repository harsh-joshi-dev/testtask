import { ChallengeStep } from '@/constants/challenge'
import ChallengeFlow from '@/screens/ChallengeFlow'

/** Deep-link / legacy path → journal step. */
const JournalRoute = () => (
  <ChallengeFlow initialStep={ChallengeStep.Journal} />
)

export default JournalRoute
