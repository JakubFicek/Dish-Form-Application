import { DISH_TYPES, DishType } from "../api/interfaces";

import { TextField } from "./form/TextField";
import { RangeField } from "./form/RangeFIeld";
import { ErrorMessage } from "./form/ErrorMessage";
import { FormErrors } from "./DishesForm";

export type DishTypeFormProps = {
  type: DishType;
  errors?: FormErrors;
};

export const DishTypeForm: React.FC<DishTypeFormProps> = ({ type, errors }) => {
  if (type === DISH_TYPES.PIZZA) {
    return (
      <div>
        <TextField
          name="noOfSlices"
          label="Number of slices"
          type="number"
          placeholder="Slices"
          min={1}
          defaultValue={1}
          required
        />
        <ErrorMessage field="noOfSlices" errors={errors} />
        <TextField
          name="diameter"
          label="Diameter"
          type="number"
          placeholder="Diamater"
          min={1.0}
          defaultValue={1.0}
          step={0.1}
          required
        />
        <ErrorMessage field="diameter" errors={errors} />
      </div>
    );
  }

  if (type === DISH_TYPES.SOUP) {
    return (
      <div>
        <RangeField
          name="spicinessScale"
          label="Spiciness"
          min={1}
          max={10}
          defaultValue={1}
        />
        <ErrorMessage field="spicinessScale" errors={errors} />
      </div>
    );
  }

  if (type === DISH_TYPES.SANDWICH) {
    return (
      <div>
        <TextField
          name="slicesOfBread"
          label="Sices of bread"
          type="number"
          required
          placeholder="Slices"
          defaultValue={1}
        />
        <ErrorMessage field="slicesOfBread" errors={errors} />
      </div>
    );
  }

  return null;
};
