import { colors } from '@/constants/colors'
import {
  dmSansFontFamily,
  fontSize,
  getHeight,
  getWidth,
  spaceGroteskFontFamily,
} from '@/constants/layout'
import { StyleSheet } from 'react-native'

const SIDE_PADDING = 32
const CARD_PADDING_X = 23
const CARD_PADDING_TOP = 24
const CARD_PADDING_BOTTOM = 20

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.cynicalBlack,
  },
  embeddedContainer: {
    backgroundColor: 'transparent',
  },
  content: {
    flex: 1,
    paddingHorizontal: getWidth(SIDE_PADDING),
    paddingTop: getHeight(28),
  },
  embeddedContent: {
    paddingTop: getHeight(20),
  },
  titleBlock: {
    marginBottom: getHeight(20),
  },
  title: {
    fontFamily: spaceGroteskFontFamily.medium,
    fontWeight: '500',
    fontSize: fontSize(40),
    color: colors.white,
    letterSpacing: -0.5,
  },
  subtitle: {
    fontFamily: dmSansFontFamily.medium,
    fontWeight: '500',
    fontSize: fontSize(12),
    color: colors.codexGrey,
    marginTop: getHeight(8),
  },
  commitmentCard: {
    height: getHeight(368),
    borderRadius: getWidth(8),
    backgroundColor: colors.codexGrey1A,
    borderWidth: 1,
    borderColor: colors.cardBorder,
    overflow: 'hidden',
    paddingTop: getHeight(CARD_PADDING_TOP),
    paddingBottom: getHeight(CARD_PADDING_BOTTOM),
    paddingLeft: getWidth(CARD_PADDING_X),
    paddingRight: getWidth(CARD_PADDING_X),
  },
  glow: {
    position: 'absolute',
    right: getWidth(-80),
    bottom: getHeight(-90),
    width: getWidth(420),
    height: getHeight(400),
    zIndex: 0,
  },
  glowImage: {
    width: '100%',
    height: '100%',
    opacity: 1,
  },
  cardContent: {
    flex: 1,
    zIndex: 1,
    justifyContent: 'flex-start',
  },
  commitLine: {
    fontFamily: spaceGroteskFontFamily.medium,
    fontWeight: '500',
    fontSize: fontSize(20),
    lineHeight: fontSize(26),
    color: colors.white,
    marginBottom: getHeight(16),
    flexShrink: 0,
  },
  commitName: {
    fontFamily: spaceGroteskFontFamily.medium,
    fontWeight: '500',
    fontSize: fontSize(20),
    color: colors.fireOpal,
  },
  pointsList: {
    gap: getHeight(10),
    flexShrink: 0,
  },
  pointRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  checkIcon: {
    width: getWidth(15),
    height: getWidth(15),
    marginRight: getWidth(10),
    marginTop: getHeight(2),
  },
  pointText: {
    flex: 1,
    fontFamily: dmSansFontFamily.regular,
    fontWeight: '400',
    fontSize: fontSize(14),
    lineHeight: fontSize(20),
    color: colors.white,
    includeFontPadding: false,
  },
  divider: {
    height: 1,
    marginTop: getHeight(14),
    marginBottom: getHeight(12),
    flexShrink: 0,
  },
  disclaimer: {
    fontFamily: dmSansFontFamily.regular,
    fontWeight: '400',
    fontSize: fontSize(14),
    lineHeight: fontSize(20),
    color: colors.codexGrey,
    flexShrink: 0,
    includeFontPadding: false,
  },
  disclaimerHighlight: {
    color: colors.white,
  },
  iAmInWrap: {
    marginTop: 'auto',
    flexShrink: 0,
    justifyContent: 'flex-end',
  },
  iAmIn: {
    fontFamily: spaceGroteskFontFamily.medium,
    fontWeight: '500',
    fontSize: fontSize(40),
    textTransform: 'uppercase',
    letterSpacing: -0.8,
    includeFontPadding: false,
    lineHeight: fontSize(48),
    color: colors.white,
  },
  signatureCard: {
    height: getHeight(132),
    marginTop: getHeight(14),
    borderRadius: getWidth(8),
    backgroundColor: colors.codexGrey1A,
    overflow: 'hidden',
  },
  signatureSvg: {
    ...StyleSheet.absoluteFill,
  },
  clearButton: {
    position: 'absolute',
    top: getHeight(12),
    right: getWidth(12),
    zIndex: 2,
    width: getWidth(24),
    height: getWidth(24),
    alignItems: 'center',
    justifyContent: 'center',
  },
  clearIcon: {
    width: getWidth(15),
    height: getWidth(15),
  },
  signaturePad: {
    flex: 1,
  },
  signatureDisclaimer: {
    fontFamily: dmSansFontFamily.regular,
    fontWeight: '400',
    fontSize: fontSize(12),
    color: colors.codexGrey,
    marginTop: getHeight(8),
    textAlign: 'center',
  },
  bottomButton: {
    paddingHorizontal: getWidth(40),
    paddingBottom: getHeight(60),
    paddingTop: getHeight(12),
  },
})

export default styles
