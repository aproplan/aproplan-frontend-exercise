import { UserInfo } from './userInfo';

export interface TokenInfo {
  Token: string;
  UserInfo: UserInfo;
  ValidityLimit: string;
  ValidityStart: string;
}
