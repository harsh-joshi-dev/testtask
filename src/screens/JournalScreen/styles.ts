import { colors } from '@/constants/colors'
import {
  dmSansFontFamily,
  fontSize,
  getHeight,
  getWidth,
  spaceGroteskFontFamily,
} from '@/constants/layout'
import { Platform, StyleSheet } from 'react-native'

/** Design orb ~56% of 390pt frame */
const ORB_SIZE = getWidth(220)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.voidBlack,
  },
  topGlow: {
    position: 'absolute',
    left: getWidth(-60),
    right: getWidth(-60),
    zIndex: 0,
  },
  /** Full-bleed bottom wash — no borderRadius (matches top treatment) */
  bottomGlow: {
    position: 'absolute',
    left: getWidth(-60),
    right: getWidth(-60),
    zIndex: 1,
  },
  glowWash: {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
  },
  glowImage: {
    width: '100%',
    height: '100%',
  },
  bottomGlowImage: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: getHeight(20),
    height: getHeight(168),
    opacity: 0.75,
  },
  content: {
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: getWidth(24),
    zIndex: 2,
  },
  titleBlock: {
    alignSelf: 'center',
    zIndex: 2,
  },
  titleMask: {
    alignItems: 'center',
  },
  titleLine: {
    fontFamily: spaceGroteskFontFamily.semiBold,
    fontSize: fontSize(30),
    lineHeight: fontSize(38),
    letterSpacing: -0.5,
    color: colors.white,
    textAlign: 'center',
    includeFontPadding: false,
  },
  hiddenText: {
    opacity: 0,
  },
  orbWrap: {
    marginTop: getHeight(20),
    width: ORB_SIZE,
    height: ORB_SIZE,
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 1,
  },
  orbImage: {
    width: ORB_SIZE,
    height: ORB_SIZE,
  },
  prompts: {
    marginTop: getHeight(22),
    alignItems: 'center',
    gap: getHeight(12),
    zIndex: 2,
    width: '100%',
  },
  promptTouchable: {
    alignSelf: 'center',
  },
  promptBorder: {
    borderRadius: getWidth(100),
    padding: 1,
  },
  promptInner: {
    height: getHeight(40),
    paddingHorizontal: getWidth(20),
    borderRadius: getWidth(100),
    alignItems: 'center',
    justifyContent: 'center',
  },
  promptText: {
    fontFamily: dmSansFontFamily.regular,
    fontSize: fontSize(14),
    lineHeight: fontSize(18),
    color: colors.pillText,
    textAlign: 'center',
    includeFontPadding: false,
  },
  bottomDock: {
    zIndex: 3,
    backgroundColor: 'transparent',
  },
  bottomBarWrap: {
    paddingHorizontal: getWidth(16),
  },
  inputBar: {
    flexDirection: 'row',
    alignItems: 'center',
    height: getHeight(56),
    paddingLeft: getWidth(20),
    paddingRight: getWidth(6),
    borderRadius: getWidth(100),
    backgroundColor: colors.inputBarBg,
  },
  input: {
    flex: 1,
    fontFamily: dmSansFontFamily.regular,
    fontSize: fontSize(14),
    lineHeight: fontSize(18),
    color: colors.white,
    paddingVertical: 0,
    paddingRight: getWidth(12),
    includeFontPadding: false,
  },
  micGlow: {
    borderRadius: getWidth(23),
    ...Platform.select({
      ios: {
        shadowColor: colors.micOrange,
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.9,
        shadowRadius: 16,
      },
      android: {
        elevation: 12,
      },
      default: {},
    }),
  },
  micButton: {
    width: getWidth(44),
    height: getWidth(44),
    borderRadius: getWidth(22),
    alignItems: 'center',
    justifyContent: 'center',
  },
  micIcon: {
    width: getWidth(20),
    height: getWidth(20),
  },
})

export default styles
