export type FormValues = Record<string, string | number | unknown>;

export type FormProps<T> = React.PropsWithChildren<
  {
    onSubmit: (values: T) => void | Promise<void> | any;
  } & Omit<React.HTMLProps<HTMLFormElement>, "onSubmit">
>;

export const Form = <T extends FormValues>({
  onSubmit,
  children,
  ...props
}: FormProps<T>) => {
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    e.stopPropagation();

    const form = new FormData(e.currentTarget);
    const parsed = Object.fromEntries(form.entries()) as T;
    
    onSubmit(parsed);
  }

  return (
    <form {...props} onSubmit={handleSubmit}>
      {children}
    </form>
  );
};
