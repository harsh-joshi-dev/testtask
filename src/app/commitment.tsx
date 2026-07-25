import { ChallengeStep } from '@/constants/challenge'
import ChallengeFlow from '@/screens/ChallengeFlow'

/** Deep-link / legacy path → commitment step. */
const CommitmentRoute = () => (
  <ChallengeFlow initialStep={ChallengeStep.Commitment} />
)

export default CommitmentRoute
