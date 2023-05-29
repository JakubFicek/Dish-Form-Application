export interface TextFieldProps {
  label?: string;
  type?: "number" | "text";
}

export const TextField: React.FC<
  TextFieldProps & React.HTMLProps<HTMLInputElement>
> = ({ id, name, type = "text", value, label, ...props }) => {
  return (
    <div className="form-field">
      {label && (
        <label htmlFor={name || id} className="label">
          {label}
        </label>
      )}
      <input
        id={id}
        className="text-field"
        type={type}
        name={name}
        value={value}
        {...props}
      />
    </div>
  );
};
