export type SelectOption = { label: string; value: string };

export const SelectFieldOption = ({
  value,
  children,
}: React.PropsWithChildren<{ value: string }>) => (
  <option value={value}> {children} </option>
);

export interface SelectFieldProps {
  label?: string;
  options?: SelectOption[];
}

export const SelectField: React.FC<
  SelectFieldProps & React.HTMLProps<HTMLSelectElement>
> = ({ children, id, name, label, options = [], ...props }) => {
  return (
    <div className="form-field">
      {label && (
        <label htmlFor={name || id} className="label">
          {label}
        </label>
      )}
      <select id={id} name={name} className={"select-field"} {...props}>
        {options.length > 0
          ? options.map((o) => <option value={o.value}> {o.label} </option>)
          : children}
      </select>
    </div>
  );
};
