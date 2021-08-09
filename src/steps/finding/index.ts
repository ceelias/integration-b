import {
  IntegrationStep,
  IntegrationStepExecutionContext,
} from '@jupiterone/integration-sdk-core';

import { createAPIClient } from '../../client';
import { IntegrationConfig } from '../../config';
import { Entities, Steps } from '../constants';
import { createHostEntity } from './converter';

export async function fetchHosts({
  instance,
  jobState,
}: IntegrationStepExecutionContext<IntegrationConfig>) {
  const apiClient = createAPIClient(instance.config);

  await apiClient.iterateHosts(async (host) => {
    await jobState.addEntity(createHostEntity(host));
  });
}

export const hostSteps: IntegrationStep<IntegrationConfig>[] = [
  {
    id: Steps.HOSTS,
    name: 'Fetch Hosts',
    entities: [Entities.HOST],
    relationships: [],
    dependsOn: [],
    executionHandler: fetchHosts,
  },
];
