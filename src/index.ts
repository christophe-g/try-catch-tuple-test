import { tryCatch } from '@maxmorozoff/try-catch-tuple';

const [r] = tryCatch(() => console.log('hello world'));

test