import { Config } from '@stencil/core';

export const config: Config = {
  namespace: 'stripe',
  outputTargets:[
    {
      type: 'dist'
    },
    {
      type: 'www',
      serviceWorker: null
    }
  ]
};
