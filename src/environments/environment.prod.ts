import { Environment } from './interface'
import { commonEnv } from './common'

export const environment: Environment = {
  ...commonEnv,
  production: true
}
