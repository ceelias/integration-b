import { IntegrationConfig } from './config';
import { AcmeHost } from './types';

export type ResourceIteratee<T> = (each: T) => Promise<void> | void;

/**
 * An APIClient maintains authentication state and provides an interface to
 * third party data APIs.
 *
 * It is recommended that integrations wrap provider data APIs to provide a
 * place to handle error responses and implement common patterns for iterating
 * resources.
 */
export class APIClient {
  constructor(readonly config: IntegrationConfig) {}

  public async verifyAuthentication(): Promise<void> {
    await Promise.resolve();
    console.log('verified authentication');
  }

  public async iterateHosts(
    iteratee: ResourceIteratee<AcmeHost>,
  ): Promise<void> {
    const findings: AcmeHost[] = [
      {
        id: 'host_1',
        name: 'Host One',
        hostName: 'host_1',
      },
    ];

    for (const finding of findings) {
      await iteratee(finding);
    }
  }
}

export function createAPIClient(config: IntegrationConfig): APIClient {
  return new APIClient(config);
}
