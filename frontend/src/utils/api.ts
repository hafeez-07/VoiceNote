import type { ApiError } from "../types/error";

export function isApiError(err: unknown): err is ApiError {
  return (
    typeof err === "object" &&
    err !== null &&
    ("errors" in err || "error" in err)
  );
}
