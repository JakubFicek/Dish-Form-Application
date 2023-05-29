export const DISH_TYPES = {
  SOUP: "soup",
  PIZZA: "pizza",
  SANDWICH: "sandwich",
} as const;

type Keys = keyof typeof DISH_TYPES;
export type DishType = (typeof DISH_TYPES)[Keys];

export interface Dish {
  id?: number;
  name: string;
  type: DishType;
  preparationTime: string;

  diameter?: number;
  noOfSlices?: number;
  slicesOfBread?: number;
  spicinessScale?: number;
}
