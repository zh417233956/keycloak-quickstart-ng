// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

// export const environment = {
//   production: false
// };

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


import { KeycloakConfig } from 'keycloak-angular';

// Add here your keycloak setup infos
// const keycloakConfig: KeycloakConfig = {
//   url: 'KEYCLOAK-INSTANCE-URL',
//   realm: 'REALM-NAME',
//   clientId: 'CLIENT-ID-NAME'
// };

const keycloakConfig: KeycloakConfig = {
  url: 'https://keycloaksso.517api.cn/auth/',
  realm: 'test',
  clientId: 'client-js-oidc'
};

export const environment = {
  production: false,
  keycloakConfig
};
