import { Result, ok, err } from "./result/result";

function testFunction(
  parameter: number
): Result<{ data: string }, { message: string }> {
  if (parameter > 5) {
    return ok({ data: "asdf" });
  } else {
    return err({ message: "sumting wong" });
  }
}

let result = testFunction(5);
if (result.isOk()) {
  console.log(result.value.data);
} else {
  console.error(result.value.message);
}
