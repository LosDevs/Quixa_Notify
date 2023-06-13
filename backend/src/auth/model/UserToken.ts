import { UserPayload } from './UserPayload';

export interface UserToken {
  data: UserPayload;
  access_token: string;
}
