export enum ErrorType {
  BadRequest = "BadRequest",
  Unauthenticated = "Unauthenticated",
  Unauthorized = "Unauthorized",
  InternalServerError = "InternalServerError",
}

export class BaseError<ET extends ErrorType> extends Error {
  constructor(public type: ET) {
    super("unspecified error");
  }
}

export class BadRequestError extends BaseError<ErrorType.BadRequest> {
  constructor(public problems: string[]) {
    super(ErrorType.BadRequest);
    this.message = "Bad request";
  }
}

export class UnauthenticatedError extends BaseError<ErrorType.Unauthenticated> {
  constructor(public loginUrl: string) {
    super(ErrorType.Unauthenticated);
    this.message = "Unauthenticated";
  }
}

export class InternalServerError extends BaseError<
  ErrorType.InternalServerError
> {
  constructor(public status: number) {
    super(ErrorType.InternalServerError);
    this.message = "Internal Server Error";
  }
}
