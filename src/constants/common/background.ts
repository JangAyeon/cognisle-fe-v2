import { backgroundTypeInfoProps } from '@/types'

export const BACKGROUND_TYPE_INFO: backgroundTypeInfoProps = {
  login: {
    img: { src: '/assets/background/triangle.svg', width: 43, height: 84.9 },
    color: {
      start: '--gradient-yellow-100',
      end: '--color-green-300',
      degree: '180deg',
    },
  },
  home: {
    img: { src: '/assets/background/island.svg', width: 25, height: 25 },
    color: {
      start: '--gradient-yellow-100',
      end: '--color-pink-100',
      degree: '180deg',
    },
  },
  signup: {
    img: { src: '/assets/background/triangle.svg', width: 43, height: 84.9 },
    color: {
      start: '--gradient-yellow-100',
      end: '--color-blue-100',
      degree: '180deg',
    },
  },
}