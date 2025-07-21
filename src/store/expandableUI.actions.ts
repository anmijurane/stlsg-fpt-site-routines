import { categoryOpen, dayOpen } from "./expandableUI";

export type TypeCard = 'category' | 'day';

export const persitOpenCard = (type: TypeCard, item: number) => {
  if (type === 'category') {
    categoryOpen.set(item);
  }
  if (type === 'day') {
    dayOpen.set(item);
  }
}

export const removeOpenCard = (type: TypeCard) => {
  if (type === 'category') {
    categoryOpen.set(null);
  }
  if (type === 'day') {
    dayOpen.set(null);
  }
}
