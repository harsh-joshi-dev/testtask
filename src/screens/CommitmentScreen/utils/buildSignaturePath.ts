import type { Point } from '../constants'

export const buildSignaturePath = (points: Point[]): string => {
  if (points.length === 0) {
    return ''
  }

  if (points.length === 1) {
    const { x, y } = points[0]
    return `M ${x} ${y} L ${x + 0.1} ${y}`
  }

  let path = `M ${points[0].x} ${points[0].y}`

  for (let i = 1; i < points.length; i++) {
    const prev = points[i - 1]
    const curr = points[i]
    const midX = (prev.x + curr.x) / 2
    const midY = (prev.y + curr.y) / 2
    path += ` Q ${prev.x} ${prev.y} ${midX} ${midY}`
  }

  const last = points[points.length - 1]
  path += ` L ${last.x} ${last.y}`
  return path
}
