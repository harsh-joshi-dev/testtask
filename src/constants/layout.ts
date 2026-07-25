import { Dimensions } from 'react-native'

export function getWidth(size: number) {
  return (size / 390) * screenSize.width
}

export function getHeight(size: number) {
  return (size / 844) * screenSize.height
}

export const screenSize = {
  height: Dimensions.get('window').height,
  width: Dimensions.get('window').width,
}

export const ACTIVE_OPACITY = 0.7

export const fontSize = (value: number) => getWidth(value)

export const spaceGroteskFontFamily = {
  medium: 'SpaceGrotesk-Medium',
  semiBold: 'SpaceGrotesk-SemiBold',
} as const

export const dmSansFontFamily = {
  regular: 'DMSans-Regular',
  medium: 'DMSans-Medium',
} as const
