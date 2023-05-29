import { useState } from "react";
import { post } from "./client";

import {
  CreateDishPayload,
  CreateDishPayloadDto,
  CreateDishResponse,
} from "./dto/create-dish-payload.dto";

import { Dish } from "./interfaces";
import {
  ApiError,
  ApiValidationError,
  ValidationErrorsResponse,
} from "./errors";

export type UseDishesReturnType = {
  state: {
    result?: Dish;
    loading: boolean;
    error?: ValidationErrorsResponse;
  };
  actions: {
    reset: () => void;
    createDish: (payload: Dish) => Promise<Dish | undefined>;
  };
};

const initialState: UseDishesReturnType["state"] = {
  loading: false,
  error: undefined,
  result: undefined,
};

export function useDishes(): UseDishesReturnType {
  const [state, setState] =
    useState<UseDishesReturnType["state"]>(initialState);

  return {
    state,
    actions: {
      createDish: async (dish: Dish) => {
        try {
          setState({ loading: true, error: undefined, result: undefined });

          const payload = CreateDishPayloadDto.fromDish(dish);

          const response = await post<CreateDishPayload, CreateDishResponse>(
            "/dishes",
            payload
          );

          const result = CreateDishPayloadDto.toDish(response);

          setState({ result, loading: false, error: undefined });
          return result;
        } catch (e) {
          let error = undefined;

          if (e instanceof ApiValidationError) {
            error = e.errors;
          }

          if (e instanceof ApiError) {
            error = { api: [e.message] };
          }

          setState({ result: undefined, loading: false, error });
        }
      },

      reset: () => setState(initialState),
    },
  };
}
