import { ApiError, ApiValidationError } from "./errors";

export const API_URL = "https://umzzcc503l.execute-api.us-west-2.amazonaws.com";

export function post<T extends object, R = unknown>(path: string, body: T) {
  return fetch(`${API_URL}/${path}`, {
    body: JSON.stringify(body),
    headers: {
      "Content-type": "application/json",
    },
    method: "POST",
  }).then<R>(async (r) => {
    if ([200, 201].includes(r.status)) return r.json();

    const body = await r.json();

    if ([400].includes(r.status)) throw new ApiValidationError(body);

    throw new ApiError(r.status, body);
  });
}
