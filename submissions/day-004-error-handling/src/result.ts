export class Ok<ResultType, ErrorTypes> {
  constructor(public readonly data: ResultType) {}

  isOk(): this is Ok<ResultType, ErrorTypes> {
    return true;
  }

  isErr(): this is Err<ResultType, ErrorTypes> {
    return false;
  }
}

export class Err<ResultType, ErrorTypes> {
  constructor(public readonly data: ErrorTypes) {}

  isOk(): this is Ok<ResultType, ErrorTypes> {
    return false;
  }

  isErr(): this is Err<ResultType, ErrorTypes> {
    return true;
  }
}

export type Result<ResultType, ErrorTypes> =
  | Ok<ResultType, ErrorTypes>
  | Err<ResultType, ErrorTypes>;

export const ok = <ResultType, ErrorTypes>(
  res: ResultType
): Result<ResultType, ErrorTypes> => {
  return new Ok(res);
};

export const err = <ResultType, ErrorTypes>(
  error: ErrorTypes
): Result<ResultType, ErrorTypes> => {
  return new Err<ResultType, ErrorTypes>(error);
};
