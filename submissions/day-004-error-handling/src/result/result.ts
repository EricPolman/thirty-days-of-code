export class Ok<ResultType, ErrorTypes> {
  constructor(public readonly value: ResultType) {}

  isOk(): this is Ok<ResultType, ErrorTypes> {
    return true;
  }

  isErr(): this is Err<ResultType, ErrorTypes> {
    return false;
  }
}

export class Err<ResultType, ErrorTypes> {
  constructor(public readonly value: ErrorTypes) {}

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
  l: ResultType
): Result<ResultType, ErrorTypes> => {
  return new Ok(l);
};

export const err = <ResultType, ErrorTypes>(
  a: ErrorTypes
): Result<ResultType, ErrorTypes> => {
  return new Err<ResultType, ErrorTypes>(a);
};
