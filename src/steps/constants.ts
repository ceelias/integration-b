import { StepEntityMetadata } from '@jupiterone/integration-sdk-core';

export const Steps = {
  HOSTS: 'fetch-hosts',
};

export const Entities: Record<'HOST', StepEntityMetadata> = {
  HOST: {
    resourceName: 'Host',
    _type: 'acme_host',
    _class: ['Host'],
  },
};
