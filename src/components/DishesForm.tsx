import React, { useEffect, useState } from "react";
import "./Components.css";

import { DISH_TYPES, Dish, DishType } from "../api/interfaces";

import { Form } from "./form/Form";
import { TextField } from "./form/TextField";
import { SelectField, SelectFieldOption } from "./form/SelectField";

import { DishTypeForm } from "./DIshesTypeForm";
import { ErrorMessage } from "./form/ErrorMessage";

export type FormValues = Dish & { [index: string]: any };
export type FormErrors = Record<string, string[]>;

const FORMAT_HH_MM_SS = "^(?:[01]\\d|2[0-3]):[0-5]\\d:[0-5]\\d$";

export interface DishesFormProps {
  apiErrors?: FormErrors;
  onSubmit: (data: Dish) => Promise<Dish | undefined>;
}

export const DishesForm: React.FC<DishesFormProps> = ({
  onSubmit,
  apiErrors,
}) => {
  const [type, setType] = useState<DishType>(DISH_TYPES.SOUP);
  const [errors, setErrors] = useState<FormErrors>();

  useEffect(() => {
    if (apiErrors) setErrors(apiErrors);
  }, [apiErrors]);

  function handleSubmit() {
    // here we could parse & validate form values with for e.g Zod, Yup
  }

  return (
    <Form<FormValues> onSubmit={onSubmit}>
      <div className="form">
        <TextField name="name" label="Dish name" placeholder="Name" required />
        <ErrorMessage field="name" errors={errors} />

        <TextField
          name="preparationTime"
          label="Preparation time"
          placeholder="HH:MM:SS"
          required
          pattern={FORMAT_HH_MM_SS}
          title="HH:MM:SS"
        />
        <ErrorMessage field="preparationTime" errors={errors} />

        <SelectField
          name="type"
          defaultValue={type}
          label="Type"
          required
          onChange={(e) => setType(e.currentTarget.value as DishType)}
        >
          <SelectFieldOption value={DISH_TYPES.PIZZA}>Pizza</SelectFieldOption>
          <SelectFieldOption value={DISH_TYPES.SOUP}>Soup</SelectFieldOption>
          <SelectFieldOption value={DISH_TYPES.SANDWICH}>
            Sandwich
          </SelectFieldOption>
        </SelectField>

        <DishTypeForm type={type} errors={errors} />
      </div>

      <button type="submit" className="button">
        Create Dish
      </button>
    </Form>
  );
};
