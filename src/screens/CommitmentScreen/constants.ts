import { Strings } from '@/constants/strings'

export const SIGNATURE_STROKE_WIDTH = 2.25

export const COMMIT_POINTS = [
  Strings.commitPoint1,
  Strings.commitPoint2,
  Strings.commitPoint3,
  Strings.commitPoint4,
] as const

export type Point = { x: number; y: number }
export type Stroke = Point[]
