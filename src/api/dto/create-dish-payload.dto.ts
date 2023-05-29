import { Dish, DishType } from "../interfaces";

export interface CreateDishPayload {
  name: string;
  type: DishType;
  diameter?: number;

  no_of_slices?: number;
  spiciness_scale?: number;
  slices_of_bread?: number;
  preparation_time: string;
}

export type DishPayloadKeys = keyof CreateDishPayload;

export type CreateDishValidationErrorResponse = Record<
  DishPayloadKeys,
  string[]
>;

export type CreateDishResponse = { id: string } & CreateDishPayload;

export class CreateDishPayloadDto {
  static fromDish(dish: Dish): CreateDishPayload {
    return {
      type: dish.type,
      name: dish.name,
      diameter: dish.diameter,
      no_of_slices: dish.noOfSlices,
      slices_of_bread: dish.slicesOfBread,
      spiciness_scale: dish.spicinessScale,
      preparation_time: dish.preparationTime,
    };
  }

  static toDish(r: CreateDishResponse): Dish {
    return {
      id: Number(r.id),
      type: r.type,
      name: r.name,
      diameter: r.diameter,
      noOfSlices: r.no_of_slices,
      spicinessScale: r.spiciness_scale,
      preparationTime: r.preparation_time,
      slicesOfBread: r.slices_of_bread
    };
  }
}
