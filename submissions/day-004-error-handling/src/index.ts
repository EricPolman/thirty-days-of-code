import { Result, ok, err } from "./result";
import {
  BadRequestError,
  UnauthenticatedError,
  ErrorCode,
  // InternalServerError,
} from "./errors";

function testFunction(
  parameter: number
): Result<{ data: string }, BadRequestError | UnauthenticatedError> {
  if (parameter === 1) {
    return ok({ data: "yay" });
  }
  if (parameter === 2) {
    return err(new BadRequestError(["number invalid", "test value"]));
  }

  // Line below causes error during compilation, as this error cannot be returned by this function
  // return err(new InternalServerError());

  return err(new UnauthenticatedError("https://google.com"));
}

let result = testFunction(1);
if (result.isOk()) {
  console.log(result.data.data);
} else {
  const error = result.data;
  switch (error.code) {
    case ErrorCode.BadRequest:
      console.error(error.problems);
      break;
    case ErrorCode.Unauthenticated:
      console.error("" + error.loginUrl);
      break;
    default:
      console.log((error as Error).message);
      break;
    // Line below properly throws an error during compiling because this
    // error is not part of the function signature of testFunction().
    // case ErrorCode.InternalServerError:
    //   break;
  }
}
