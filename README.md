# try-catch test

This is a test for the [try-catch-tuple](https://github.com/maxmorozoff/try-catch-tuple)

I am expecting the following code to NOT pass `tsc`

```typescript
import { tryCatch } from '@maxmorozoff/try-catch-tuple';
const [r] = tryCatch(() => console.log('hello world'));

```

However, it does pass - compiles without any error,
