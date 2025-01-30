import { createEnv } from '@t3-oss/env-nextjs';
import { z } from 'zod';

export const env = createEnv({
    server: {
        POSTGRESQL_DB_URL: z.string(),
    },
    experimental__runtimeEnv: process.env,
})