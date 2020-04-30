# Day 4: Error handling

I love working with TypeScript, because type-checking makes sure you know what data you have in front of you at any given moment. However, TypeScript has no support for typed errors, so whenever you throw an error you have no idea what it could be. The TypeScript compiler even gives an error when you try to define the type of an error in the catch-block.

[Java](https://docs.oracle.com/javase/8/docs/technotes/guides/language/catch-multiple.html) and [C#](https://docs.microsoft.com/en-us/dotnet/standard/exceptions/how-to-use-the-try-catch-block-to-catch-exceptions) allow a catch-block for every type of Exception that is thrown and will even given an error (or a warning, not sure) if you don't handle all exceptions.

To handle all errors in TypeScript, you are left to your own devices. You also can't define throwable errors in your function signatures. You have to inspect the function bodies to see which errors they can throw and handle that, or dive deep into the documentation if there is any.

Today is about finding a solution or a proper workaround to type-safe error handling in TypeScript.

ts-throwable

https://medium.com/inato/expressive-error-handling-in-typescript-and-benefits-for-domain-driven-design-70726e061c86
