import { colors } from '@/constants/colors'
import {
  dmSansFontFamily,
  fontSize,
  getHeight,
  getWidth,
  screenSize,
  spaceGroteskFontFamily,
} from '@/constants/layout'
import { StyleSheet } from 'react-native'

/** Each day occupies a fixed slot so snap + center marker stay locked */
export const TICK_WIDTH = getWidth(5)
export const TICK_SLOT = getWidth(15)
export const TICK_STEP = TICK_SLOT
export const RULER_SIDE_PAD = screenSize.width / 2 - TICK_SLOT / 2

/** Grey ticks — shorter; tops align with orange */
export const TICK_HEIGHT = getHeight(54)
/** Orange marker — same top edge, hangs lower */
export const CENTER_TICK_WIDTH = getWidth(6)
export const CENTER_TICK_HEIGHT = getHeight(74)
export const RULER_HEIGHT = getHeight(78)
/** Shared top inset so grey + orange tops sit on one line */
export const RULER_TOP_PAD = getHeight(4)

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
    paddingTop: getHeight(40),
  },
  embeddedContent: {
    paddingTop: getHeight(28),
  },
  titleBlock: {
    paddingHorizontal: getWidth(32),
  },
  title: {
    fontFamily: spaceGroteskFontFamily.medium,
    fontWeight: '500',
    fontSize: fontSize(40),
    color: colors.white,
  },
  subtitle: {
    fontFamily: dmSansFontFamily.medium,
    fontWeight: '500',
    fontSize: fontSize(12),
    color: colors.codexGrey,
    marginTop: getHeight(8),
  },
  rulerSection: {
    flex: 1,
    marginTop: getHeight(48),
  },
  rulerViewport: {
    height: RULER_HEIGHT,
    justifyContent: 'flex-start',
    overflow: 'hidden',
  },
  rulerContent: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    paddingHorizontal: RULER_SIDE_PAD,
    paddingTop: RULER_TOP_PAD,
    height: RULER_HEIGHT,
  },
  tickSlot: {
    width: TICK_SLOT,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  tick: {
    width: TICK_WIDTH,
    height: TICK_HEIGHT,
    borderRadius: TICK_WIDTH / 2,
    backgroundColor: colors.tickGrey,
  },
  centerTickWrap: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: RULER_TOP_PAD,
    alignItems: 'center',
    zIndex: 2,
  },
  centerTick: {
    width: CENTER_TICK_WIDTH,
    height: CENTER_TICK_HEIGHT,
    overflow: 'hidden',
  },
  centerTickFill: {
    width: '100%',
    height: '100%',
  },
  rangeRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: getWidth(32),
    marginTop: getHeight(10),
  },
  rangeText: {
    fontFamily: dmSansFontFamily.medium,
    fontWeight: '500',
    fontSize: fontSize(12),
    color: colors.codexGrey,
  },
  selectionBox: {
    alignSelf: 'center',
    width: getWidth(150),
    height: getHeight(85),
    marginTop: getHeight(28),
    paddingBottom: getHeight(10),
    borderRadius: getWidth(8),
    borderWidth: 1,
    borderColor: colors.glassBorder,
    backgroundColor: colors.lacqueredLiquorice33,
    overflow: 'hidden',
  },
  selectionNumberWrap: {
    height: getHeight(56),
    alignItems: 'center',
    justifyContent: 'center',
  },
  selectionNumber: {
    fontFamily: spaceGroteskFontFamily.medium,
    fontWeight: '500',
    fontSize: fontSize(40),
    color: colors.white,
  },
  selectionLabel: {
    fontFamily: dmSansFontFamily.medium,
    fontWeight: '500',
    fontSize: fontSize(12),
    color: colors.codexGrey,
    textAlign: 'center',
    paddingLeft: getWidth(13),
    paddingRight: getWidth(5),
  },
  daysRow: {
    flexDirection: 'row',
    paddingHorizontal: getWidth(35),
    marginTop: 'auto',
    marginBottom: getHeight(80),
  },
  dayCard: {
    flex: 1,
    paddingHorizontal: getWidth(22),
    paddingBottom: getHeight(12),
    borderRadius: getWidth(5),
    backgroundColor: colors.white0D,
    alignItems: 'center',
    overflow: 'hidden',
  },
  dayCardLeft: {
    marginRight: getWidth(17),
  },
  dayNumberWrap: {
    height: getHeight(60),
    alignItems: 'center',
    justifyContent: 'center',
  },
  dayNumber: {
    fontFamily: spaceGroteskFontFamily.medium,
    fontWeight: '500',
    fontSize: fontSize(40),
    color: colors.white,
  },
  dayLabel: {
    alignSelf: 'stretch',
    height: getHeight(19),
    fontFamily: dmSansFontFamily.medium,
    fontWeight: '500',
    fontSize: fontSize(12),
    color: colors.codexGrey,
    textAlign: 'center',
  },
  editIcon: {
    position: 'absolute',
    top: getHeight(10),
    right: getWidth(10),
    width: getWidth(12),
    height: getWidth(12),
  },
  bottomButton: {
    paddingHorizontal: getWidth(40),
    paddingBottom: getHeight(60),
  },
  fadeLeft: {
    position: 'absolute',
    left: 0,
    top: 0,
    width: getWidth(100),
    height: RULER_HEIGHT,
    zIndex: 3,
  },
  fadeRight: {
    position: 'absolute',
    right: 0,
    top: 0,
    width: getWidth(100),
    height: RULER_HEIGHT,
    zIndex: 3,
  },
})

export default styles
