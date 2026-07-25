import { colors } from '@/constants/colors'
import { getHeight, getWidth } from '@/constants/layout'
import { Platform, StyleSheet } from 'react-native'

export const TOTAL_STEPS = 6

const BACK_BUTTON_SIZE = 40
const PROGRESS_SEGMENT_WIDTH = 35
const PROGRESS_SEGMENT_HEIGHT = 4
const PROGRESS_SEGMENT_GAP = 4
const PROGRESS_FIRST_CENTER_X = 114
const HEADER_CENTER_Y = 104

const styles = StyleSheet.create({
  header: {
    paddingTop: getHeight(HEADER_CENTER_Y) - getWidth(BACK_BUTTON_SIZE) / 2,
    paddingLeft: getWidth(32),
    zIndex: 3,
  },
  progressRow: {
    position: 'absolute',
    top: getHeight(HEADER_CENTER_Y) - getHeight(PROGRESS_SEGMENT_HEIGHT) / 2,
    left: getWidth(PROGRESS_FIRST_CENTER_X) - getWidth(PROGRESS_SEGMENT_WIDTH) / 2,
    flexDirection: 'row',
    alignItems: 'center',
    gap: getWidth(PROGRESS_SEGMENT_GAP),
    zIndex: 2,
  },
  progressSegment: {
    width: getWidth(PROGRESS_SEGMENT_WIDTH),
    height: getHeight(PROGRESS_SEGMENT_HEIGHT),
    borderRadius: getWidth(2),
    backgroundColor: colors.tickGrey,
  },
  progressSegmentActive: {
    width: getWidth(PROGRESS_SEGMENT_WIDTH),
    height: getHeight(PROGRESS_SEGMENT_HEIGHT),
    borderRadius: getWidth(2),
    ...Platform.select({
      ios: {
        shadowColor: colors.progressOrangeStart,
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.85,
        shadowRadius: 5,
      },
      android: {
        elevation: 4,
      },
      default: {},
    }),
  },
  progressSegmentFill: {
    width: '100%',
    height: '100%',
    borderRadius: getWidth(2),
  },
})

export default styles
