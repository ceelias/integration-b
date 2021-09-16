import {
  createIntegrationEntity,
  Entity,
} from '@jupiterone/integration-sdk-core';

import { Entities } from '../constants';
import { AcmeHost } from '../../types';

export function createHostEntity(host: AcmeHost): Entity {
  return createIntegrationEntity({
    entityData: {
      source: host,
      assign: {
        _type: Entities.HOST._type,
        _class: Entities.HOST._class,
        _key: 'acme_host:' + host.id,
        username: 'testusername',
        email: 'test@test.com',
        firstName: host.name,

        // Test
        hostName: host.hostName,
        acmeProp: 'new',
      },
    },
  });
}
