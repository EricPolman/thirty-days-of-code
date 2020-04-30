export class Ok<ResultType, Errors> {
  constructor(public readonly data: ResultType) {}

  isOk(): this is Ok<ResultType, Errors> {
    return true;
  }

  isErr(): this is Err<ResultType, Errors> {
    return false;
  }
}

export class Err<ResultType, Errors> {
  constructor(public readonly data: Errors) {}

  isOk(): this is Ok<ResultType, Errors> {
    return false;
  }

  isErr(): this is Err<ResultType, Errors> {
    return true;
  }
}

export type Result<ResultType, Errors> =
  | Ok<ResultType, Errors>
  | Err<ResultType, Errors>;

export const ok = <ResultType, Errors>(
  res: ResultType
): Result<ResultType, Errors> => {
  return new Ok(res);
};

export const err = <ResultType, Errors>(
  error: Errors
): Result<ResultType, Errors> => {
  return new Err<ResultType, Errors>(error);
};
