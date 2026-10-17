process.env.LOCAL_PREVIEW = '1';

const { build } = await import('vite');
await build();
