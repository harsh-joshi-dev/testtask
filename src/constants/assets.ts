/**
 * Central image registry.
 * Keys are camelCase; source files use kebab-case.
 */
export const Images = {
  editIcon: require('../assets/images/edit-icon.svg'),
  checkIcon: require('../assets/images/check-icon.svg'),
  closeIcon: require('../assets/images/close.svg'),
  cardGlow: require('../assets/images/card-glow.png'),
  topGlow: require('../assets/images/top-glow.png'),
  bottomGlow: require('../assets/images/bottom-glow.png'),
  blobOrb: require('../assets/images/blob-orb.png'),
  micIcon: require('../assets/images/mic-icon.svg'),
  chevronForward: require('../assets/images/chevron-forward.svg'),
  chevronRight: require('../assets/images/chevron-right.svg'),
} as const
