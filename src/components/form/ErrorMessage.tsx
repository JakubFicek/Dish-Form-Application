import "./ErrorMessage.css";

import { useMemo } from "react";

export type ErrorMessageProps = {
  field?: string;
  errors?: Record<string, string[]>;
};

export const ErrorMessage: React.FC<ErrorMessageProps> = ({
  field,
  errors,
}) => {
  const messages: string[] = useMemo(() => {
    if (!errors) return [];

    if (field) return errors?.[field] ?? [];

    return Object.values(errors).flat();
  }, [errors, field]);

  return (
    <>
      {messages.map((e, key) => (
        <div className="error-message" key={key}>
          {e}
        </div>
      ))}
    </>
  );
};
