import { useState } from "react";

export interface RangeFieldProps {
  label?: string;
  errors?: Record<string, string>;
}

export const RangeField: React.FC<
  RangeFieldProps & React.HTMLProps<HTMLInputElement>
> = ({ id, name, label, min, max, errors, ...props }) => {
  const [spaciness, setSpaciness] = useState(props.defaultValue);

  return (
    <div className="form-field">
      {label && (
        <label htmlFor={name || id} className="label">
          {label}
        </label>
      )}
      <div className="range-container">
        <input
          className="range-field"
          {...props}
          id={id}
          type="range"
          max={max}
          min={min}
          name={name}
          onChange={(e) => setSpaciness(e.currentTarget.value)}
        />
        <p className="spiciness">{spaciness}</p>
      </div>
    </div>
  );
};
