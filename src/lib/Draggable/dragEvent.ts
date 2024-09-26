import { mouseEventHandler } from '@/lib/Draggable/mouseEvent'
import { touchEventHandler } from '@/lib/Draggable/touchEvent'

import { ItemInfoProps } from '@/types/island/item'

export const isTouchScreen =
  typeof window !== 'undefined' &&
  window.matchMedia('(hover: none) and (pointer: coarse)').matches

export const dragEventHandler = (
  updateItem: (item: ItemInfoProps) => void,
  isEdit: boolean,
  x: ItemInfoProps['locations']['x'],
  y: ItemInfoProps['locations']['y'],
  z: ItemInfoProps['locations']['z'],
  no: ItemInfoProps['no'],
  item_image: ItemInfoProps['item_image'],
) => {
  if (isEdit) {
    return {
      onTouchStart: (touchEvent: React.TouchEvent<HTMLDivElement>) =>
        touchEventHandler(touchEvent, updateItem, x, y, z, no, item_image),
      onMouseDown: (mouseEvent: React.MouseEvent<HTMLDivElement, MouseEvent>) =>
        mouseEventHandler(mouseEvent, updateItem, x, y, z, no, item_image),
    }
  }
}