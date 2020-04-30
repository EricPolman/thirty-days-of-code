# Day 4: Error handling

## Introduction

I love working with TypeScript, because type-checking makes sure you know what data you have in front of you at any given moment. However, TypeScript has no support for typed errors, so whenever you throw an error you have no idea what it could be. The TypeScript compiler even gives an error when you try to define the type of an error in the catch-block.

[Java](https://docs.oracle.com/javase/8/docs/technotes/guides/language/catch-multiple.html) and [C#](https://docs.microsoft.com/en-us/dotnet/standard/exceptions/how-to-use-the-try-catch-block-to-catch-exceptions) allow a catch-block for every type of Exception that is thrown and will even given an error (or a warning, not sure) if you don't handle all exceptions.

To handle all errors in TypeScript, you are left to your own devices. You also can't define throwable errors in your function signatures. You have to inspect the function bodies to see which errors they can throw and handle that, or dive deep into the documentation if there is any.

Today is about finding a solution or a proper workaround to type-safe error handling in TypeScript. [This article](https://medium.com/inato/expressive-error-handling-in-typescript-and-benefits-for-domain-driven-design-70726e061c86) describes the issue I am dealing with.

## Result

The result for today is a proof-of-concept that has type-safe error handling using [discriminated unions](https://www.typescriptlang.org/docs/handbook/advanced-types.html#discriminated-unions) and explicit type checks.

### Result handling

In `result.ts` you will find a `Result` generic type that is either an `Ok` or an `Err` class. By defining `Result` with two generic types (left hand is result, right hand is errors) a discriminating union is setup in the `Ok` and `Err` classes. The left hand type is used for the data-property of the `Ok` class and the right hand type(s) for the `Err` data.

Type checking functions (`isOk()`, `isErr()`) are in place to determine if an instance of `Result` is actually `Ok` or `Err`. The TypeScript compiler knows that if `isOk()` is `true`, the only type `Result` could be is `Ok` as `Err` will always return false on that check.

Helper functions `ok()` and `err()` allow you to return a specific result in a function, as demonstrated in `index.ts`.

### Error handling

Now that Result helps us determine if there is an error, I want to know what error. In `errors.ts` I have an enum called `ErrorType` which houses all possible error types that can be returned in the application. This field is used as the discriminant in the Error classes.

`BaseError<ET>` extends the default Error class and takes in an `ErrorType` value as a generic type. By setting the generic constraint `ET extends ErrorType`, the type given to `BaseError<ET>` has to be a value of `ErrorType`. In the constructor, this same value must be given, so classes deriving from it

Errors that derive from `BaseError` can now setup custom fields for this error type, as demonstrated in `BadRequestError` and `InternalServerError` (not great real-world examples of useful extra data, but it's a PoC).

### Tying it together

In `index.ts` you see a function `testFunction` that returns either a result that is either an `Ok<{data: string}>` or an `Err<BadRequestError | InternalServerError>`. Calling this function with a value of 1 results in an ok result, calling it with 2 results in a `BadRequestError` and anything else will give an `InternalServerError`.

I have set up a switch-statement and an if-else-statement that both show the type inferring done by TypeScript. As TypeScript is aware which types the error can be, any switch-case that is not part of the `Errors` in the function definition for `testFunction` will give a compilation error. In the cases that are valid, the type is correctly determined and you can use the custom properties of an error.

The if-else-statement shows that checking the discriminant (`error.type`) for `ErrorType.BadRequest` correctly determines the type as `BadRequestError` in the if-block. The else-block has only one other error type that is not handled yet (`ErrorType.InternalServerError`) and therefore must be an `InternalServerError`, allowing access to its `status` property.
