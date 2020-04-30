export enum ErrorCode {
  BadRequest = "BadRequest",
  Unauthenticated = "Unauthenticated",
  Unauthorized = "Unauthorized",
  InternalServerError = "InternalServerError",
}

export class BaseError<EC extends ErrorCode> extends Error {
  constructor(public code: EC) {
    super("unspecified error");
  }
}

export class BadRequestError extends BaseError<ErrorCode.BadRequest> {
  constructor(public problems: string[]) {
    super(ErrorCode.BadRequest);
    this.message = "Bad request";
  }
}

export class UnauthenticatedError extends BaseError<ErrorCode.Unauthenticated> {
  constructor(public loginUrl: string) {
    super(ErrorCode.Unauthenticated);
    this.message = "Unauthenticated";
  }
}

export class InternalServerError extends BaseError<
  ErrorCode.InternalServerError
> {
  constructor() {
    super(ErrorCode.InternalServerError);
    this.message = "Internal Server Error";
  }
}
