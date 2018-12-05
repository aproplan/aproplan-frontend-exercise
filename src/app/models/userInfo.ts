
import { Timezone } from './timezone';
import { Person } from './Person';
import { Profession } from './profession';

export interface UserInfo {
  Alias: string;
  DisplayName: string;
  TimeZoneName: string;
  TimeZone: Timezone;
  DefaultEmail: string;
  LanguageCode: string;
  Person: Person;
  Company: null;
  LogoFolderId: string;
  LogoUrl: null;
  Profession: Profession;
  IsDailyMailReceiver: boolean;
  LocalTimeToSendDailyMail: string;
  IntegratorClient: null;
  CompanyName: string;
  Role: null;
  Street: null;
  Zip: null;
  City: null;
  IsDailyMyTasksReceiver: boolean;
  LocalTimeToSendDailyMyTasks: string;
  AllowSync: boolean;
  IsDemo: boolean;
  LicenseOfOwnerCompanyCanShare: boolean;
  OwnerCompany: null;
  NbReportGenerated: number;
  ActivationDate: string;
  FirstConnectionDate: string;
  OnboardingCompleted: boolean;
  IsSystem: boolean;
  ProjectSupervisor: null;
  IsFirstConnection: boolean;
  MustChangePassword: boolean;
  LastLogin: string;
  AvatarFileName: null;
  Id: string;
  EntityVersion: number;
  EntityCreationDate: string;
  EntityModificationDate: string;
  ModifiedProperties: null;
  EntityCreationUser: string;
  Deleted: boolean;
}
