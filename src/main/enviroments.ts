export const isDebug =
  process.env.NODE_ENV === 'development' || process.env.DEBUG_PROD === 'true';
export const isProduction = process.env.NODE_ENV === 'production';
