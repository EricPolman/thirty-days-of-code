import { Result, ok, err } from "./result";
import {
  BadRequestError,
  // UnauthenticatedError,
  ErrorType,
  InternalServerError,
} from "./errors";

function testFunction(
  parameter: number
): Result<{ data: string }, BadRequestError | InternalServerError> {
  if (parameter === 1) {
    return ok({ data: "yay" });
  }
  if (parameter === 2) {
    return err(new BadRequestError(["number invalid", "test value"]));
  }

  // Line below causes error during compilation, as this error cannot be returned by this function
  // return err(new UnauthenticatedError("https://example.com"));

  return err(new InternalServerError(500));
}

let result = testFunction(1);
if (result.isOk()) {
  console.log(result.data.data);
} else {
  const error = result.data;
  switch (error.type) {
    case ErrorType.BadRequest:
      console.error(error.problems);
      break;
    case ErrorType.InternalServerError:
      console.error("" + error.status);
      break;
    // Line below properly throws an error during compiling because this
    // error is not part of the function signature of testFunction().
    // case ErrorCode.UnauthenticatedError:
    //   break;
  }

  if (error.type === ErrorType.BadRequest) {
    // Type determined by control flow based type analysis
    console.log(error.problems);
  } else {
    // Has to be InternalServerError because it is not BadRequest
    console.log(error.status);
  }
}
