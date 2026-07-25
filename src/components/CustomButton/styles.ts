import { colors } from '@/constants/colors'
import {
  fontSize,
  getHeight,
  getWidth,
  spaceGroteskFontFamily,
} from '@/constants/layout'
import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  backButton: {
    height: getWidth(40),
    width: getWidth(40),
    borderRadius: getWidth(5),
    borderWidth: 0.5,
    borderColor: colors.codexGrey,
    backgroundColor: colors.white0D,
    alignItems: 'center',
    justifyContent: 'center',
  },
  backIcon: {
    width: getWidth(20),
    height: getWidth(20),
  },
  primaryWrapper: {
    borderRadius: getWidth(5),
    shadowColor: colors.orangeRed,
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.6,
    shadowRadius: 16,
    elevation: 8,
  },
  primaryBorder: {
    borderRadius: getWidth(5),
    padding: 1.4,
  },
  primaryInner: {
    height: getHeight(44),
    borderRadius: getWidth(3.6),
    alignItems: 'center',
    justifyContent: 'center',
  },
  primaryContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  primaryText: {
    fontFamily: spaceGroteskFontFamily.medium,
    fontWeight: '500',
    fontSize: fontSize(13),
    color: colors.white,
  },
  primaryChevron: {
    width: getWidth(7),
    height: getWidth(11),
    marginLeft: getWidth(8),
  },
})

export default styles
