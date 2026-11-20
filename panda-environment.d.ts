import type { Conditions } from '~styled-system/types/conditions'
import type { SystemProperties } from '~styled-system/types/style-props'

declare module '~styled-system/types/register' {
  // eslint-disable-next-line @typescript-eslint/consistent-type-definitions
  interface Register {
    system: {
      Conditions: Conditions
      SystemProperties: SystemProperties
    }
  }
}
