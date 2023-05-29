import { snakeToCamel } from "../utils/snake-to-camel-case";

export type ValidationErrorsResponse = Record<string, string[]>;

export class ApiError<T = unknown> extends Error {
  status: number;
  payload?: T;

  constructor(status: number, payload?: T) {
    super(`Request failed with status: ${status}.`);

    this.status = status;
    this.payload = payload;
  }
}

export class ApiValidationError extends Error {
  static readonly status = 400;
  readonly status = 400;
  readonly errors?: ValidationErrorsResponse;

  constructor(errors: ValidationErrorsResponse) {
    super(
      `Encountered validation error for: ${Object.keys(errors).join(", ")}`
    );

    this.errors = this.toCamelCase(errors);
  }

  toCamelCase(obj: ValidationErrorsResponse): ValidationErrorsResponse {
    return Object.entries(obj).reduce(
      (errors, [k, v]) => ({
        ...errors,
        [snakeToCamel(k)]: v,
      }),
      {}
    );
  }
}
