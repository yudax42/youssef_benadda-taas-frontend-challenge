type _base = string | string[] | null;

interface AuthState {
  // Todo: replace any with the correct User type
  _user: any;
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
