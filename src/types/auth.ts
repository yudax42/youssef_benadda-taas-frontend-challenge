import type User from "./user";

type _base = string | string[] | null;

interface AuthState {
  _user: User | null;
  _token: string | null;
}

interface AuthorizationError {
  type: "authorization_error";
  error: _base;
  errorDescription: _base;
  errorUri?: _base;
}

interface AuthorizationSuccess {
  type: "authorization_success";
  token: _base;
}

type AuthorizationResult = AuthorizationError | AuthorizationSuccess;

export type { AuthState, AuthorizationResult };
